// DynamicSVG_02.jsx
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

const DynamicSVG_02 = ({ data }) => {
  let { formData } = useContext(Info);

  if (data) {
    formData = data;
  }

  // --- Dynamic Y calculations for left column ---
  const skillsStartY = 280;
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

  // --- Dynamic Y calculations for right column ---
  const educationStartY = 62.6875;
  const educationLineHeight = 20;
  const educationCount = formData.education?.length || 0;

  const educationSectionGap = 40;
  const employmentStartY =
    educationStartY +
    educationCount * educationLineHeight +
    educationSectionGap;
  const employmentLineHeight = 30;
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
  const achievementFontSize = 10;
  const achievementLineHeightPx = 14;
  const achievementMaxWidth = 320;

  // --- Achievements with bullets and dynamic Y ---
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
            x="215"
            y={achievementY}
          >
            {lines.map((line, i) => (
              <tspan key={i} x="215" dy={i === 0 ? 0 : achievementLineHeightPx}>
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
        x="215"
      ></text>
    );

  // --- Footer Y and overflow detection ---
  const achievementsSectionGap = 50;
  const footerStartY =
    lastAchievementY +
    lastAchievementLines * achievementLineHeightPx +
    achievementsSectionGap;

  const [isOverflowing, setIsOverflowing] = useState(false);

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
    formData.achievements?.length,
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
      id="02"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 595.28 841.89"
      className="document-preview"
    >
      <rect fill="white" height="100%" width="100%"></rect>
      <path
        fill="#58a18a"
        d="M 0,0 L 200,0 C 200,0,200,0,200,0 L 200,841.89 C 200,841.89,200,841.89,200,841.89 L 0,841.89 C 0,841.89,0,841.89,0,841.89 L 0,0 C 0,0,0,0,0,0 Z"
      ></path>
      {/* Name */}
      <text
        fill="white"
        fontSize="16.5px"
        fontFamily="LiberationSans"
        y="41.70625"
        x="36.7110595703125"
      >
        {formData.personalInfo.givenName} {formData.personalInfo.familyName}
      </text>
      {/* Email */}
      <image
        imageRendering="optimizeSpeed"
        href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IndoaXRlIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiPjxwYXRoIGQ9Ik01MDIuMyAxOTAuOGMzLjktMy4xIDkuNy0uMiA5LjcgNC43VjQwMGMwIDI2LjUtMjEuNSA0OC00OCA0OEg0OGMtMjYuNSAwLTQ4LTIxLjUtNDgtNDhWMTk1LjZjMC01IDUuNy03LjggOS43LTQuNyAyMi40IDE3LjQgNTIuMSAzOS41IDE1NC4xIDExMy42IDIxLjEgMTUuNCA1Ni43IDQ3LjggOTIuMiA0Ny42IDM1LjcuMyA3Mi0zMi44IDkyLjMtNDcuNiAxMDItNzQuMSAxMzEuNi05Ni4zIDE1NC0xMTMuN3pNMjU2IDMyMGMyMy4yLjQgNTYuNi0yOS4yIDczLjQtNDEuNCAxMzIuNy05Ni4zIDE0Mi44LTEwNC43IDE3My40LTEyOC43IDUuOC00LjUgOS4yLTExLjUgOS4yLTE4Ljl2LTE5YzAtMjYuNS0yMS41LTQ4LTQ4LTQ4SDQ4QzIxLjUgNjQgMCA4NS41IDAgMTEydjE5YzAgNy40IDMuNCAxNC4zIDkuMiAxOC45IDMwLjYgMjMuOSA0MC43IDMyLjQgMTczLjQgMTI4LjcgMTYuOCAxMi4yIDUwLjIgNDEuOCA3My40IDQxLjR6Ij48L3BhdGg+PC9zdmc+"
        height="15"
        width="15"
        y="100.4375"
        x="15"
      ></image>
      <text
        fill="white"
        fontSize="11px"
        fontFamily="LiberationSans"
        y="111.5125"
        x="39"
      >
        {formData.personalInfo.email}
      </text>
      {/* Phone */}
      <image
        imageRendering="optimizeSpeed"
        href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IndoaXRlIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiPjxwYXRoIGQ9Ik00OTMuNCAyNC42bC0xMDQtMjRjLTExLjMtMi42LTIyLjkgMy4zLTI3LjUgMTMuOWwtNDggMTEyYy00LjIgOS44LTEuNCAyMS4zIDYuOSAyOGw2MC42IDQ5LjZjLTM2IDc2LjctOTguOSAxNDAuNS0xNzcuMiAxNzcuMmwtNDkuNi02MC42Yy02LjgtOC4zLTE4LjItMTEuMS0yOC02LjlsLTExMiA0OEMzLjkgMzY2LjUtMiAzNzguMS42IDM4OS40bDI0IDEwNEMyNy4xIDUwNC4yIDM2LjcgNTEyIDQ4IDUxMmMyNTYuMSAwIDQ2NC0yMDcuNSA0NjQtNDY0IDAtMTEuMi03LjctMjAuOS0xOC42LTIzLjR6Ij48L3BhdGg+PC9zdmc+"
        height="15"
        width="15"
        y="130.6875"
        x="15"
      ></image>
      <text
        fill="white"
        fontSize="11px"
        fontFamily="LiberationSans"
        y="142.6875"
        x="39"
      >
        {formData.personalInfo.phoneNumber}
      </text>
      {/* Address */}
      <image
        imageRendering="optimizeSpeed"
        href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IndoaXRlIiB2aWV3Qm94PSIwIDAgNTc2IDUxMiIgd2lkdGg9IjU3NiIgaGVpZ2h0PSI1MTIiPjxwYXRoIGQ9Ik0yODAuMzcgMTQ4LjI2TDk2IDMwMC4xMVY0NjRhMTYgMTYgMCAwIDAgMTYgMTZsMTEyLjA2LS4yOWExNiAxNiAwIDAgMCAxNS45Mi0xNlYzNjhhMTYgMTYgMCAwIDEgMTYtMTZoNjRhMTYgMTYgMCAwIDEgMTYgMTZ2OTUuNjRhMTYgMTYgMCAwIDAgMTYgMTYuMDVMNDY0IDQ4MGExNiAxNiAwIDAgMCAxNi0xNlYzMDBMMjk1LjY3IDE0OC4yNmExMi4xOSAxMi4xOSAwIDAgMC0xNS4zIDB6TTU3MS42IDI1MS40N0w0ODggMTgyLjU2VjQ0LjA1YTEyIDEyIDAgMCAwLTEyLTEyaC01NmExMiAxMiAwIDAgMC0xMiAxMnY3Mi42MUwzMTguNDcgNDNhNDggNDggMCAwIDAtNjEgMEw0LjM0IDI1MS40N2ExMiAxMiAwIDAgMC0xLjYgMTYuOWwyNS41IDMxQTEyIDEyIDAgMCAwIDQ1LjE1IDMwMWwyMzUuMjItMTkzLjc0YTEyLjE5IDEyLjE5IDAgMCAxIDE1LjMgMEw1MzAuOSAzMDFhMTIgMTIgMCAwIDAgMTYuOS0xLjZsMjUuNS0zMWExMiAxMiAwIDAgMC0xLjctMTYuOTN6Ij48L3BhdGg+PC9zdmc+"
        height="15"
        width="16.875"
        y="165.8125"
        x="14.0625"
      ></image>
      <text
        fill="white"
        fontSize="11px"
        fontFamily="LiberationSans"
        y="176.8875"
        x="39"
      >
        {(() => {
          const words = formData.personalInfo.address.split(" ");
          const lines = [];
          for (let i = 0; i < words.length; i += 4) {
            const lineWords = words.slice(i, i + 4);
            lines.push(lineWords.join(" "));
          }
          return lines.map((line, lineIndex) => (
            <tspan key={lineIndex} x="39" dy={lineIndex === 0 ? "0" : "1.2em"}>
              {line}
            </tspan>
          ));
        })()}
      </text>
      {/* SKILLS */}
      <text
        fill="white"
        fontSize="16.5px"
        fontFamily="LiberationSans"
        y={skillsStartY - 14.35}
        x="15"
      >
        Skills
      </text>
      {formData.skills.map((skill, index) => (
        <text
          key={skill.id}
          fill="white"
          fontSize="11px"
          fontFamily="LiberationSans"
          y={skillsStartY + (index + 0.5) * skillLineHeight}
          x="15"
        >
          {skill.skill}
        </text>
      ))}
      {/* LANGUAGES */}
      <text
        fill="white"
        fontSize="16.5px"
        fontFamily="LiberationSans"
        y={languagesStartY - 14.35}
        x="15"
      >
        Languages
      </text>
      {formData.languages.map((language, index) => (
        <text
          key={language.id}
          fill="white"
          fontSize="11px"
          fontFamily="LiberationSans"
          y={languagesStartY + (index + 0.5) * languageLineHeight}
          x="15"
        >
          {language.language}
        </text>
      ))}
      {/* HOBBIES */}
      <text
        fill="white"
        fontSize="16.5px"
        fontFamily="LiberationSans"
        y={hobbiesStartY - 14.35}
        x="15"
      >
        Hobbies
      </text>
      {formData.hobbies.map((hobby, index) => (
        <text
          key={hobby.id}
          fill="white"
          fontSize="11px"
          fontFamily="LiberationSans"
          y={hobbiesStartY + (index + 0.5) * hobbyLineHeight}
          x="15"
        >
          {hobby.hobby}
        </text>
      ))}
      {/* EDUCATION */}
      <text
        fontWeight="bold"
        fill="black"
        fontSize="16.5px"
        fontFamily="LiberationSans"
        y={educationStartY - 14.35}
        x="215"
      >
        Education
      </text>
      {formData.education && formData.education.length > 0 ? (
        formData.education.map((education, index) => {
          const yPosition = educationStartY + index * educationLineHeight;
          return (
            <React.Fragment key={education.id}>
              <text
                fontWeight="bold"
                fill="#58a18a"
                fontSize="11px"
                fontFamily="LiberationSans"
                y={yPosition}
                x="215"
              >
                {education.institution}
              </text>
              <text
                fill="black"
                fontSize="10px"
                fontFamily="Poppins"
                fontWeight="bold"
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
          x="215"
        ></text>
      )}
      {/* EMPLOYMENT */}
      <text
        fontWeight="bold"
        fill="black"
        fontSize="16.5px"
        fontFamily="LiberationSans"
        y={employmentStartY - 14.35}
        x="215"
      >
        Employment
      </text>
      {formData.experience && formData.experience.length > 0 ? (
        formData.experience.map((experience, index) => {
          const yPosition = employmentStartY + index * employmentLineHeight;
          return (
            <React.Fragment key={experience.id}>
              <text
                fontWeight="bold"
                fill="#58a18a"
                fontSize="11px"
                fontFamily="LiberationSans"
                y={yPosition}
                x="215"
              >
                <tspan>{experience.position}</tspan>
                <tspan dx="300"></tspan>
              </text>
              <text
                fill="black"
                fontSize="10px"
                fontFamily="Poppins"
                fontWeight="bold"
                y={yPosition}
                x="300"
              >
                {experience.employer}
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
                x="215"
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
          x="215"
        ></text>
      )}
      {/* COURSES */}
      <text
        fontWeight="bold"
        fill="black"
        fontSize="16.5px"
        fontFamily="LiberationSans"
        y={coursesStartY - 14.35}
        x="215"
      >
        Courses
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
                x="215"
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
          x="215"
        ></text>
      )}
      {/* ACHIEVEMENTS - with SVG text wrapping and dynamic Y */}
      <text
        fontWeight="bold"
        fill="black"
        fontSize="16.5px"
        fontFamily="LiberationSans"
        y={achievementsStartY - 14.35}
        x="215"
      >
        Achievements
      </text>
      {achievementElements}
      {/* FOOTER */}
      {formData.footer && (
        <text
          fill="grey"
          fontSize="11px"
          fontFamily="LiberationSans"
          y={footerStartY}
          x="215"
        >
          {formData.footer}
        </text>
      )}
    </svg>
  );
};

export default DynamicSVG_02;
