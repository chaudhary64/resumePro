// DynamicSVG_01.jsx
import React, { useContext, useEffect, useState } from "react";
import { Info } from "../../Context/Context";

// SVG page height and margin for overflow warning
const SVG_HEIGHT = 841.89;
const OVERFLOW_MARGIN = 20;

// Helper for SVG text wrapping
function wrapSvgText(text, maxWidth, font = "10px Poppins") {
  if (typeof window === "undefined") return [text];
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  context.font = font;
  const words = text.split(" ");
  let lines = [];
  let currentLine = "";
  for (let i = 0; i < words.length; i++) {
    const testLine = currentLine ? currentLine + " " + words[i] : words[i];
    const { width } = context.measureText(testLine);
    if (width > maxWidth && currentLine) {
      lines.push(currentLine);
      currentLine = words[i];
    } else {
      currentLine = testLine;
    }
  }
  if (currentLine) lines.push(currentLine);
  return lines;
}

const DynamicSVG_01 = () => {
  const { formData } = useContext(Info);

  // Dynamic Y calculations for left column
  const skillsStartY = 350.875;
  const skillLineHeight = 20;
  const skillsCount = formData.skills?.length || 0;

  const skillsSectionGap = 40;
  const languagesStartY =
    skillsStartY + skillsCount * skillLineHeight + skillsSectionGap;
  const languageLineHeight = 20;
  const languagesCount = formData.languages?.length || 0;

  const languagesSectionGap = 40;
  const hobbiesStartY =
    languagesStartY + languagesCount * languageLineHeight + languagesSectionGap;
  const hobbyLineHeight = 20;
  const hobbiesCount = formData.hobbies?.length || 0;

  // Dynamic Y calculations for right column
  const educationStartY = 350.875;
  const educationLineHeight = 20;
  const educationCount = formData.education?.length || 0;

  const educationSectionGap = 40;
  const employmentStartY =
    educationStartY +
    educationCount * educationLineHeight +
    educationSectionGap;
  const employmentLineHeight = 20;
  const employmentCount = formData.experience?.length || 0;

  const employmentSectionGap = 40;
  const coursesStartY =
    employmentStartY +
    employmentCount * employmentLineHeight +
    employmentSectionGap;
  const coursesLineHeight = 20;
  const coursesCount = formData.courses?.length || 0;

  const coursesSectionGap = 40;
  const achievementsStartY =
    coursesStartY + coursesCount * coursesLineHeight + coursesSectionGap;
  const achievementsLineHeight = 20;
  const achievementsCount = formData.achievements?.length || 0;

  const achievementsSectionGap = 50;
  // We'll calculate the footerStartY after achievements

  // --- Overflow logic ---
  const [isOverflowing, setIsOverflowing] = useState(false);

  // --- Achievements with bullets and dynamic Y ---
  const achievementFontSize = 10;
  const achievementLineHeightPx = 14;
  const achievementMaxWidth = 320;
  let achievementY = achievementsStartY;
  let lastAchievementY = achievementsStartY;
  let lastAchievementLines = 0;
  const achievementElements =
    formData.achievements && formData.achievements.length > 0 ? (
      formData.achievements.map((achievement, index) => {
        const lines = wrapSvgText(
          achievement.achievement,
          achievementMaxWidth,
          `${achievementFontSize}px Poppins`
        );
        const element = (
          <text
            key={achievement.id}
            fill="black"
            fontSize={`${achievementFontSize}px`}
            fontFamily="Poppins"
            x="220"
            y={achievementY}
          >
            {lines.map((line, i) => (
              <tspan key={i} x="220" dy={i === 0 ? 0 : achievementLineHeightPx}>
                {i === 0 ? "\u2022 " + line : line}
              </tspan>
            ))}
          </text>
        );
        lastAchievementY = achievementY;
        lastAchievementLines = lines.length;
        achievementY += lines.length * achievementLineHeightPx;
        return element;
      })
    ) : (
      <text
        fill="black"
        fontSize="10px"
        fontFamily="Poppins"
        y={achievementsStartY}
        x="220"
      ></text>
    );

  // Calculate footer Y based on last achievement
  const footerStartY =
    lastAchievementY +
    lastAchievementLines * achievementLineHeightPx +
    achievementsSectionGap;

  useEffect(() => {
    // Find the maximum Y position (footer or last section)
    const maxY = Math.max(
      hobbiesStartY + hobbiesCount * hobbyLineHeight,
      achievementY,
      footerStartY
    );
    if (maxY > SVG_HEIGHT - OVERFLOW_MARGIN) {
      setIsOverflowing(true);
    } else {
      setIsOverflowing(false);
    }
  }, [
    skillsCount,
    languagesCount,
    hobbiesCount,
    educationCount,
    employmentCount,
    coursesCount,
    achievementsCount,
    footerStartY,
    hobbiesStartY,
    achievementsStartY,
    achievementY,
  ]);

  useEffect(() => {
    if (isOverflowing) {
      alert(
        "Warning: Your content is about to overflow the SVG page! Please reduce content or sections."
      );
    }
  }, [isOverflowing]);

  return (
    <svg
      id="01"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 595.28 841.89"
      className="document-preview"
    >
      <rect fill="white" height="100%" width="100%" />
      <path
        fill="#282831"
        d="M 0,0 L 200,0 C 200,0,200,0,200,0 L 200,841.89 C 200,841.89,200,841.89,200,841.89 L 0,841.89 C 0,841.89,0,841.89,0,841.89 L 0,0 C 0,0,0,0,0,0 Z"
      />
      <path
        fill="white"
        d="M 30,30 L 565.28,30 C 565.28,30,565.28,30,565.28,30 L 565.28,294.375 C 565.28,294.375,565.28,294.375,565.28,294.375 L 30,294.375 C 30,294.375,30,294.375,30,294.375 L 30,30 C 30,30,30,30,30,30 Z"
      />
      <path
        fill="#99c7c7"
        d="M 40,40 L 555.28,40 C 555.28,40,555.28,40,555.28,40 L 555.28,284.375 C 555.28,284.375,555.28,284.375,555.28,284.375 L 40,284.375 C 40,284.375,40,284.375,40,284.375 L 40,40 C 40,40,40,40,40,40 Z"
      />
      {/* First Name and Last Name */}
      <text
        letter-spacing="1"
        fontWeight="bold"
        fill="white"
        font-size="35px"
        font-family="Poppins"
        y="95.4375"
        x="60"
      >
        {formData.personalInfo.givenName} {formData.personalInfo.familyName}
      </text>
      <image
        image-rendering="optimizeSpeed"
        href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IndoaXRlIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiPjxwYXRoIGQ9Ik01MDIuMyAxOTAuOGMzLjktMy4xIDkuNy0uMiA5LjcgNC43VjQwMGMwIDI2LjUtMjEuNSA0OC00OCA0OEg0OGMtMjYuNSAwLTQ4LTIxLjUtNDgtNDhWMTk1LjZjMC01IDUuNy03LjggOS43LTQuNyAyMi40IDE3LjQgNTIuMSAzOS41IDE1NC4xIDExMy42IDIxLjEgMTUuNCA1Ni43IDQ3LjggOTIuMiA0Ny42IDM1LjcuMyA3Mi0zMi44IDkyLjMtNDcuNiAxMDItNzQuMSAxMzEuNi05Ni4zIDE1NC0xMTMuN3pNMjU2IDMyMGMyMy4yLjQgNTYuNi0yOS4yIDczLjQtNDEuNCAxMzIuNy05Ni4zIDE0Mi44LTEwNC43IDE3My40LTEyOC43IDUuOC00LjUgOS4yLTExLjUgOS4yLTE4Ljl2LTE5YzAtMjYuNS0yMS41LTQ4LTQ4LTQ4SDQ4QzIxLjUgNjQgMCA4NS41IDAgMTEydjE5YzAgNy40IDMuNCAxNC4zIDkuMiAxOC45IDMwLjYgMjMuOSA0MC43IDMyLjQgMTczLjQgMTI4LjcgMTYuOCAxMi4yIDUwLjIgNDEuOCA3My40IDQxLjR6Ij48L3BhdGg+PC9zdmc+"
        height="9"
        width="9"
        y="115.5"
        x="60"
      />
      {/* Email */}
      <text
        fill="white"
        font-size="9px"
        font-family="Poppins"
        y="122.925"
        x="75"
      >
        {formData.personalInfo.email}
      </text>
      {/* Phone number */}
      <image
        image-rendering="optimizeSpeed"
        href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IndoaXRlIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiPjxwYXRoIGQ9Ik00OTMuNCAyNC42bC0xMDQtMjRjLTExLjMtMi42LTIyLjkgMy4zLTI3LjUgMTMuOWwtNDggMTEyYy00LjIgOS44LTEuNCAyMS4zIDYuOSAyOGw2MC42IDQ5LjZjLTM2IDc2LjctOTguOSAxNDAuNS0xNzcuMiAxNzcuMmwtNDkuNi02MC42Yy02LjgtOC4zLTE4LjItMTEuMS0yOC02LjlsLTExMiA0OEMzLjkgMzY2LjUtMiAzNzguMS42IDM4OS40bDI0IDEwNEMyNy4xIDUwNC4yIDM2LjcgNTEyIDQ4IDUxMmMyNTYuMSAwIDQ2NC0yMDcuNSA0NjQtNDY0IDAtMTEuMi03LjctMjAuOS0xOC42LTIzLjR6Ij48L3BhdGg+PC9zdmc+"
        height="9"
        width="9"
        y="129.25"
        x="60"
      />
      <text
        fill="white"
        font-size="9px"
        font-family="Poppins"
        y="136.675"
        x="75"
      >
        {formData.personalInfo.phoneNumber}
      </text>
      {/* Address */}
      <image
        image-rendering="optimizeSpeed"
        href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IndoaXRlIiB2aWV3Qm94PSIwIDAgNTc2IDUxMiIgd2lkdGg9IjU3NiIgaGVpZ2h0PSI1MTIiPjxwYXRoIGQ9Ik0yODAuMzcgMTQ4LjI2TDk2IDMwMC4xMVY0NjRhMTYgMTYgMCAwIDAgMTYgMTZsMTEyLjA2LS4yOWExNiAxNiAwIDAgMCAxNS45Mi0xNlYzNjhhMTYgMTYgMCAwIDEgMTYtMTZoNjRhMTYgMTYgMCAwIDEgMTYgMTZ2OTUuNjRhMTYgMTYgMCAwIDAgMTYgMTYuMDVMNDY0IDQ4MGExNiAxNiAwIDAgMCAxNi0xNlYzMDBMMjk1LjY3IDE0OC4yNmExMi4xOSAxMi4xOSAwIDAgMC0xNS4zIDB6TTU3MS42IDI1MS40N0w0ODggMTgyLjU2VjQ0LjA1YTEyIDEyIDAgMCAwLTEyLTEyaC01NmExMiAxMiAwIDAgMC0xMiAxMnY3Mi42MUwzMTguNDcgNDNhNDggNDggMCAwIDAtNjEgMEw0LjM0IDI1MS40N2ExMiAxMiAwIDAgMC0xLjYgMTYuOWwyNS41IDMxQTEyIDEyIDAgMCAwIDQ1LjE1IDMwMWwyMzUuMjItMTkzLjc0YTEyLjE5IDEyLjE5IDAgMCAxIDE1LjMgMEw1MzAuOSAzMDFhMTIgMTIgMCAwIDAgMTYuOS0xLjZsMjUuNS0zMWExMiAxMiAwIDAgMC0xLjctMTYuOTN6Ij48L3BhdGg+PC9zdmc+"
        height="9"
        width="10.125"
        y="143"
        x="59.4375"
      />
      <text
        fill="white"
        font-size="9px"
        font-family="Poppins"
        y="150.425"
        x="75"
      >
        {formData.personalInfo.address}
      </text>
      {/* Date of Birth */}
      <image
        image-rendering="optimizeSpeed"
        href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IndoaXRlIiB2aWV3Qm94PSIwIDAgNDQ4IDUxMiIgd2lkdGg9IjQ0OCIgaGVpZ2h0PSI1MTIiPjxwYXRoIGQ9Ik0wIDQ2NGMwIDI2LjUgMjEuNSA0OCA0OCA0OGgzNTJjMjYuNSAwIDQ4LTIxLjUgNDgtNDhWMTkySDB2Mjcyem0zMjAtMTk2YzAtNi42IDUuNC0xMiAxMi0xMmg0MGM2LjYgMCAxMiA1LjQgMTIgMTJ2NDBjMCA2LjYtNS40IDEyLTEyIDEyaC00MGMtNi42IDAtMTItNS40LTEyLTEydi00MHptMCAxMjhjMC02LjYgNS40LTEyIDEyLTEyaDQwYzYuNiAwIDEyIDUuNCAxMiAxMnY0MGMwIDYuNi01LjQgMTItMTIgMTJoLTQwYy02LjYgMC0xMi01LjQtMTItMTJ2LTQwek0xOTIgMjY4YzAtNi42IDUuNC0xMiAxMi0xMmg0MGM2LjYgMCAxMiA1LjQgMTIgMTJ2NDBjMCA2LjYtNS40IDEyLTEyIDEyaC00MGMtNi42IDAtMTItNS40LTEyLTEydi00MHptMCAxMjhjMC02LjYgNS40LTEyIDEyLTEyaDQwYzYuNiAwIDEyIDUuNCAxMiAxMnY0MGMwIDYuNi01LjQgMTItMTIgMTJoLTQwYy02LjYgMC0xMi01LjQtMTItMTJ2LTQwek02NCAyNjhjMC02LjYgNS40LTEyIDEyLTEyaDQwYzYuNiAwIDEyIDUuNCAxMiAxMnY0MGMwIDYuNi01LjQgMTItMTIgMTJINzZjLTYuNiAwLTEyLTUuNC0xMi0xMnYtNDB6bTAgMTI4YzAtNi42IDUuNC0xMiAxMi0xMmg0MGM2LjYgMCAxMiA1LjQgMTIgMTJ2NDBjMCA2LjYtNS40IDEyLTEyIDEySDc2Yy02LjYgMC0xMi01LjQtMTItMTJ2LTQwek00MDAgNjRoLTQ4VjE2YzAtOC44LTcuMi0xNi0xNi0xNmgtMzJjLTguOCAwLTE2IDcuMi0xNiAxNnY0OEgxNjBWMTZjMC04LjgtNy4yLTE2LTE2LTE2aC0zMmMtOC44IDAtMTYgNy4yLTE2IDE2djQ4SDQ4QzIxLjUgNjQgMCA4NS41IDAgMTEydjQ4aDQ0OHYtNDhjMC0yNi41LTIxLjUtNDgtNDgtNDh6Ij48L3BhdGg+PC9zdmc+"
        height="9"
        width="7.875"
        y="156.75"
        x="60.5625"
      />
      <text
        fill="white"
        font-size="9px"
        font-family="Poppins"
        y="164.175"
        x="75"
      >
        {formData.personalInfo.dob}
      </text>
      {/* Place of birth */}
      <image
        image-rendering="optimizeSpeed"
        href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IndoaXRlIiB2aWV3Qm94PSIwIDAgMzg0IDUxMiIgd2lkdGg9IjM4NCIgaGVpZ2h0PSI1MTIiPjxwYXRoIGQ9Ik0xNzIuMjY4IDUwMS42N0MyNi45NyAyOTEuMDMxIDAgMjY5LjQxMyAwIDE5MiAwIDg1Ljk2MSA4NS45NjEgMCAxOTIgMHMxOTIgODUuOTYxIDE5MiAxOTJjMCA3Ny40MTMtMjYuOTcgOTkuMDMxLTE3Mi4yNjggMzA5LjY3LTkuNTM1IDEzLjc3NC0yOS45MyAxMy43NzMtMzkuNDY0IDB6TTE5MiAyNzJjNDQuMTgzIDAgODAtMzUuODE3IDgwLTgwcy0zNS44MTctODAtODAtODAtODAgMzUuODE3LTgwIDgwIDM1LjgxNyA4MCA4MCA4MHoiPjwvcGF0aD48L3N2Zz4="
        height="9"
        width="6.75"
        y="170.5"
        x="61.125"
      />
      <text
        fill="white"
        font-size="9px"
        font-family="Poppins"
        y="177.925"
        x="75"
      >
        {formData.personalInfo.placeOfBirth}
      </text>
      {/* Driving Licence */}
      <image
        image-rendering="optimizeSpeed"
        href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IndoaXRlIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiPjxwYXRoIGQ9Ik00OTkuOTkgMTc2aC01OS44N2wtMTYuNjQtNDEuNkM0MDYuMzggOTEuNjMgMzY1LjU3IDY0IDMxOS41IDY0aC0xMjdjLTQ2LjA2IDAtODYuODggMjcuNjMtMTAzLjk5IDcwLjRMNzEuODcgMTc2SDEyLjAxQzQuMiAxNzYtMS41MyAxODMuMzQuMzcgMTkwLjkxbDYgMjRDNy43IDIyMC4yNSAxMi41IDIyNCAxOC4wMSAyMjRoMjAuMDdDMjQuNjUgMjM1LjczIDE2IDI1Mi43OCAxNiAyNzJ2NDhjMCAxNi4xMiA2LjE2IDMwLjY3IDE2IDQxLjkzVjQxNmMwIDE3LjY3IDE0LjMzIDMyIDMyIDMyaDMyYzE3LjY3IDAgMzItMTQuMzMgMzItMzJ2LTMyaDI1NnYzMmMwIDE3LjY3IDE0LjMzIDMyIDMyIDMyaDMyYzE3LjY3IDAgMzItMTQuMzMgMzItMzJ2LTU0LjA3YzkuODQtMTEuMjUgMTYtMjUuOCAxNi00MS45M3YtNDhjMC0xOS4yMi04LjY1LTM2LjI3LTIyLjA3LTQ4SDQ5NGM1LjUxIDAgMTAuMzEtMy43NSAxMS42NC05LjA5bDYtMjRjMS44OS03LjU3LTMuODQtMTQuOTEtMTEuNjUtMTQuOTF6bS0zNTIuMDYtMTcuODNjNy4yOS0xOC4yMiAyNC45NC0zMC4xNyA0NC41Ny0zMC4xN2gxMjdjMTkuNjMgMCAzNy4yOCAxMS45NSA0NC41NyAzMC4xN0wzODQgMjA4SDEyOGwxOS45My00OS44M3pNOTYgMzE5LjhjLTE5LjIgMC0zMi0xMi43Ni0zMi0zMS45Uzc2LjggMjU2IDk2IDI1NnM0OCAyOC43MSA0OCA0Ny44NS0yOC44IDE1Ljk1LTQ4IDE1Ljk1em0zMjAgMGMtMTkuMiAwLTQ4IDMuMTktNDgtMTUuOTVTMzk2LjggMjU2IDQxNiAyNTZzMzIgMTIuNzYgMzIgMzEuOS0xMi44IDMxLjktMzIgMzEuOXoiPjwvcGF0aD48L3N2Zz4="
        height="9"
        width="9"
        y="184.25"
        x="60"
      />
      <text
        fill="white"
        font-size="9px"
        font-family="Poppins"
        y="191.675"
        x="75"
      >
        {formData.personalInfo.driverLicense}
      </text>
      {/* Gender */}
      <image
        image-rendering="optimizeSpeed"
        href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IndoaXRlIiB2aWV3Qm94PSIwIDAgNTc2IDUxMiIgd2lkdGg9IjU3NiIgaGVpZ2h0PSI1MTIiPjxwYXRoIGQ9Ik01NjQgMGgtNzljLTEwLjcgMC0xNiAxMi45LTguNSAyMC41bDE2LjkgMTYuOS00OC43IDQ4LjdDNDIyLjUgNzIuMSAzOTYuMiA2NCAzNjggNjRjLTMzLjcgMC02NC42IDExLjYtODkuMiAzMC45IDE0IDE2LjcgMjUgMzYgMzIuMSA1Ny4xIDE0LjUtMTQuOCAzNC43LTI0IDU3LjEtMjQgNDQuMSAwIDgwIDM1LjkgODAgODBzLTM1LjkgODAtODAgODBjLTIyLjMgMC00Mi42LTkuMi01Ny4xLTI0LTcuMSAyMS4xLTE4IDQwLjQtMzIuMSA1Ny4xIDI0LjUgMTkuNCA1NS41IDMwLjkgODkuMiAzMC45IDc5LjUgMCAxNDQtNjQuNSAxNDQtMTQ0IDAtMjguMi04LjEtNTQuNS0yMi4xLTc2LjdsNDguNy00OC43IDE2LjkgMTYuOWMyLjQgMi40IDUuNCAzLjUgOC40IDMuNSA2LjIgMCAxMi4xLTQuOCAxMi4xLTEyVjEyYzAtNi42LTUuNC0xMi0xMi0xMnpNMTQ0IDY0QzY0LjUgNjQgMCAxMjguNSAwIDIwOGMwIDY4LjUgNDcuOSAxMjUuOSAxMTIgMTQwLjRWNDAwSDc2Yy02LjYgMC0xMiA1LjQtMTIgMTJ2NDBjMCA2LjYgNS40IDEyIDEyIDEyaDM2djM2YzAgNi42IDUuNCAxMiAxMiAxMmg0MGM2LjYgMCAxMi01LjQgMTItMTJ2LTM2aDM2YzYuNiAwIDEyLTUuNCAxMi0xMnYtNDBjMC02LjYtNS40LTEyLTEyLTEyaC0zNnYtNTEuNmM2NC4xLTE0LjYgMTEyLTcxLjkgMTEyLTE0MC40IDAtNzkuNS02NC41LTE0NC0xNDQtMTQ0em0wIDIyNGMtNDQuMSAwLTgwLTM1LjktODAtODBzMzUuOS04MCA4MC04MCA4MCAzNS45IDgwIDgwLTM1LjkgODAtODAgODB6Ij48L3BhdGg+PC9zdmc+"
        height="9"
        width="10.125"
        y="198"
        x="59.4375"
      />
      <text
        fill="white"
        font-size="9px"
        font-family="Poppins"
        y="205.425"
        x="75"
      >
        {formData.personalInfo.gender.charAt(0).toUpperCase() +
          formData.personalInfo.gender.slice(1)}
      </text>
      {/* Nationality */}
      <image
        image-rendering="optimizeSpeed"
        href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IndoaXRlIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiPjxwYXRoIGQ9Ik0zNDkuNTY1IDk4Ljc4M0MyOTUuOTc4IDk4Ljc4MyAyNTEuNzIxIDY0IDE4NC4zNDggNjRjLTI0Ljk1NSAwLTQ3LjMwOSA0LjM4NC02OC4wNDUgMTIuMDEzYTU1Ljk0NyA1NS45NDcgMCAwIDAgMy41ODYtMjMuNTYyQzExOC4xMTcgMjQuMDE1IDk0LjgwNiAxLjIwNiA2Ni4zMzguMDQ4IDM0LjM0NS0xLjI1NCA4IDI0LjI5NiA4IDU2YzAgMTkuMDI2IDkuNDk3IDM1LjgyNSAyNCA0NS45NDVWNDg4YzAgMTMuMjU1IDEwLjc0NSAyNCAyNCAyNGgxNmMxMy4yNTUgMCAyNC0xMC43NDUgMjQtMjR2LTk0LjRjMjguMzExLTEyLjA2NCA2My41ODItMjIuMTIyIDExNC40MzUtMjIuMTIyIDUzLjU4OCAwIDk3Ljg0NCAzNC43ODMgMTY1LjIxNyAzNC43ODMgNDguMTY5IDAgODYuNjY3LTE2LjI5NCAxMjIuNTA1LTQwLjg1OEM1MDYuODQgMzU5LjQ1MiA1MTIgMzQ5LjU3MSA1MTIgMzM5LjA0NXYtMjQzLjFjMC0yMy4zOTMtMjQuMjY5LTM4Ljg3LTQ1LjQ4NS0yOS4wMTYtMzQuMzM4IDE1Ljk0OC03Ni40NTQgMzEuODU0LTExNi45NSAzMS44NTR6Ij48L3BhdGg+PC9zdmc+"
        height="9"
        width="9"
        y="211.75"
        x="60"
      />
      <text
        fill="white"
        font-size="9px"
        font-family="Poppins"
        y="219.175"
        x="75"
      >
        {formData.personalInfo.nationality}
      </text>
      {/* Martial Status */}
      <image
        image-rendering="optimizeSpeed"
        href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IndoaXRlIiB2aWV3Qm94PSIwIDAgNjQwIDUxMiIgd2lkdGg9IjY0MCIgaGVpZ2h0PSI1MTIiPjxwYXRoIGQ9Ik0xOTIgMjU2YzYxLjkgMCAxMTItNTAuMSAxMTItMTEyUzI1My45IDMyIDE5MiAzMiA4MCA4Mi4xIDgwIDE0NHM1MC4xIDExMiAxMTIgMTEyem03Ni44IDMyaC04LjNjLTIwLjggMTAtNDMuOSAxNi02OC41IDE2cy00Ny42LTYtNjguNS0xNmgtOC4zQzUxLjYgMjg4IDAgMzM5LjYgMCA0MDMuMlY0MzJjMCAyNi41IDIxLjUgNDggNDggNDhoMjg4YzI2LjUgMCA0OC0yMS41IDQ4LTQ4di0yOC44YzAtNjMuNi01MS42LTExNS4yLTExNS4yLTExNS4yek00ODAgMjU2YzUzIDAgOTYtNDMgOTYtOTZzLTQzLTk2LTk2LTk2LTk2IDQzLTk2IDk2IDQzIDk2IDk2IDk2em00OCAzMmgtMy44Yy0xMy45IDQuOC0yOC42IDgtNDQuMiA4cy0zMC4zLTMuMi00NC4yLThINDMyYy0yMC40IDAtMzkuMiA1LjktNTUuNyAxNS40IDI0LjQgMjYuMyAzOS43IDYxLjIgMzkuNyA5OS44djM4LjRjMCAyLjItLjUgNC4zLS42IDYuNEg1OTJjMjYuNSAwIDQ4LTIxLjUgNDgtNDggMC02MS45LTUwLjEtMTEyLTExMi0xMTJ6Ij48L3BhdGg+PC9zdmc+"
        height="9"
        width="11.25"
        y="225.5"
        x="58.875"
      />
      <text
        fill="white"
        font-size="9px"
        font-family="Poppins"
        y="232.925"
        x="75"
      >
        {formData.personalInfo.civilStatus.charAt(0).toUpperCase() +
          formData.personalInfo.civilStatus.slice(1)}
      </text>
      {/* Website */}
      <image
        image-rendering="optimizeSpeed"
        href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IndoaXRlIiB2aWV3Qm94PSIwIDAgNDk2IDUxMiIgd2lkdGg9IjQ5NiIgaGVpZ2h0PSI1MTIiPjxwYXRoIGQ9Ik0zMzYuNSAxNjBDMzIyIDcwLjcgMjg3LjggOCAyNDggOHMtNzQgNjIuNy04OC41IDE1MmgxNzd6TTE1MiAyNTZjMCAyMi4yIDEuMiA0My41IDMuMyA2NGgxODUuM2MyLjEtMjAuNSAzLjMtNDEuOCAzLjMtNjRzLTEuMi00My41LTMuMy02NEgxNTUuM2MtMi4xIDIwLjUtMy4zIDQxLjgtMy4zIDY0em0zMjQuNy05NmMtMjguNi02Ny45LTg2LjUtMTIwLjQtMTU4LTE0MS42IDI0LjQgMzMuOCA0MS4yIDg0LjcgNTAgMTQxLjZoMTA4ek0xNzcuMiAxOC40QzEwNS44IDM5LjYgNDcuOCA5Mi4xIDE5LjMgMTYwaDEwOGM4LjctNTYuOSAyNS41LTEwNy44IDQ5LjktMTQxLjZ6TTQ4Ny40IDE5MkgzNzIuN2MyLjEgMjEgMy4zIDQyLjUgMy4zIDY0cy0xLjIgNDMtMy4zIDY0aDExNC42YzUuNS0yMC41IDguNi00MS44IDguNi02NHMtMy4xLTQzLjUtOC41LTY0ek0xMjAgMjU2YzAtMjEuNSAxLjItNDMgMy4zLTY0SDguNkMzLjIgMjEyLjUgMCAyMzMuOCAwIDI1NnMzLjIgNDMuNSA4LjYgNjRoMTE0LjZjLTItMjEtMy4yLTQyLjUtMy4yLTY0em0zOS41IDk2YzE0LjUgODkuMyA0OC43IDE1MiA4OC41IDE1MnM3NC02Mi43IDg4LjUtMTUyaC0xNzd6bTE1OS4zIDE0MS42YzcxLjQtMjEuMiAxMjkuNC03My43IDE1OC0xNDEuNmgtMTA4Yy04LjggNTYuOS0yNS42IDEwNy44LTUwIDE0MS42ek0xOS4zIDM1MmMyOC42IDY3LjkgODYuNSAxMjAuNCAxNTggMTQxLjYtMjQuNC0zMy44LTQxLjItODQuNy01MC0xNDEuNmgtMTA4eiI+PC9wYXRoPjwvc3ZnPg=="
        height="9"
        width="8.71875"
        y="239.25"
        x="60.140625"
      />
      <text
        fill="white"
        font-size="9px"
        font-family="Poppins"
        y="246.675"
        x="75"
      >
        {formData.personalInfo.website}
      </text>
      {/* Linkedin */}
      <image
        image-rendering="optimizeSpeed"
        href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IndoaXRlIiB2aWV3Qm94PSIwIDAgNDQ4IDUxMiIgd2lkdGg9IjQ0OCIgaGVpZ2h0PSI1MTIiPjxwYXRoIGQ9Ik00MTYgMzJIMzEuOUMxNC4zIDMyIDAgNDYuNSAwIDY0LjN2MzgzLjRDMCA0NjUuNSAxNC4zIDQ4MCAzMS45IDQ4MEg0MTZjMTcuNiAwIDMyLTE0LjUgMzItMzIuM1Y2NC4zYzAtMTcuOC0xNC40LTMyLjMtMzItMzIuM3pNMTM1LjQgNDE2SDY5VjIwMi4yaDY2LjVWNDE2em0tMzMuMi0yNDNjLTIxLjMgMC0zOC41LTE3LjMtMzguNS0zOC41UzgwLjkgOTYgMTAyLjIgOTZjMjEuMiAwIDM4LjUgMTcuMyAzOC41IDM4LjUgMCAyMS4zLTE3LjIgMzguNS0zOC41IDM4LjV6bTI4Mi4xIDI0M2gtNjYuNFYzMTJjMC0yNC44LS41LTU2LjctMzQuNS01Ni43LTM0LjYgMC0zOS45IDI3LTM5LjkgNTQuOVY0MTZoLTY2LjRWMjAyLjJoNjMuN3YyOS4yaC45YzguOS0xNi44IDMwLjYtMzQuNSA2Mi45LTM0LjUgNjcuMiAwIDc5LjcgNDQuMyA3OS43IDEwMS45VjQxNnoiPjwvcGF0aD48L3N2Zz4="
        height="9"
        width="7.875"
        y="253"
        x="60.5625"
      />
      <text
        fill="white"
        font-size="9px"
        font-family="Poppins"
        y="260.425"
        x="75"
      >
        {formData.personalInfo.linkedin}
      </text>
      {/* SKILLS SECTION */}
      <text
        letterSpacing="1"
        fill="#999999"
        fontSize="12px"
        fontFamily="Poppins"
        y={skillsStartY - 24.35}
        x="40"
      >
        SKILLS
      </text>
      {formData.skills?.map((skill, index) => (
        <text
          key={skill.id}
          fill="white"
          fontSize="12px"
          fontFamily="Poppins"
          y={skillsStartY + index * skillLineHeight}
          x="40"
        >
          {skill.skill}
        </text>
      ))}

      {/* LANGUAGES SECTION */}
      <text
        letterSpacing="1"
        fill="#999999"
        fontSize="12px"
        fontFamily="Poppins"
        y={languagesStartY - 14.35}
        x="40"
      >
        LANGUAGES
      </text>
      {formData.languages?.map((language, index) => (
        <text
          key={language.id}
          fill="white"
          fontSize="12px"
          fontFamily="Poppins"
          y={languagesStartY + (index + 0.5) * languageLineHeight}
          x="40"
        >
          {language.language}
        </text>
      ))}

      {/* HOBBIES SECTION */}
      <text
        letterSpacing="1"
        fill="#999999"
        fontSize="12px"
        fontFamily="Poppins"
        y={hobbiesStartY - 14.35}
        x="40"
      >
        HOBBIES
      </text>
      {formData.hobbies?.map((hobby, index) => (
        <text
          key={hobby.id}
          fill="white"
          fontSize="12px"
          fontFamily="Poppins"
          y={hobbiesStartY + (index + 0.5) * hobbyLineHeight}
          x="40"
        >
          {hobby.hobby}
        </text>
      ))}

      {/* EDUCATION SECTION */}
      <rect
        fill="#99c7c7"
        height="16.5"
        width="84.192"
        y={educationStartY - 36.5}
        x="220"
      />
      <text
        letterSpacing="1"
        fill="white"
        fontSize="12px"
        fontFamily="Poppins"
        y={educationStartY - 24.35}
        x="224"
      >
        EDUCATION
      </text>
      {formData.education && formData.education.length > 0 ? (
        formData.education.map((education, index) => {
          const yPosition = educationStartY + index * educationLineHeight;
          return (
            <React.Fragment key={education.id}>
              <text
                fontWeight="bold"
                fill="black"
                fontSize="10px"
                fontFamily="Poppins"
                y={yPosition}
                x="220"
              >
                {education.institution}
              </text>
              <text
                fill="black"
                fontSize="10px"
                fontFamily="Poppins"
                y={yPosition}
                x="300"
              >
                {education.degree}
              </text>
              <text
                fill="black"
                fontSize="10px"
                fontFamily="Poppins"
                y={yPosition}
                x="450"
              >
                {education.startDate} - {education.endDate}
              </text>
            </React.Fragment>
          );
        })
      ) : (
        <text
          fill="black"
          fontSize="10px"
          fontFamily="Poppins"
          y={educationStartY}
          x="220"
        ></text>
      )}

      {/* EMPLOYMENT SECTION */}
      <rect
        fill="#99c7c7"
        height="16.5"
        width="98"
        y={employmentStartY - 36.5}
        x="221"
      />
      <text
        letterSpacing="1"
        fill="white"
        fontSize="12px"
        fontFamily="Poppins"
        y={employmentStartY - 24.35}
        x="224"
      >
        EMPLOYMENT
      </text>
      {formData.experience && formData.experience.length > 0 ? (
        formData.experience.map((experience, index) => {
          const yPosition = employmentStartY + index * employmentLineHeight;
          return (
            <React.Fragment key={experience.id}>
              <text
                fontWeight="bold"
                fill="black"
                fontSize="10px"
                fontFamily="Poppins"
                y={yPosition}
                x="220"
              >
                {experience.position} at {experience.employer}
              </text>
              <text
                fill="black"
                fontSize="10px"
                fontFamily="Poppins"
                y={yPosition}
                x="450"
              >
                {experience.startDate} - {experience.endDate}
              </text>
              <text
                fill="black"
                fontSize="10px"
                fontFamily="Poppins"
                y={yPosition + 15}
                x="220"
              >
                {experience.description}
              </text>
            </React.Fragment>
          );
        })
      ) : (
        <text
          fill="black"
          fontSize="10px"
          fontFamily="Poppins"
          y={employmentStartY}
          x="220"
        ></text>
      )}

      {/* COURSES SECTION */}
      <rect
        fill="#99c7c7"
        height="16.5"
        width="69.448"
        y={coursesStartY - 36.5}
        x="220"
      />
      <text
        letterSpacing="1"
        fill="white"
        fontSize="12px"
        fontFamily="Poppins"
        y={coursesStartY - 24.35}
        x="224"
      >
        COURSES
      </text>
      {formData.courses && formData.courses.length > 0 ? (
        formData.courses.map((course, index) => {
          const yPosition = coursesStartY + index * coursesLineHeight;
          return (
            <React.Fragment key={course.id}>
              <text
                fontWeight="bold"
                fill="black"
                fontSize="10px"
                fontFamily="Poppins"
                y={yPosition}
                x="220"
              >
                {course.courseName}
              </text>
              <text
                fill="black"
                fontSize="10px"
                fontFamily="Poppins"
                y={yPosition}
                x="450"
              >
                {course.startDate} - {course.endDate}
              </text>
            </React.Fragment>
          );
        })
      ) : (
        <text
          fill="black"
          fontSize="10px"
          fontFamily="Poppins"
          y={coursesStartY}
          x="220"
        ></text>
      )}

      {/* ACHIEVEMENTS SECTION with bullets and dynamic Y */}
      <rect
        fill="#99c7c7"
        height="16.5"
        width="110"
        y={achievementsStartY - 36.5}
        x="221"
      />
      <text
        letterSpacing="1"
        fill="white"
        fontSize="12px"
        fontFamily="Poppins"
        y={achievementsStartY - 24.35}
        x="224"
      >
        ACHIEVEMENTS
      </text>
      {achievementElements}

      {/* FOOTER */}
      {formData.footer && (
        <text
          fill="grey"
          fontSize="10px"
          fontFamily="Poppins"
          y={footerStartY}
          x="220"
        >
          {formData.footer}
        </text>
      )}
    </svg>
  );
};

export default DynamicSVG_01;
