import React, { useContext, useEffect, useState } from "react";
import { Info } from "../../Context/Context";

// Helper for SVG text wrapping (greedy algorithm)
function wrapSvgText(text, maxWidth, font = "10px Montserrat") {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  ctx.font = font;
  const words = text.split(" ");
  const lines = [];
  let currentLine = "";
  for (let i = 0; i < words.length; i++) {
    const testLine = currentLine ? currentLine + " " + words[i] : words[i];
    const testWidth = ctx.measureText(testLine).width;
    if (testWidth > maxWidth && currentLine) {
      lines.push(currentLine);
      currentLine = words[i];
    } else {
      currentLine = testLine;
    }
  }
  if (currentLine) lines.push(currentLine);
  return lines;
}

// Helper for wrapping and aligning personal info fields (icon+text)
function wrapPersonalInfoSVG(
  fields,
  formData,
  startX = 20,
  startY = 71.375,
  maxRowWidth = 560,
  font = "Montserrat",
  fontSize = 10,
  iconGap = 4,
  xSpacing = 18,
  ySpacing = 10,
  lineHeight = 12
) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  ctx.font = `${fontSize}px ${font}`;
  let x = startX;
  let y = startY;
  let maxHeightInRow = 0;
  let elements = [];
  let lastY = startY;
  fields.forEach((field, idx) => {
    const value = formData.personalInfo[field.key];
    if (!value) return;
    const lines = wrapSvgText(
      value,
      field.maxTextWidth,
      `${fontSize}px ${font}`
    );
    const textWidths = lines.map((line) => ctx.measureText(line).width);
    const blockWidth =
      field.iconWidth + iconGap + Math.max(...textWidths) + xSpacing;
    const blockHeight = lines.length * lineHeight;
    if (x + blockWidth > startX + maxRowWidth) {
      x = startX;
      y += maxHeightInRow + ySpacing;
      maxHeightInRow = 0;
    }
    // Icon
    elements.push(
      <image
        key={`icon-${field.key}-${y}`}
        imageRendering="optimizeSpeed"
        href={field.icon}
        height={field.iconHeight}
        width={field.iconWidth}
        x={x}
        y={y}
      />
    );
    // Text (multi-line)
    lines.forEach((line, i) => {
      elements.push(
        <text
          key={`text-${field.key}-${y}-${i}`}
          fill="black"
          fontSize={fontSize}
          fontFamily={font}
          x={x + field.iconWidth + iconGap}
          y={y + 8 + i * lineHeight}
        >
          {line}
        </text>
      );
    });
    x += blockWidth;
    if (blockHeight > maxHeightInRow) maxHeightInRow = blockHeight;
    lastY = y + blockHeight;
  });
  return { elements, bottomY: lastY };
}

// Helper for wrapping inline items (skills, languages, hobbies)
function wrapInlineItems(
  items,
  getLabel,
  startY,
  font = "11px LiberationSans",
  fontSize = 11,
  xStart = 200,
  yPad = 0,
  maxWidth = 360,
  xSpacing = 18,
  ySpacing = 22
) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  ctx.font = `${fontSize}px ${font}`;
  let x = xStart;
  let y = startY + yPad;
  let positions = [];
  let maxX = xStart;
  items.forEach((item, idx) => {
    const label = getLabel(item);
    const textWidth = ctx.measureText(label).width + xSpacing;
    if (x + textWidth > xStart + maxWidth) {
      x = xStart;
      y += ySpacing;
    }
    positions.push({ x, y, label, idx });
    x += textWidth;
    if (x > maxX) maxX = x;
  });
  return {
    height: y - startY + ySpacing,
    render: positions.map(({ x, y, label, idx }) => (
      <text
        key={idx}
        fill="black"
        fontSize={fontSize}
        fontFamily={font}
        x={x}
        y={y}
      >
        {label}
      </text>
    )),
    lastY: y,
  };
}

