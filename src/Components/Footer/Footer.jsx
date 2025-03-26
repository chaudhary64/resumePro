// Footer.jsx
import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { collapser, expander } from "../../utils/animation";
import { useAnimation } from "framer-motion";
import { Info } from "../../Context/Context";

const Footer = ({ toogleElement, setToggleElement }) => {
  const footerWrapper = useAnimation();
  const { formData, setFormData } = useContext(Info);

  useEffect(() => {
    console.log("Updated formData:", formData);
  }, [formData]);

  const handleFooterChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      footer: value,
    }));
  };

  return (
    <section className="pb-4 border-b border-gray-200">
      <div className="pt-4 flex justify-between items-center">
        <p>Footer</p>
        <span
          onClick={() => {
            console.log("Saving Data:", formData.footer);
            toogleElement.footer
              ? collapser(footerWrapper)
              : expander(footerWrapper);
            setToggleElement((prev) => ({
              ...prev,
              footer: !prev.footer,
            }));
          }}
          className="rounded border border-gray-400"
        >
          {toogleElement.footer ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              className="pointer-events-none flex-shrink-0 box-content h-6 w-6"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M480-542.463 317.076-379.539q-8.307 8.308-20.884 8.5t-21.268-8.5q-8.693-8.692-8.693-21.076t8.693-21.077l179.769-179.769q5.615-5.615 11.846-7.923T480-611.691t13.461 2.307q6.231 2.308 11.846 7.923l179.769 179.769q8.308 8.308 8.5 20.884t-8.5 21.269T664-370.847t-21.076-8.692z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              className="pointer-events-none flex-shrink-0 box-content h-6 w-6 text-gray-700"
            >
              <path
                fill="currentColor"
                d="M480-373.539q-7.231 0-13.461-2.308t-11.846-7.923L274.924-563.539q-8.308-8.307-8.5-20.884t8.5-21.269T296-614.384t21.076 8.692L480-442.768l162.924-162.924q8.307-8.307 20.884-8.5t21.268 8.5q8.693 8.692 8.693 21.077 0 12.384-8.693 21.076L505.307-383.77q-5.615 5.615-11.846 7.923T480-373.539"
              ></path>
            </svg>
          )}
        </span>
      </div>

      <motion.section
        initial={{ height: 0, visibility: "none" }}
        animate={footerWrapper}
        className="overflow-hidden"
      >
        <div className="border p-4 my-2 rounded">
          <label className="block text-sm font-medium">Footer Text</label>
          <input
            type="text"
            value={formData.footer || ""}
            onChange={(e) => handleFooterChange(e.target.value)}
            className="border p-2 w-full rounded"
            placeholder="Enter footer text (e.g., References available upon request)"
          />
        </div>
      </motion.section>
    </section>
  );
};

export default Footer;
