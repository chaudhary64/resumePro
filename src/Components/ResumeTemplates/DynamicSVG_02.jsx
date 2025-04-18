import React, { useContext } from "react";
import { Info } from "../../Context/Context";

const DynamicSVG_02 = () => {
  const { formData } = useContext(Info);

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
      <text
        fill="white"
        fontSize="16.5px"
        fontFamily="LiberationSans"
        y="41.70625"
        x="36.7110595703125"
      >
        {formData.personalInfo.givenName} {formData.personalInfo.familyName}
      </text>
      <svg y="62.6875" x="15" id="personalDetails"></svg>
      <text
        fill="white"
        fontSize="16.5px"
        fontFamily="LiberationSans"
        y="79.39375"
        x="15"
      >
        Personal&nbsp;
      </text>
      <text
        fill="white"
        fontSize="16.5px"
        fontFamily="LiberationSans"
        y="79.39375"
        x="84.7060546875"
      >
        details
      </text>
      <rect
        fill="white"
        height="0.5"
        width="37.5986328125"
        y="73.29375"
        x="147.4013671875"
      ></rect>
      <svg y="100.375" x="15" id="emailaddress"></svg>
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
      <svg y="130.625" x="15" id="phonenumber"></svg>
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
      <svg y="175.75" x="15" id="address"></svg>
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

      <svg y="241.125" x="15" id="skills"></svg>
      <text
        fill="white"
        fontSize="16.5px"
        fontFamily="LiberationSans"
        y="257.83125"
        x="15"
      >
        Skills
      </text>
      {formData.skills.map((skill, index) => (
        <text
          key={index}
          fill="white"
          fontSize="11px"
          fontFamily="LiberationSans"
          y={280 + index * 20}
          x="15"
        >
          {skill.skill}
        </text>
      ))}
      <svg y="359.1875" x="15" id="languages"></svg>
      <text
        fill="white"
        fontSize="16.5px"
        fontFamily="LiberationSans"
        y="375.89375"
        x="15"
      >
        Languages
      </text>
      {formData.languages.map((language, index) => (
        <text
          key={index}
          fill="white"
          fontSize="11px"
          fontFamily="LiberationSans"
          y={398 + index * 20}
          x="15"
        >
          {language.language}
        </text>
      ))}
      <svg y="452.125" x="15" id="hobbies"></svg>
      <text
        fill="white"
        fontSize="16.5px"
        fontFamily="LiberationSans"
        y="468.83125"
        x="15"
      >
        Hobbies
      </text>
      {formData.hobbies.map((hobby, index) => (
        <text
          key={index}
          fill="white"
          fontSize="11px"
          fontFamily="LiberationSans"
          y={491 + index * 20}
          x="15"
        >
          {hobby.hobby}
        </text>
      ))}
      {/* Footer */}
      {formData.footer && (
        <text
          fill="grey"
          fontSize="11px"
          fontFamily="LiberationSans"
          y={815}
          x="215"
        >
          {formData.footer}
        </text>
      )}
      <svg y="25" x="215" id="educations"></svg>
      <text
        fontWeight="bold"
        fill="black"
        fontSize="16.5px"
        fontFamily="LiberationSans"
        y="41.70625"
        x="215"
      >
        Education
      </text>
      <rect
        fill="#d8d8d8"
        height="0.5"
        width="260.527314453125"
        y="35.60625"
        x="309.752685546875"
      ></rect>
      <svg y="62.6875" x="215" id="db8e4277-2134-427f-8ae3-7515fbdbd145"></svg>
      {formData.education && formData.education.length > 0 ? (
        formData.education.map((education, index) => {
          const yPosition = 62.6875 + index * 20;
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
                font-size="10px"
                font-family="Poppins"
                y={yPosition}
                x="300" // Adjusted x position for better alignment
              >
                {education.degree} 
              </text>
              <text
                fill="black"
                font-size="10px"
                font-family="Poppins"
                y={yPosition}
                x="450" // Adjusted x position for better alignment
              >
                {education.startDate} - {education.endDate}
              </text>
            </React.Fragment>
          );
        })
      ) : (
        <text
          fill="black"
          font-size="10px"
          font-family="Poppins"
          y="340.875"
          x="215"
        ></text>
      )}
      <svg y="148.1875" x="215" id="employment"></svg>
      <text
        fontWeight="bold"
        fill="black"
        fontSize="16.5px"
        fontFamily="LiberationSans"
        y="164.89375"
        x="215"
      >
        Employment
      </text>
      <rect
        fill="#d8d8d8"
        height="0.5"
        width="241.26388671874997"
        y="158.79375"
        x="329.01611328125"
      ></rect>
      <svg y="185.875" x="215" id="f14a475d-5174-4648-8285-34774ed63958"></svg>
      {formData.experience && formData.experience.length > 0 ? (
        formData.experience.map((experience, index) => {
          const yPosition = 185.875 + index * 30;
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
                <tspan dx="10">{experience.employer}</tspan>
              </text>

              <text
                fill="black"
                font-size="10px"
                font-family="Poppins"
                y={yPosition}
                x="400" // Adjusted x position for better alignment
              >
                {experience.startDate} - {experience.endDate}
              </text>
              <text
                fill="black"
                font-size="10px"
                font-family="Poppins"
                y={yPosition + 15} // Slightly below the position
                x="215"
              >
                {experience.description}
              </text>
              <text
                fill="black"
                font-size="10px"
                font-family="Poppins"
                y={yPosition + 20} // Below the employer
                x="215"
              ></text>
            </React.Fragment>
          );
        })
      ) : (
        <text
          fill="black"
          font-size="10px"
          font-family="Poppins"
          y="425.875"
          x="215"
        ></text>
      )}
      <svg y="271.375" x="215" id="courses"></svg>
      <text
        fontWeight="bold"
        fill="black"
        fontSize="16.5px"
        fontFamily="LiberationSans"
        y="288.08125"
        x="215"
      >
        Courses
      </text>
      <rect
        fill="#d8d8d8"
        height="0.5"
        width="274.255830078125"
        y="281.98125"
        x="296.024169921875"
      ></rect>
      <svg y="309.0625" x="215" id="2bdf6827-4f68-456c-9fec-e1e5cc65ab92"></svg>
      {formData.courses && formData.courses.length > 0 ? (
        formData.courses.map((course, index) => {
          const yPosition = 309.0625 + index * 20;
          return (
            <React.Fragment key={course.id}>
              <text
                fontWeight="bold"
                fill="black"
                font-size="10px"
                font-family="Poppins"
                y={yPosition}
                x="215"
              >
                {course.courseName}
              </text>
              <text
                fill="black"
                font-size="10px"
                font-family="Poppins"
                y={yPosition}
                x="400"
              >
                {course.startDate} - {course.endDate}
              </text>
            </React.Fragment>
          );
        })
      ) : (
        <text
          fill="black"
          font-size="10px"
          font-family="Poppins"
          y="563.875"
          x="215"
        ></text>
      )}
      <svg y="364.3125" x="215" id="achievements"></svg>
      <text
        fontWeight="bold"
        fill="black"
        fontSize="16.5px"
        fontFamily="LiberationSans"
        y="381.01875"
        x="215"
      >
        Achievements
      </text>
      <rect
        fill="#d8d8d8"
        height="0.5"
        width="228.39743164062497"
        y="374.91875"
        x="341.882568359375"
      ></rect>
      <svg y="402" x="215" id="description"></svg>
      {formData.achievements && formData.achievements.length > 0 ? (
        formData.achievements.map((achievement, index) => {
          const yPosition = 402 + index * 20;
          return (
            <text
              key={achievement.id}
              fill="black"
              font-size="10px"
              font-family="Poppins"
              y={yPosition}
              x="215"
            >
              {achievement.achievement}
            </text>
          );
        })
      ) : (
        <text
          fill="black"
          font-size="10px"
          font-family="Poppins"
          y="647.875"
          x="215"
        ></text>
      )}
    </svg>
  );
};

export default DynamicSVG_02;