// Personal info field configuration (replace icon base64s as needed)
const personalInfoFields = [
  {
    key: "email",
    icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiMzZTk0ZTQiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PHBhdGggZD0iTTUwMi4zIDE5MC44YzMuOS0zLjEgOS43LS4yIDkuNyA0LjdWNDAwYzAgMjYuNS0yMS41IDQ4LTQ4IDQ4SDQ4Yy0yNi41IDAtNDgtMjEuNS00OC00OFYxOTUuNmMwLTUgNS43LTcuOCA5LjctNC43IDIyLjQgMTcuNCA1Mi4xIDM5LjUgMTU0LjEgMTEzLjYgMjEuMSAxNS40IDU2LjcgNDcuOCA5Mi4yIDQ3LjYgMzUuNy4zIDcyLTMyLjggOTIuMy00Ny42IDEwMi03NC4xIDEzMS42LTk2LjMgMTU0LTExMy43ek0yNTYgMzIwYzIzLjIuNCA1Ni42LTI5LjIgNzMuNC00MS40IDEzMi43LTk2LjMgMTQyLjgtMTA0LjcgMTczLjQtMTI4LjcgNS44LTQuNSA5LjItMTEuNSA5LjItMTguOXYtMTljMC0yNi41LTIxLjUtNDgtNDgtNDhINDhDMjEuNSA2NCAwIDg1LjUgMCAxMTJ2MTljMCA3LjQgMy40IDE0LjMgOS4yIDE4LjkgMzAuNiAyMy45IDQwLjcgMzIuNCAxNzMuNCAxMjguNyAxNi44IDEyLjIgNTAuMiA0MS44IDczLjQgNDEuNHoiPjwvcGF0aD48L3N2Zz4=", // your email icon
    iconWidth: 10,
    iconHeight: 10,
    maxTextWidth: 120,
  },
  {
    key: "phoneNumber",
    icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiMzZTk0ZTQiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PHBhdGggZD0iTTQ5My40IDI0LjZsLTEwNC0yNGMtMTEuMy0yLjYtMjIuOSAzLjMtMjcuNSAxMy45bC00OCAxMTJjLTQuMiA5LjgtMS40IDIxLjMgNi45IDI4bDYwLjYgNDkuNmMtMzYgNzYuNy05OC45IDE0MC41LTE3Ny4yIDE3Ny4ybC00OS42LTYwLjZjLTYuOC04LjMtMTguMi0xMS4xLTI4LTYuOWwtMTEyIDQ4QzMuOSAzNjYuNS0yIDM3OC4xLjYgMzg5LjRsMjQgMTA0QzI3LjEgNTA0LjIgMzYuNyA1MTIgNDggNTEyYzI1Ni4xIDAgNDY0LTIwNy41IDQ2NC00NjQgMC0xMS4yLTcuNy0yMC45LTE4LjYtMjMuNHoiPjwvcGF0aD48L3N2Zz4=", // your phone icon
    iconWidth: 10,
    iconHeight: 10,
    maxTextWidth: 100,
  },
  {
    key: "address",
    icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiMzZTk0ZTQiIHZpZXdCb3g9IjAgMCA1NzYgNTEyIiB3aWR0aD0iNTc2IiBoZWlnaHQ9IjUxMiI+PHBhdGggZD0iTTI4MC4zNyAxNDguMjZMOTYgMzAwLjExVjQ2NGExNiAxNiAwIDAgMCAxNiAxNmwxMTIuMDYtLjI5YTE2IDE2IDAgMCAwIDE1LjkyLTE2VjM2OGExNiAxNiAwIDAgMSAxNi0xNmg2NGExNiAxNiAwIDAgMSAxNiAxNnY5NS42NGExNiAxNiAwIDAgMCAxNiAxNi4wNUw0NjQgNDgwYTE2IDE2IDAgMCAwIDE2LTE2VjMwMEwyOTUuNjcgMTQ4LjI2YTEyLjE5IDEyLjE5IDAgMCAwLTE1LjMgMHpNNTcxLjYgMjUxLjQ3TDQ4OCAxODIuNTZWNDQuMDVhMTIgMTIgMCAwIDAtMTItMTJoLTU2YTEyIDEyIDAgMCAwLTEyIDEydjcyLjYxTDMxOC40NyA0M2E0OCA0OCAwIDAgMC02MSAwTDQuMzQgMjUxLjQ3YTEyIDEyIDAgMCAwLTEuNiAxNi45bDI1LjUgMzFBMTIgMTIgMCAwIDAgNDUuMTUgMzAxbDIzNS4yMi0xOTMuNzRhMTIuMTkgMTIuMTkgMCAwIDEgMTUuMyAwTDUzMC45IDMwMWExMiAxMiAwIDAgMCAxNi45LTEuNmwyNS41LTMxYTEyIDEyIDAgMCAwLTEuNy0xNi45M3oiPjwvcGF0aD48L3N2Zz4=", // your address icon
    iconWidth: 11,
    iconHeight: 10,
    maxTextWidth: 150,
  },
  {
    key: "dob",
    icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiMzZTk0ZTQiIHZpZXdCb3g9IjAgMCA0NDggNTEyIiB3aWR0aD0iNDQ4IiBoZWlnaHQ9IjUxMiI+PHBhdGggZD0iTTAgNDY0YzAgMjYuNSAyMS41IDQ4IDQ4IDQ4aDM1MmMyNi41IDAgNDgtMjEuNSA0OC00OFYxOTJIMHYyNzJ6bTMyMC0xOTZjMC02LjYgNS40LTEyIDEyLTEyaDQwYzYuNiAwIDEyIDUuNCAxMiAxMnY0MGMwIDYuNi01LjQgMTItMTIgMTJoLTQwYy02LjYgMC0xMi01LjQtMTItMTJ2LTQwem0wIDEyOGMwLTYuNiA1LjQtMTIgMTItMTJoNDBjNi42IDAgMTIgNS40IDEyIDEydjQwYzAgNi42LTUuNCAxMi0xMiAxMmgtNDBjLTYuNiAwLTEyLTUuNC0xMi0xMnYtNDB6TTE5MiAyNjhjMC02LjYgNS40LTEyIDEyLTEyaDQwYzYuNiAwIDEyIDUuNCAxMiAxMnY0MGMwIDYuNi01LjQgMTItMTIgMTJoLTQwYy02LjYgMC0xMi01LjQtMTItMTJ2LTQwem0wIDEyOGMwLTYuNiA1LjQtMTIgMTItMTJoNDBjNi42IDAgMTIgNS40IDEyIDEydjQwYzAgNi42LTUuNCAxMi0xMiAxMmgtNDBjLTYuNiAwLTEyLTUuNC0xMi0xMnYtNDB6TTY0IDI2OGMwLTYuNiA1LjQtMTIgMTItMTJoNDBjNi42IDAgMTIgNS40IDEyIDEydjQwYzAgNi42LTUuNCAxMi0xMiAxMkg3NmMtNi42IDAtMTItNS40LTEyLTEydi00MHptMCAxMjhjMC02LjYgNS40LTEyIDEyLTEyaDQwYzYuNiAwIDEyIDUuNCAxMiAxMnY0MGMwIDYuNi01LjQgMTItMTIgMTJINzZjLTYuNiAwLTEyLTUuNC0xMi0xMnYtNDB6TTQwMCA2NGgtNDhWMTZjMC04LjgtNy4yLTE2LTE2LTE2aC0zMmMtOC44IDAtMTYgNy4yLTE2IDE2djQ4SDE2MFYxNmMwLTguOC03LjItMTYtMTYtMTZoLTMyYy04LjggMC0xNiA3LjItMTYgMTZ2NDhINDhDMjEuNSA2NCAwIDg1LjUgMCAxMTJ2NDhoNDQ4di00OGMwLTI2LjUtMjEuNS00OC00OC00OHoiPjwvcGF0aD48L3N2Zz4=", // your dob icon
    iconWidth: 9,
    iconHeight: 10,
    maxTextWidth: 80,
  },
  {
    key: "placeOfBirth",
    icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiMzZTk0ZTQiIHZpZXdCb3g9IjAgMCAzODQgNTEyIiB3aWR0aD0iMzg0IiBoZWlnaHQ9IjUxMiI+PHBhdGggZD0iTTE3Mi4yNjggNTAxLjY3QzI2Ljk3IDI5MS4wMzEgMCAyNjkuNDEzIDAgMTkyIDAgODUuOTYxIDg1Ljk2MSAwIDE5MiAwczE5MiA4NS45NjEgMTkyIDE5MmMwIDc3LjQxMy0yNi45NyA5OS4wMzEtMTcyLjI2OCAzMDkuNjctOS41MzUgMTMuNzc0LTI5LjkzIDEzLjc3My0zOS40NjQgMHpNMTkyIDI3MmM0NC4xODMgMCA4MC0zNS44MTcgODAtODBzLTM1LjgxNy04MC04MC04MC04MCAzNS44MTctODAgODAgMzUuODE3IDgwIDgwIDgweiI+PC9wYXRoPjwvc3ZnPg==", // your placeOfBirth icon
    iconWidth: 8,
    iconHeight: 10,
    maxTextWidth: 80,
  },
  {
    key: "driverLicense",
    icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiMzZTk0ZTQiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PHBhdGggZD0iTTQ5OS45OSAxNzZoLTU5Ljg3bC0xNi42NC00MS42QzQwNi4zOCA5MS42MyAzNjUuNTcgNjQgMzE5LjUgNjRoLTEyN2MtNDYuMDYgMC04Ni44OCAyNy42My0xMDMuOTkgNzAuNEw3MS44NyAxNzZIMTIuMDFDNC4yIDE3Ni0xLjUzIDE4My4zNC4zNyAxOTAuOTFsNiAyNEM3LjcgMjIwLjI1IDEyLjUgMjI0IDE4LjAxIDIyNGgyMC4wN0MyNC42NSAyMzUuNzMgMTYgMjUyLjc4IDE2IDI3MnY0OGMwIDE2LjEyIDYuMTYgMzAuNjcgMTYgNDEuOTNWNDE2YzAgMTcuNjcgMTQuMzMgMzIgMzIgMzJoMzJjMTcuNjcgMCAzMi0xNC4zMyAzMi0zMnYtMzJoMjU2djMyYzAgMTcuNjcgMTQuMzMgMzIgMzIgMzJoMzJjMTcuNjcgMCAzMi0xNC4zMyAzMi0zMnYtNTQuMDdjOS44NC0xMS4yNSAxNi0yNS44IDE2LTQxLjkzdi00OGMwLTE5LjIyLTguNjUtMzYuMjctMjIuMDctNDhINDk0YzUuNTEgMCAxMC4zMS0zLjc1IDExLjY0LTkuMDlsNi0yNGMxLjg5LTcuNTctMy44NC0xNC45MS0xMS42NS0xNC45MXptLTM1Mi4wNi0xNy44M2M3LjI5LTE4LjIyIDI0Ljk0LTMwLjE3IDQ0LjU3LTMwLjE3aDEyN2MxOS42MyAwIDM3LjI4IDExLjk1IDQ0LjU3IDMwLjE3TDM4NCAyMDhIMTI4bDE5LjkzLTQ5Ljgzek05NiAzMTkuOGMtMTkuMiAwLTMyLTEyLjc2LTMyLTMxLjlTNzYuOCAyNTYgOTYgMjU2czQ4IDI4LjcxIDQ4IDQ3Ljg1LTI4LjggMTUuOTUtNDggMTUuOTV6bTMyMCAwYy0xOS4yIDAtNDggMy4xOS00OC0xNS45NVMzOTYuOCAyNTYgNDE2IDI1NnMzMiAxMi43NiAzMiAzMS45LTEyLjggMzEuOS0zMiAzMS45eiI+PC9wYXRoPjwvc3ZnPg==", // your driverLicense icon
    iconWidth: 10,
    iconHeight: 10,
    maxTextWidth: 80,
  },
  {
    key: "gender",
    icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiMzZTk0ZTQiIHZpZXdCb3g9IjAgMCA1NzYgNTEyIiB3aWR0aD0iNTc2IiBoZWlnaHQ9IjUxMiI+PHBhdGggZD0iTTU2NCAwaC03OWMtMTAuNyAwLTE2IDEyLjktOC41IDIwLjVsMTYuOSAxNi45LTQ4LjcgNDguN0M0MjIuNSA3Mi4xIDM5Ni4yIDY0IDM2OCA2NGMtMzMuNyAwLTY0LjYgMTEuNi04OS4yIDMwLjkgMTQgMTYuNyAyNSAzNiAzMi4xIDU3LjEgMTQuNS0xNC44IDM0LjctMjQgNTcuMS0yNCA0NC4xIDAgODAgMzUuOSA4MCA4MHMtMzUuOSA4MC04MCA4MGMtMjIuMyAwLTQyLjYtOS4yLTU3LjEtMjQtNy4xIDIxLjEtMTggNDAuNC0zMi4xIDU3LjEgMjQuNSAxOS40IDU1LjUgMzAuOSA4OS4yIDMwLjkgNzkuNSAwIDE0NC02NC41IDE0NC0xNDQgMC0yOC4yLTguMS01NC41LTIyLjEtNzYuN2w0OC43LTQ4LjcgMTYuOSAxNi45YzIuNCAyLjQgNS40IDMuNSA4LjQgMy41IDYuMiAwIDEyLjEtNC44IDEyLjEtMTJWMTJjMC02LjYtNS40LTEyLTEyLTEyek0xNDQgNjRDNjQuNSA2NCAwIDEyOC41IDAgMjA4YzAgNjguNSA0Ny45IDEyNS45IDExMiAxNDAuNFY0MDBINzZjLTYuNiAwLTEyIDUuNC0xMiAxMnY0MGMwIDYuNiA1LjQgMTIgMTIgMTJoMzZ2MzZjMCA2LjYgNS40IDEyIDEyIDEyaDQwYzYuNiAwIDEyLTUuNCAxMi0xMnYtMzZoMzZjNi42IDAgMTItNS40IDEyLTEydi00MGMwLTYuNi01LjQtMTItMTItMTJoLTM2di01MS42YzY0LjEtMTQuNiAxMTItNzEuOSAxMTItMTQwLjQgMC03OS41LTY0LjUtMTQ0LTE0NC0xNDR6bTAgMjI0Yy00NC4xIDAtODAtMzUuOS04MC04MHMzNS45LTgwIDgwLTgwIDgwIDM1LjkgODAgODAtMzUuOSA4MC04MCA4MHoiPjwvcGF0aD48L3N2Zz4=", // your gender icon
    iconWidth: 11,
    iconHeight: 10,
    maxTextWidth: 60,
  },
  {
    key: "nationality",
    icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiMzZTk0ZTQiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PHBhdGggZD0iTTM0OS41NjUgOTguNzgzQzI5NS45NzggOTguNzgzIDI1MS43MjEgNjQgMTg0LjM0OCA2NGMtMjQuOTU1IDAtNDcuMzA5IDQuMzg0LTY4LjA0NSAxMi4wMTNhNTUuOTQ3IDU1Ljk0NyAwIDAgMCAzLjU4Ni0yMy41NjJDMTE4LjExNyAyNC4wMTUgOTQuODA2IDEuMjA2IDY2LjMzOC4wNDggMzQuMzQ1LTEuMjU0IDggMjQuMjk2IDggNTZjMCAxOS4wMjYgOS40OTcgMzUuODI1IDI0IDQ1Ljk0NVY0ODhjMCAxMy4yNTUgMTAuNzQ1IDI0IDI0IDI0aDE2YzEzLjI1NSAwIDI0LTEwLjc0NSAyNC0yNHYtOTQuNGMyOC4zMTEtMTIuMDY0IDYzLjU4Mi0yMi4xMjIgMTE0LjQzNS0yMi4xMjIgNTMuNTg4IDAgOTcuODQ0IDM0Ljc4MyAxNjUuMjE3IDM0Ljc4MyA0OC4xNjkgMCA4Ni42NjctMTYuMjk0IDEyMi41MDUtNDAuODU4QzUwNi44NCAzNTkuNDUyIDUxMiAzNDkuNTcxIDUxMiAzMzkuMDQ1di0yNDMuMWMwLTIzLjM5My0yNC4yNjktMzguODctNDUuNDg1LTI5LjAxNi0zNC4zMzggMTUuOTQ4LTc2LjQ1NCAzMS44NTQtMTE2Ljk1IDMxLjg1NHoiPjwvcGF0aD48L3N2Zz4=", // your nationality icon
    iconWidth: 10,
    iconHeight: 10,
    maxTextWidth: 60,
  },
  {
    key: "civilStatus",
    icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiMzZTk0ZTQiIHZpZXdCb3g9IjAgMCA2NDAgNTEyIiB3aWR0aD0iNjQwIiBoZWlnaHQ9IjUxMiI+PHBhdGggZD0iTTE5MiAyNTZjNjEuOSAwIDExMi01MC4xIDExMi0xMTJTMjUzLjkgMzIgMTkyIDMyIDgwIDgyLjEgODAgMTQ0czUwLjEgMTEyIDExMiAxMTJ6bTc2LjggMzJoLTguM2MtMjAuOCAxMC00My45IDE2LTY4LjUgMTZzLTQ3LjYtNi02OC41LTE2aC04LjNDNTEuNiAyODggMCAzMzkuNiAwIDQwMy4yVjQzMmMwIDI2LjUgMjEuNSA0OCA0OCA0OGgyODhjMjYuNSAwIDQ4LTIxLjUgNDgtNDh2LTI4LjhjMC02My42LTUxLjYtMTE1LjItMTE1LjItMTE1LjJ6TTQ4MCAyNTZjNTMgMCA5Ni00MyA5Ni05NnMtNDMtOTYtOTYtOTYtOTYgNDMtOTYgOTYgNDMgOTYgOTYgOTZ6bTQ4IDMyaC0zLjhjLTEzLjkgNC44LTI4LjYgOC00NC4yIDhzLTMwLjMtMy4yLTQ0LjItOEg0MzJjLTIwLjQgMC0zOS4yIDUuOS01NS43IDE1LjQgMjQuNCAyNi4zIDM5LjcgNjEuMiAzOS43IDk5Ljh2MzguNGMwIDIuMi0uNSA0LjMtLjYgNi40SDU5MmMyNi41IDAgNDgtMjEuNSA0OC00OCAwLTYxLjktNTAuMS0xMTItMTEyLTExMnoiPjwvcGF0aD48L3N2Zz4=", // your civilStatus icon
    iconWidth: 12,
    iconHeight: 10,
    maxTextWidth: 60,
  },
  {
    key: "website",
    icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiMzZTk0ZTQiIHZpZXdCb3g9IjAgMCA0OTYgNTEyIiB3aWR0aD0iNDk2IiBoZWlnaHQ9IjUxMiI+PHBhdGggZD0iTTMzNi41IDE2MEMzMjIgNzAuNyAyODcuOCA4IDI0OCA4cy03NCA2Mi43LTg4LjUgMTUyaDE3N3pNMTUyIDI1NmMwIDIyLjIgMS4yIDQzLjUgMy4zIDY0aDE4NS4zYzIuMS0yMC41IDMuMy00MS44IDMuMy02NHMtMS4yLTQzLjUtMy4zLTY0SDE1NS4zYy0yLjEgMjAuNS0zLjMgNDEuOC0zLjMgNjR6bTMyNC43LTk2Yy0yOC42LTY3LjktODYuNS0xMjAuNC0xNTgtMTQxLjYgMjQuNCAzMy44IDQxLjIgODQuNyA1MCAxNDEuNmgxMDh6TTE3Ny4yIDE4LjRDMTA1LjggMzkuNiA0Ny44IDkyLjEgMTkuMyAxNjBoMTA4YzguNy01Ni45IDI1LjUtMTA3LjggNDkuOS0xNDEuNnpNNDg3LjQgMTkySDM3Mi43YzIuMSAyMSAzLjMgNDIuNSAzLjMgNjRzLTEuMiA0My0zLjMgNjRoMTE0LjZjNS41LTIwLjUgOC42LTQxLjggOC42LTY0cy0zLjEtNDMuNS04LjUtNjR6TTEyMCAyNTZjMC0yMS41IDEuMi00MyAzLjMtNjRIOC42QzMuMiAyMTIuNSAwIDIzMy44IDAgMjU2czMuMiA0My41IDguNiA2NGgxMTQuNmMtMi0yMS0zLjItNDIuNS0zLjItNjR6bTM5LjUgOTZjMTQuNSA4OS4zIDQ4LjcgMTUyIDg4LjUgMTUyczc0LTYyLjcgODguNS0xNTJoLTE3N3ptMTU5LjMgMTQxLjZjNzEuNC0yMS4yIDEyOS40LTczLjcgMTU4LTE0MS42aC0xMDhjLTguOCA1Ni45LTI1LjYgMTA3LjgtNTAgMTQxLjZ6TTE5LjMgMzUyYzI4LjYgNjcuOSA4Ni41IDEyMC40IDE1OCAxNDEuNi0yNC40LTMzLjgtNDEuMi04NC43LTUwLTE0MS42aC0xMDh6Ij48L3BhdGg+PC9zdmc+", // your website icon
    iconWidth: 10,
    iconHeight: 10,
    maxTextWidth: 100,
  },
  {
    key: "linkedin",
    icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiMzZTk0ZTQiIHZpZXdCb3g9IjAgMCA0NDggNTEyIiB3aWR0aD0iNDQ4IiBoZWlnaHQ9IjUxMiI+PHBhdGggZD0iTTQxNiAzMkgzMS45QzE0LjMgMzIgMCA0Ni41IDAgNjQuM3YzODMuNEMwIDQ2NS41IDE0LjMgNDgwIDMxLjkgNDgwSDQxNmMxNy42IDAgMzItMTQuNSAzMi0zMi4zVjY0LjNjMC0xNy44LTE0LjQtMzIuMy0zMi0zMi4zek0xMzUuNCA0MTZINjlWMjAyLjJoNjYuNVY0MTZ6bS0zMy4yLTI0M2MtMjEuMyAwLTM4LjUtMTcuMy0zOC41LTM4LjVTODAuOSA5NiAxMDIuMiA5NmMyMS4yIDAgMzguNSAxNy4zIDM4LjUgMzguNSAwIDIxLjMtMTcuMiAzOC41LTM4LjUgMzguNXptMjgyLjEgMjQzaC02Ni40VjMxMmMwLTI0LjgtLjUtNTYuNy0zNC41LTU2LjctMzQuNiAwLTM5LjkgMjctMzkuOSA1NC45VjQxNmgtNjYuNFYyMDIuMmg2My43djI5LjJoLjljOC45LTE2LjggMzAuNi0zNC41IDYyLjktMzQuNSA2Ny4yIDAgNzkuNyA0NC4zIDc5LjcgMTAxLjlWNDE2eiI+PC9wYXRoPjwvc3ZnPg==", // your linkedin icon
    iconWidth: 9,
    iconHeight: 10,
    maxTextWidth: 100,
  },
];

