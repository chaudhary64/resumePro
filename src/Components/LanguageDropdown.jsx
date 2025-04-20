import { Menu, Dropdown, Input, Button, Modal, Spin } from "antd";
import { DownOutlined } from "@ant-design/icons";
import React, { useState, useEffect, useContext } from "react";
import { GoogleGenAI } from "@google/genai";
import { useParams } from "react-router";
import jsPDF from "jspdf";
import { MdOutlineFileDownload } from "react-icons/md";
import { Info } from "../Context/Context";

export default function LanguageDropdown() {
  let { id } = useParams();
  id = id.toString().padStart(2, "0");

  const {
    languages,
    setLanguages,
    search,
    setSearch,
    selectedLang,
    setSelectedLang,
    modalVisible,
    setModalVisible,
  } = useContext(Info);

  const [isTranslating, setIsTranslating] = useState(false);

  async function translateSvgTextWithGemini(svgCode, targetLanguage) {
    const ai = new GoogleGenAI({
      apiKey: import.meta.env.VITE_GOOGLE_GENAI_API_KEY,
    });

    const prompt = `
I will provide you with raw SVG code that contains visible text in English. Your task is to:

1. Extract only the human-readable text visible to users (ignore tags, attributes, styles).
2. Translate that visible text into "${targetLanguage}".
3. Replace the original visible text in the SVG code with the translated version.
4. Do NOT modify SVG structure, tags, attributes, formatting, or styling.
5. Output ONLY the final modified SVG code as a string, without any explanation, markdown formatting, or extra text.

Here is the SVG code:

${svgCode}
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });

    let resultText = response.candidates[0].content.parts[0].text.trim();

    if (resultText.startsWith("```")) {
      resultText = resultText
        .replace(/```(?:xml|svg)?\n/, "")
        .replace(/```$/, "")
        .trim();
    }

    const parser = new DOMParser();
    const doc = parser.parseFromString(resultText, "image/svg+xml");
    const parsedSvg = doc.documentElement;

    if (parsedSvg.nodeName === "parsererror") {
      console.error("SVG parsing error:", parsedSvg.textContent);
      return null;
    }

    return {
      svgElement: parsedSvg,
      svgString: resultText,
    };
  }

  const handleDownload = async (svgElement) => {
    const scale = 6;
    const clonedSvg = svgElement.cloneNode(true);

    let width = parseFloat(clonedSvg.getAttribute("width"));
    let height = parseFloat(clonedSvg.getAttribute("height"));
    const viewBox = clonedSvg.getAttribute("viewBox");

    if (!width || !height) {
      if (viewBox) {
        const vb = viewBox.split(" ").map(Number);
        width = vb[2];
        height = vb[3];
      } else {
        console.error("SVG must have width/height or viewBox.");
        return;
      }
    }

    clonedSvg.setAttribute("width", width * scale);
    clonedSvg.setAttribute("height", height * scale);

    const svgData = new XMLSerializer().serializeToString(clonedSvg);
    const svgBlob = new Blob([svgData], {
      type: "image/svg+xml;charset=utf-8",
    });
    const url = URL.createObjectURL(svgBlob);

    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = width * scale;
      canvas.height = height * scale;

      const ctx = canvas.getContext("2d");
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      URL.revokeObjectURL(url);

      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: [canvas.width, canvas.height],
      });

      pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
      pdf.save("high-quality-svg.pdf");
    };

    img.src = url;
  };

  const filteredLanguages = languages.filter((lang) =>
    lang.name.toLowerCase().includes(search.toLowerCase())
  );

  const items = [
    {
      type: "group",
      label: "Select Language for Resume",
      children: [
        {
          key: "search",
          label: (
            <Input
              placeholder="Search for a language"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ marginBottom: 8 }}
            />
          ),
          disabled: true,
        },
        ...filteredLanguages.map((lang) => ({
          key: lang.code,
          label: (
            <span
              style={{
                fontWeight: selectedLang === lang.code ? "bold" : "normal",
              }}
            >
              {selectedLang === lang.code ? "✔️ " : ""}
              {lang.code.toUpperCase()} {lang.name}
            </span>
          ),
          onClick: async () => {
            setIsTranslating(true);
            setSelectedLang(lang.code);
            setModalVisible(false);

            const svgElement = document.getElementById(id);
            if (svgElement) {
              const svgCode = new XMLSerializer().serializeToString(svgElement);
              const result = await translateSvgTextWithGemini(
                svgCode,
                lang.code
              );

              if (result) {
                await handleDownload(result.svgElement);
              }
            } else {
              console.warn("⚠️ SVG element not found.");
            }

            setIsTranslating(false);
          },
        })),
      ],
    },
  ];

  const showModal = () => setModalVisible(true);

  return (
    <div>
      <button
        className="max-lg:w-full px-3 py-1 bg-[#4314B6] flex justify-center items-center gap-2 rounded hover:bg-[#5e2ad6] transition duration-300 cursor-pointer"
        onClick={showModal}
      >
        <MdOutlineFileDownload />
        Download
      </button>

      <Modal
        title="Select Language"
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
        width={400}
      >
        <Dropdown menu={{ items }} trigger={["click"]} placement="bottomLeft">
          <Button style={{ width: "100%" }}>
            🌐 {selectedLang.toUpperCase()} <DownOutlined />
          </Button>
        </Dropdown>
        <p>
          Selected language:{" "}
          {languages.find((lang) => lang.code === selectedLang)?.name}
        </p>
      </Modal>

      {isTranslating && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-white px-4 py-2 rounded shadow-lg border flex items-center gap-2">
            <Spin size="small" />
            <span className="text-sm text-black">Processing...</span>
          </div>
        </div>
      )}
    </div>
  );
}
