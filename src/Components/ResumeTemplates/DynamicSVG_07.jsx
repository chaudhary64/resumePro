import React, { useContext } from "react";
import { Info } from "../../Context/Context";

const DynamicSVG_07 = ({ data }) => {
  let { formData } = useContext(Info);

  if (data) {
    formData = data;
  }
  return (
    <svg
      id="07"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 595.28 841.89"
      className="document-preview"
    >
      <rect fill="white" height="100%" width="100%"></rect>
      <path
        fill="#303846"
        d="M 0,0 L 595.28,0 C 595.28,0,595.28,0,595.28,0 L 595.28,104.125 C 595.28,104.125,595.28,104.125,595.28,104.125 L 0,104.125 C 0,104.125,0,104.125,0,104.125 L 0,0 C 0,0,0,0,0,0 Z"
      ></path>
      <text
        fill="white"
        fontSize="25px"
        fontFamily="Poppins"
        y="45.3125"
        x="25"
      >
        {formData.personalInfo.givenName} {formData.personalInfo.familyName}
      </text>
      <image
        imageRendering="optimizeSpeed"
        href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiM5NzliYTIiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PHBhdGggZD0iTTUwMi4zIDE5MC44YzMuOS0zLjEgOS43LS4yIDkuNyA0LjdWNDAwYzAgMjYuNS0yMS41IDQ4LTQ4IDQ4SDQ4Yy0yNi41IDAtNDgtMjEuNS00OC00OFYxOTUuNmMwLTUgNS43LTcuOCA5LjctNC43IDIyLjQgMTcuNCA1Mi4xIDM5LjUgMTU0LjEgMTEzLjYgMjEuMSAxNS40IDU2LjcgNDcuOCA5Mi4yIDQ3LjYgMzUuNy4zIDcyLTMyLjggOTIuMy00Ny42IDEwMi03NC4xIDEzMS42LTk2LjMgMTU0LTExMy43ek0yNTYgMzIwYzIzLjIuNCA1Ni42LTI5LjIgNzMuNC00MS40IDEzMi43LTk2LjMgMTQyLjgtMTA0LjcgMTczLjQtMTI4LjcgNS44LTQuNSA5LjItMTEuNSA5LjItMTguOXYtMTljMC0yNi41LTIxLjUtNDgtNDgtNDhINDhDMjEuNSA2NCAwIDg1LjUgMCAxMTJ2MTljMCA3LjQgMy40IDE0LjMgOS4yIDE4LjkgMzAuNiAyMy45IDQwLjcgMzIuNCAxNzMuNCAxMjguNyAxNi44IDEyLjIgNTAuMiA0MS44IDczLjQgNDEuNHoiPjwvcGF0aD48L3N2Zz4="
        height="9"
        width="9"
        y="61.37500000000001"
        x="25"
      ></image>
      <text
        fill="#979ba2"
        fontSize="9px"
        fontFamily="Poppins"
        y="68.48750000000001"
        x="39"
      >
        {formData.personalInfo.email}
      </text>
      <image
        imageRendering="optimizeSpeed"
        href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiM5NzliYTIiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PHBhdGggZD0iTTQ5My40IDI0LjZsLTEwNC0yNGMtMTEuMy0yLjYtMjIuOSAzLjMtMjcuNSAxMy45bC00OCAxMTJjLTQuMiA5LjgtMS40IDIxLjMgNi45IDI4bDYwLjYgNDkuNmMtMzYgNzYuNy05OC45IDE0MC41LTE3Ny4yIDE3Ny4ybC00OS42LTYwLjZjLTYuOC04LjMtMTguMi0xMS4xLTI4LTYuOWwtMTEyIDQ4QzMuOSAzNjYuNS0yIDM3OC4xLjYgMzg5LjRsMjQgMTA0QzI3LjEgNTA0LjIgMzYuNyA1MTIgNDggNTEyYzI1Ni4xIDAgNDY0LTIwNy41IDQ2NC00NjQgMC0xMS4yLTcuNy0yMC45LTE4LjYtMjMuNHoiPjwvcGF0aD48L3N2Zz4="
        height="9"
        width="9"
        y="61.37500000000001"
        x="194.179"
      ></image>
      <text
        fill="#979ba2"
        fontSize="9px"
        fontFamily="Poppins"
        y="68.48750000000001"
        x="208.179"
      >
        {formData.personalInfo.phoneNumber}
      </text>
      <image
        imageRendering="optimizeSpeed"
        href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiM5NzliYTIiIHZpZXdCb3g9IjAgMCAzODQgNTEyIiB3aWR0aD0iMzg0IiBoZWlnaHQ9IjUxMiI+PHBhdGggZD0iTTE3Mi4yNjggNTAxLjY3QzI2Ljk3IDI5MS4wMzEgMCAyNjkuNDEzIDAgMTkyIDAgODUuOTYxIDg1Ljk2MSAwIDE5MiAwczE5MiA4NS45NjEgMTkyIDE5MmMwIDc3LjQxMy0yNi45NyA5OS4wMzEtMTcyLjI2OCAzMDkuNjctOS41MzUgMTMuNzc0LTI5LjkzIDEzLjc3My0zOS40NjQgMHpNMTkyIDI3MmM0NC4xODMgMCA4MC0zNS44MTcgODAtODBzLTM1LjgxNy04MC04MC04MC04MCAzNS44MTctODAgODAgMzUuODE3IDgwIDgwIDgweiI+PC9wYXRoPjwvc3ZnPg=="
        height="9"
        width="6.75"
        y="73.75"
        x="26.125"
      ></image>
      <text
        fill="#979ba2"
        fontSize="9px"
        fontFamily="Poppins"
        y="80.8625"
        x="39"
      >
        {formData.personalInfo.address}
      </text>
      {/* Footer */}
      {formData.footer && (
        <text
          fill="black"
          fontSize="8px"
          fontFamily="Poppins"
          y="802.99"
          x="25"
        >
          {formData.footer}
        </text>
      )}
      <svg y="129.125" x="25" id="educations"></svg>
      <text fill="#303846" fontSize="15px" fontFamily="Poppins" y="143" x="25">
        Education
      </text>
      {formData.education && formData.education.length > 0 ? (
        formData.education.map((education, index) => {
          const yPosition = 167 + index * 33;
          return (
            <React.Fragment key={education.id}>
              <text
                fill="black"
                fontSize="10px"
                fontFamily="Poppins"
                y={yPosition + 7.5}
                x="280.4" // Adjusted x position for better alignment
              >
                {education.startDate} - {education.endDate}
              </text>
              <text
                fontWeight="bold"
                fill="black"
                fontSize="10px"
                fontFamily="Poppins"
                y={yPosition}
                x="25" // Adjusted x position for better alignment
              >
                {education.degree} 
              </text>
              <text
                fill="#888888"
                fontSize="10px"
                fontFamily="Poppins"
                y={yPosition + 13}
                x="25"
              >
                {education.institution} 
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
      <path
        fill="#e2e2e2"
        d="M 25,234.125 L 370.28,234.125 C 370.28,234.125,370.28,234.125,370.28,234.125 L 370.28,234.625 C 370.28,234.625,370.28,234.625,370.28,234.625 L 25,234.625 C 25,234.625,25,234.625,25,234.625 L 25,234.125 C 25,234.125,25,234.125,25,234.125 Z"
      ></path>
      <svg y="249.625" x="25" id="employment"></svg>
      <text
        fill="#303846"
        fontSize="15px"
        fontFamily="Poppins"
        y="263.5"
        x="25"
      >
        Employment
      </text>
      {formData.experience && formData.experience.length > 0 ? (
        formData.experience.map((experience, index) => {
          const yPosition = 287 + index * 33;
          return (
            <React.Fragment key={experience.id}>
              <text
                fill="black"
                fontSize="10px"
                fontFamily="Poppins"
                y={yPosition + 7.5}
                x="280.4" // Adjusted x position for better alignment
              >
                {experience.startDate} - {experience.endDate}
              </text>
              <text
                fontWeight="bold"
                fill="black"
                fontSize="10px"
                fontFamily="Poppins"
                y={yPosition}
                x="25" // Adjusted x position for better alignment
              >
                {experience.position} 
              </text>
              <text
                fill="#888888"
                fontSize="10px"
                fontFamily="Poppins"
                y={yPosition + 13}
                x="25"
              >
                {experience.employer} 
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
      <path
        fill="#e2e2e2"
        d="M 25,354.625 L 370.28,354.625 C 370.28,354.625,370.28,354.625,370.28,354.625 L 370.28,355.125 C 370.28,355.125,370.28,355.125,370.28,355.125 L 25,355.125 C 25,355.125,25,355.125,25,355.125 L 25,354.625 C 25,354.625,25,354.625,25,354.625 Z"
      ></path>
      <svg y="370.125" x="25" id="courses"></svg>
      <text fill="#303846" fontSize="15px" fontFamily="Poppins" y="384" x="25">
        Courses
      </text>
      {formData.courses && formData.courses.length > 0 ? (
        formData.courses.map((courses, index) => {
          const yPosition = 408 + index * 20;
          return (
            <React.Fragment key={courses.id}>
              <text
                fontWeight="bold"
                fill="black"
                fontSize="10px"
                fontFamily="Poppins"
                y={yPosition}
                x="280.4" // Adjusted x position for better alignment
              >
                {courses.startDate} - {courses.endDate}
              </text>
              <text
                fill="black"
                fontSize="10px"
                fontFamily="Poppins"
                y={yPosition}
                x="25" // Adjusted x position for better alignment
              >
                {courses.courseName}
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
      <path
        fill="#e2e2e2"
        d="M 25,447.625 L 370.28,447.625 C 370.28,447.625,370.28,447.625,370.28,447.625 L 370.28,448.125 C 370.28,448.125,370.28,448.125,370.28,448.125 L 25,448.125 C 25,448.125,25,448.125,25,448.125 L 25,447.625 C 25,447.625,25,447.625,25,447.625 Z"
      ></path>
      <svg y="463.125" x="25" id="achievements"></svg>
      <text fill="#303846" fontSize="15px" fontFamily="Poppins" y="477" x="25">
        Achievements
      </text>
      {formData.achievements && formData.achievements.length > 0 ? (
        formData.achievements.map((achievement, index) => {
          const yPosition = 501.25 + index * 20;
          return (
            <>
              <text
                key={achievement.id}
                fill="black"
                fontSize="10px"
                fontFamily="LiberationSans"
                y={yPosition}
                x="25"
              >
                {achievement.achievement}
              </text>
            </>
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
      <path
        fill="#e2e2e2"
        d="M 395.28,129.125 L 395.78,129.125 C 395.78,129.125,395.78,129.125,395.78,129.125 L 395.78,816.89 C 395.78,816.89,395.78,816.89,395.78,816.89 L 395.28,816.89 C 395.28,816.89,395.28,816.89,395.28,816.89 L 395.28,129.125 C 395.28,129.125,395.28,129.125,395.28,129.125 Z"
      ></path>
      <svg y="129.125" x="420.28" id="personalDetails"></svg>
      <text
        fill="#303846"
        fontSize="15px"
        fontFamily="Poppins"
        y="143"
        x="420.28"
      >
        Personal&nbsp;
      </text>
      <text
        fill="#303846"
        fontSize="15px"
        fontFamily="Poppins"
        y="143"
        x="487.94499999999994"
      >
        details
      </text>
      <svg y="157.125" x="420.28" id="dateOfBirth"></svg>
      <text
        fill="#888888"
        fontSize="10px"
        fontFamily="Poppins"
        y="167.25"
        x="420.28"
      >
        Date&nbsp;
      </text>
      <text
        fill="#888888"
        fontSize="10px"
        fontFamily="Poppins"
        y="167.25"
        x="446.60999999999996"
      >
        of&nbsp;
      </text>
      <text
        fill="#888888"
        fontSize="10px"
        fontFamily="Poppins"
        y="167.25"
        x="459.02"
      >
        birth
      </text>
      <text
        fill="black"
        fontSize="10px"
        fontFamily="Poppins"
        y="181"
        x="420.28"
      >
        {formData.personalInfo.dob}
      </text>
      <svg y="194.625" x="420.28" id="placeOfBirth"></svg>
      <text
        fill="#888888"
        fontSize="10px"
        fontFamily="Poppins"
        y="204.75"
        x="420.28"
      >
        Place&nbsp;
      </text>
      <text
        fill="#888888"
        fontSize="10px"
        fontFamily="Poppins"
        y="204.75"
        x="450.04999999999995"
      >
        of&nbsp;
      </text>
      <text
        fill="#888888"
        fontSize="10px"
        fontFamily="Poppins"
        y="204.75"
        x="462.46"
      >
        birth
      </text>
      <text
        fill="black"
        fontSize="10px"
        fontFamily="Poppins"
        y="218.5"
        x="420.28"
      >
        {formData.personalInfo.placeOfBirth}
      </text>
      <svg y="232.125" x="420.28" id="driversLicense"></svg>
      <text
        fill="#888888"
        fontSize="10px"
        fontFamily="Poppins"
        y="242.25"
        x="420.28"
      >
        Driver's&nbsp;
      </text>
      <text
        fill="#888888"
        fontSize="10px"
        fontFamily="Poppins"
        y="242.25"
        x="457.87"
      >
        license
      </text>
      <text
        fill="black"
        fontSize="10px"
        fontFamily="Poppins"
        y="256"
        x="420.28"
      >
        {formData.personalInfo.driverLicense}
      </text>
      <svg y="269.625" x="420.28" id="gender"></svg>
      <text
        fill="#888888"
        fontSize="10px"
        fontFamily="Poppins"
        y="279.75"
        x="420.28"
      >
        Gender
      </text>
      <text
        fill="black"
        fontSize="10px"
        fontFamily="Poppins"
        y="293.5"
        x="420.28"
      >
        {formData.personalInfo.gender}
      </text>
      <svg y="307.125" x="420.28" id="nationality"></svg>
      <text
        fill="#888888"
        fontSize="10px"
        fontFamily="Poppins"
        y="317.25"
        x="420.28"
      >
        Nationality
      </text>
      <text
        fill="black"
        fontSize="10px"
        fontFamily="Poppins"
        y="331"
        x="420.28"
      >
        {formData.personalInfo.nationality}
      </text>
      <svg y="344.625" x="420.28" id="civilStatus"></svg>
      <text
        fill="#888888"
        fontSize="10px"
        fontFamily="Poppins"
        y="354.75"
        x="420.28"
      >
        Civil&nbsp;
      </text>
      <text
        fill="#888888"
        fontSize="10px"
        fontFamily="Poppins"
        y="354.75"
        x="443.07"
      >
        status
      </text>
      <text
        fill="black"
        fontSize="10px"
        fontFamily="Poppins"
        y="368.5"
        x="420.28"
      >
        {formData.personalInfo.civilStatus}
      </text>
      <svg y="382.125" x="420.28" id="website"></svg>
      <text
        fill="#888888"
        fontSize="10px"
        fontFamily="Poppins"
        y="392.25"
        x="420.28"
      >
        Website
      </text>
      <text
        fill="black"
        fontSize="10px"
        fontFamily="Poppins"
        y="406"
        x="420.28"
      >
        {formData.personalInfo.website}
      </text>
      <svg y="419.625" x="420.28" id="linkedin"></svg>
      <text
        fill="#888888"
        fontSize="10px"
        fontFamily="Poppins"
        y="429.75"
        x="420.28"
      >
        LinkedIn
      </text>
      <text
        fill="black"
        fontSize="10px"
        fontFamily="Poppins"
        y="443.5"
        x="420.28"
      >
        {formData.personalInfo.linkedin}
      </text>
      <path
        fill="#e2e2e2"
        d="M 420.28,459.125 L 570.28,459.125 C 570.28,459.125,570.28,459.125,570.28,459.125 L 570.28,459.625 C 570.28,459.625,570.28,459.625,570.28,459.625 L 420.28,459.625 C 420.28,459.625,420.28,459.625,420.28,459.625 L 420.28,459.125 C 420.28,459.125,420.28,459.125,420.28,459.125 Z"
      ></path>
      <svg y="474.625" x="420.28" id="skills"></svg>
      <text
        fill="#303846"
        fontSize="15px"
        fontFamily="Poppins"
        y="488.5"
        x="420.28"
      >
        Skills
      </text>
      {formData.skills.map((skill, index) => (
        <text
          key={index}
          fill="black"
          fontSize="10px"
          fontFamily="Poppins"
          y={512.75 + index * 20}
          x="420.28"
        >
          {skill.skill}
        </text>
      ))}
      <path
        fill="#e2e2e2"
        d="M 420.28,552.125 L 570.28,552.125 C 570.28,552.125,570.28,552.125,570.28,552.125 L 570.28,552.625 C 570.28,552.625,570.28,552.625,570.28,552.625 L 420.28,552.625 C 420.28,552.625,420.28,552.625,420.28,552.625 L 420.28,552.125 C 420.28,552.125,420.28,552.125,420.28,552.125 Z"
      ></path>
      <svg y="567.625" x="420.28" id="languages"></svg>
      <text
        fill="#303846"
        fontSize="15px"
        fontFamily="Poppins"
        y="581.5"
        x="420.28"
      >
        Languages
      </text>
      {formData.languages.map((language, index) => (
        <text
          key={index}
          fill="black"
          fontSize="10px"
          fontFamily="LiberationSans"
          y={605.75 + index * 20}
          x="420.28"
        >
          {language.language}
        </text>
      ))}
      <path
        fill="#e2e2e2"
        d="M 420.28,645.125 L 570.28,645.125 C 570.28,645.125,570.28,645.125,570.28,645.125 L 570.28,645.625 C 570.28,645.625,570.28,645.625,570.28,645.625 L 420.28,645.625 C 420.28,645.625,420.28,645.625,420.28,645.625 L 420.28,645.125 C 420.28,645.125,420.28,645.125,420.28,645.125 Z"
      ></path>
      <svg y="660.625" x="420.28" id="hobbies"></svg>
      <text
        fill="#303846"
        fontSize="15px"
        fontFamily="Poppins"
        y="674.5"
        x="420.28"
      >
        Hobbies
      </text>
      {formData.hobbies.map((hobby, index) => (
        <g key={index}>
          <rect
            x="420.28"
            y={692 + index * 20}
            width="7.5"
            height="7.5"
            fill="#303846"
          />
          <text
            fill="black"
            fontSize="10px"
            fontFamily="LiberationSans"
            x={433} // a little to the right of the square
            y={698 + index * 20} // vertically aligned to center the text with the rect
          >
            {hobby.hobby}
          </text>
        </g>
      ))}
    </svg>
  );
};

export default DynamicSVG_07;