const DynamicSVG_03 = () => {
  const { formData } = useContext(Info);

  // --- Dynamic Personal Info Rendering ---
  const personalInfoStartY = 71.375;
  const { elements: personalInfoElements, bottomY: personalInfoBottomY } =
    wrapPersonalInfoSVG(personalInfoFields, formData, 20, personalInfoStartY);

  // --- All section Y positions are now dynamic ---
  const sectionGap = 32;
  const sectionTitleFontSize = 13;
  const sectionTitleHeight = 18;

  const sectionStartY = personalInfoBottomY + 16; // gap after personal info

  // --- Education ---
  const educationStartY = sectionStartY + 36;
  const educationSectionGap = 30;
  const educationLineHeight = 32;
  const educationCount = formData.education?.length || 0;
  const educationEndY =
    educationStartY + sectionTitleHeight + educationCount * educationLineHeight;

  // --- Employment ---
  const employmentStartY = educationEndY + educationSectionGap;
  const employmentSectionGap = 30;
  const employmentLineHeight = 32;
  const employmentCount = formData.experience?.length || 0;
  const employmentEndY =
    employmentStartY +
    sectionTitleHeight +
    employmentCount * employmentLineHeight;

  // --- Skills ---
  const skillsStartY = employmentEndY + employmentSectionGap;
  const skills = formData.skills || [];
  const {
    height: skillsSectionHeight,
    render: skillsRender,
    lastY: skillsLastY,
  } = skills.length
    ? wrapInlineItems(
        skills,
        (item) => item.skill,
        skillsStartY,
        "LiberationSans",
        11,
        200,
        sectionTitleHeight
      )
    : { height: 22, render: null, lastY: skillsStartY + sectionTitleHeight };
  const skillsEndY = skillsLastY + 10;

  // --- Languages ---
  const languagesStartY = skillsEndY + 10;
  const languages = formData.languages || [];
  const {
    height: languagesSectionHeight,
    render: languagesRender,
    lastY: languagesLastY,
  } = languages.length
    ? wrapInlineItems(
        languages,
        (item) => item.language,
        languagesStartY,
        "LiberationSans",
        11,
        200,
        sectionTitleHeight
      )
    : { height: 22, render: null, lastY: languagesStartY + sectionTitleHeight };
  const languagesEndY = languagesLastY + 10;

  // --- Hobbies ---
  const hobbiesStartY = languagesEndY + 10;
  const hobbies = formData.hobbies || [];
  const {
    height: hobbiesSectionHeight,
    render: hobbiesRender,
    lastY: hobbiesLastY,
  } = hobbies.length
    ? wrapInlineItems(
        hobbies,
        (item) => item.hobby,
        hobbiesStartY,
        "LiberationSans",
        11,
        200,
        sectionTitleHeight
      )
    : { height: 22, render: null, lastY: hobbiesStartY + sectionTitleHeight };
  const hobbiesEndY = hobbiesLastY + 10;

  // --- Courses ---
  const coursesStartY = hobbiesEndY + 10;
  const coursesSectionGap = 30;
  const coursesLineHeight = 32;
  const coursesCount = formData.courses?.length || 0;
  const coursesEndY =
    coursesStartY + sectionTitleHeight + coursesCount * coursesLineHeight;

  // --- Achievements ---
  const achievementsStartY = coursesEndY + coursesSectionGap;
  const achievementFontSize = 10;
  const achievementLineHeightPx = 14;
  const achievementMaxWidth = 320;
  const achievementsSectionGap = 50;

  // --- Achievements with bullets and dynamic Y ---
  let achievementY = achievementsStartY + sectionTitleHeight;
  const boxWidth = 7;
  const boxHeight = 7;
  const boxX = 177;
  const textX = boxX + boxWidth + 8; // 8px gap after box

  const achievementElements =
    formData.achievements && formData.achievements.length > 0 ? (
      formData.achievements.map((achievement, index) => {
        const lines = wrapSvgText(
          achievement.achievement,
          achievementMaxWidth,
          `${achievementFontSize}px Poppins`
        );
        const textVerticalOffset = boxHeight / 2 + achievementFontSize / 2 - 2;
        const elements = lines.map((line, i) => {
          if (i === 0) {
            return (
              <g key={i}>
                <path
                  fill="#3e94e4"
                  d={`M ${boxX},${achievementY} L ${
                    boxX + boxWidth
                  },${achievementY} L ${boxX + boxWidth},${
                    achievementY + boxHeight
                  } L ${boxX},${achievementY + boxHeight} Z`}
                />
                <text
                  fill="black"
                  fontSize={achievementFontSize}
                  fontFamily="Poppins"
                  x={textX}
                  y={achievementY + textVerticalOffset}
                >
                  {line}
                </text>
              </g>
            );
          } else {
            return (
              <text
                key={i}
                fill="black"
                fontSize={achievementFontSize}
                fontFamily="Poppins"
                x={textX}
                y={
                  achievementY +
                  i * achievementLineHeightPx +
                  textVerticalOffset
                }
              >
                {line}
              </text>
            );
          }
        });
        achievementY += lines.length * achievementLineHeightPx;
        return <g key={achievement.id}>{elements}</g>;
      })
    ) : (
      <text
        fill="black"
        fontSize={achievementFontSize}
        fontFamily="Poppins"
        y={achievementsStartY + sectionTitleHeight}
        x={textX}
      ></text>
    );

  // --- Footer Y (after achievements) ---
  const footerY = achievementY + achievementsSectionGap;

  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    if (footerY > 841.89) {
      alert(
        "Warning: Your content is about to overflow the SVG page! Please reduce content or sections."
      );
    }
  }, [
    isOverflowing,
    personalInfoBottomY,
    educationEndY,
    employmentEndY,
    skillsEndY,
    languagesEndY,
    hobbiesEndY,
    coursesEndY,
    achievementsStartY,
    footerY,
  ]);

  // --- Dynamic background and divider lines ---
  const backgroundHeight = sectionStartY;
  const dividerY = sectionStartY;
  const verticalLineY = sectionStartY;

  // --- SVG ---
  return (
    <svg
      id="03"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 595.28 841.89"
      className="document-preview"
    >
      <rect fill="white" height="100%" width="100%" />
      {/* Dynamic background */}
      <path
        fill="#f5f5f5"
        d={`M 0,0 L 595.28,0 L 595.28,${backgroundHeight} L 0,${backgroundHeight} Z`}
      />
      {/* Name */}
      <text
        fontWeight="bold"
        fill="#3e94e4"
        fontSize="25px"
        fontFamily="Montserrat"
        y="53.3125"
        x="20"
      >
        {formData.personalInfo.givenName} {formData.personalInfo.familyName}
      </text>
      {/* Dynamic personal info */}
      {personalInfoElements}
      {/* Dynamic divider line */}
      <path
        fill="#e2e2e2"
        d={`M 0,${dividerY} L 595.28,${dividerY} L 595.28,${dividerY + 1} L 0,${
          dividerY + 1
        } Z`}
      />
      {/* Dynamic vertical line */}
      <path
        fill="#e2e2e2"
        d={`M 180,${verticalLineY} L 181,${verticalLineY} L 181,841.89 L 180,841.89 Z`}
      />

      {/* Education */}
      <text
        fontWeight="bold"
        fill="#3e94e4"
        fontSize={sectionTitleFontSize}
        fontFamily="Montserrat"
        y={educationStartY}
        x="20"
      >
        Education
      </text>
      {educationCount > 0
        ? formData.education.map((education, index) => {
            const yPosition =
              educationStartY +
              sectionTitleHeight +
              index * educationLineHeight;
            const squareSize = 7;
            const squareYPosition = yPosition - squareSize - 1;
            return (
              <React.Fragment key={education.id}>
                <path
                  fill="#3e94e4"
                  d={`M 177,${squareYPosition} L 184,${squareYPosition} L 184,${
                    squareYPosition + squareSize
                  } L 177,${squareYPosition + squareSize} Z`}
                />
                <text
                  fontWeight="bold"
                  fill="black"
                  fontSize="11px"
                  fontFamily="Montserrat"
                  y={yPosition}
                  x="200"
                >
                  {education.degree}
                </text>
                <text
                  fontWeight="bold"
                  fill="#3e94e4"
                  fontSize="11px"
                  fontFamily="Montserrat"
                  y={yPosition + 12}
                  x="200"
                >
                  {education.institution}
                </text>
                <text
                  fontWeight="bold"
                  fill="black"
                  fontSize="11px"
                  fontFamily="Montserrat"
                  y={yPosition}
                  x="20"
                >
                  {education.startDate} - {education.endDate}
                </text>
              </React.Fragment>
            );
          })
        : null}

      {/* Employment */}
      <text
        fontWeight="bold"
        fill="#3e94e4"
        fontSize={sectionTitleFontSize}
        fontFamily="Montserrat"
        y={employmentStartY}
        x="20"
      >
        Employment
      </text>
      {employmentCount > 0
        ? formData.experience.map((experience, index) => {
            const yPosition =
              employmentStartY +
              sectionTitleHeight +
              index * employmentLineHeight;
            const squareSize = 7;
            const squareYPosition = yPosition - squareSize - 1;
            return (
              <React.Fragment key={experience.id}>
                <path
                  fill="#3e94e4"
                  d={`M 177,${squareYPosition} L 184,${squareYPosition} L 184,${
                    squareYPosition + squareSize
                  } L 177,${squareYPosition + squareSize} Z`}
                />
                <text
                  fontWeight="bold"
                  fill="black"
                  fontSize="11px"
                  fontFamily="Montserrat"
                  y={yPosition}
                  x="200"
                >
                  {experience.position}
                </text>
                <text
                  fontWeight="bold"
                  fill="#3e94e4"
                  fontSize="11px"
                  fontFamily="Montserrat"
                  y={yPosition + 12}
                  x="200"
                >
                  {experience.employer}
                </text>
                <text
                  fontWeight="bold"
                  fill="black"
                  fontSize="11px"
                  fontFamily="Montserrat"
                  y={yPosition}
                  x="20"
                >
                  {experience.startDate} - {experience.endDate}
                </text>
              </React.Fragment>
            );
          })
        : null}

      {/* Skills */}
      <text
        fontWeight="bold"
        fill="#3e94e4"
        fontSize={sectionTitleFontSize}
        fontFamily="Montserrat"
        y={skillsStartY}
        x="20"
      >
        Skills
      </text>
      {skillsRender}

      {/* Languages */}
      <text
        fontWeight="bold"
        fill="#3e94e4"
        fontSize={sectionTitleFontSize}
        fontFamily="Montserrat"
        y={languagesStartY}
        x="20"
      >
        Languages
      </text>
      {languagesRender}

      {/* Hobbies */}
      <text
        fontWeight="bold"
        fill="#3e94e4"
        fontSize={sectionTitleFontSize}
        fontFamily="Montserrat"
        y={hobbiesStartY}
        x="20"
      >
        Hobbies
      </text>
      {hobbiesRender}

      {/* Courses */}
      <text
        fontWeight="bold"
        fill="#3e94e4"
        fontSize={sectionTitleFontSize}
        fontFamily="Montserrat"
        y={coursesStartY}
        x="20"
      >
        Courses
      </text>
      {coursesCount > 0
        ? formData.courses.map((course, index) => {
            const yPosition =
              coursesStartY + sectionTitleHeight + index * coursesLineHeight;
            const squareSize = 7;
            const squareYPosition = yPosition - squareSize - 1;
            return (
              <React.Fragment key={course.id}>
                <path
                  fill="#3e94e4"
                  d={`M 177,${squareYPosition} L 184,${squareYPosition} L 184,${
                    squareYPosition + squareSize
                  } L 177,${squareYPosition + squareSize} Z`}
                />
                <text
                  fontWeight="bold"
                  fill="black"
                  fontSize="11px"
                  fontFamily="Montserrat"
                  y={yPosition}
                  x="200"
                >
                  {course.courseName}
                </text>
                <text
                  fontWeight="bold"
                  fill="black"
                  fontSize="11px"
                  fontFamily="Montserrat"
                  y={yPosition}
                  x="20"
                >
                  {course.startDate} - {course.endDate}
                </text>
              </React.Fragment>
            );
          })
        : null}

      {/* Achievements (bulleted, multi-line, dynamic Y) */}
      <text
        fontWeight="bold"
        fill="#3e94e4"
        fontSize={sectionTitleFontSize}
        fontFamily="Montserrat"
        y={achievementsStartY}
        x="20"
      >
        Achievements
      </text>
      {achievementElements}

      {/* Footer */}
      <text
        fill="gray"
        fontSize="8px"
        fontFamily="Montserrat"
        y={footerY}
        x="200"
      >
        {formData.footer}
      </text>
    </svg>
  );
};

export default DynamicSVG_03;
