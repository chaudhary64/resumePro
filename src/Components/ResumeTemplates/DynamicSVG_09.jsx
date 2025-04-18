import React, { useContext } from "react";
import { Info } from "../../Context/Context";

const DynamicSVG_09 = () => {
  const { formData } = useContext(Info);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 595.28 841.89"
      className="document-preview"
    >
      <rect fill="white" height="100%" width="100%"></rect>
      <path
        fill="#2f71a0"
        d="M 0,0 L 595.28,0 C 595.28,0,595.28,0,595.28,0 L 595.28,30 C 595.28,30,595.28,30,595.28,30 L 0,30 C 0,30,0,30,0,30 L 0,0 C 0,0,0,0,0,0 Z"
      ></path>
      <path
        fill="#2f71a0"
        d="M 0,811.89 L 595.28,811.89 C 595.28,811.89,595.28,811.89,595.28,811.89 L 595.28,841.89 C 595.28,841.89,595.28,841.89,595.28,841.89 L 0,841.89 C 0,841.89,0,841.89,0,841.89 L 0,811.89 C 0,811.89,0,811.89,0,811.89 Z"
      ></path>
      <text
        fontWeight="bold"
        fill="#2f71a0"
        fontSize="25px"
        fontFamily="LiberationSans"
        y="75.3125"
        x="30"
      >
        {formData.personalInfo.givenName} {formData.personalInfo.familyName}
      </text>
      <path
        fill="#e2e2e2"
        d="M 30,88.375 L 565.28,88.375 C 565.28,88.375,565.28,88.375,565.28,88.375 L 565.28,88.875 C 565.28,88.875,565.28,88.875,565.28,88.875 L 30,88.875 C 30,88.875,30,88.875,30,88.875 L 30,88.375 C 30,88.375,30,88.375,30,88.375 Z"
      ></path>
      <path
        fill="#f4f7fa"
        d="M 30,108.875 L 190.584,108.875 C 190.584,108.875,190.584,108.875,190.584,108.875 L 190.584,791.89 C 190.584,791.89,190.584,791.89,190.584,791.89 L 30,791.89 C 30,791.89,30,791.89,30,791.89 L 30,108.875 C 30,108.875,30,108.875,30,108.875 Z"
      ></path>
      <svg y="118.875" x="40" id="personalDetails"></svg>
      <text
        fontWeight="bold"
        fill="#2f71a0"
        fontSize="15px"
        fontFamily="LiberationSans"
        y="134.0625"
        x="40"
      >
        Personal&nbsp;
      </text>
      <text
        fontWeight="bold"
        fill="#2f71a0"
        fontSize="15px"
        fontFamily="LiberationSans"
        y="134.0625"
        x="107.529296875"
      >
        details
      </text>
      <path
        fill="#d8d8d8"
        d="M 40,143.5 L 180.584,143.5 C 180.584,143.5,180.584,143.5,180.584,143.5 L 180.584,144 C 180.584,144,180.584,144,180.584,144 L 40,144 C 40,144,40,144,40,144 L 40,143.5 C 40,143.5,40,143.5,40,143.5 Z"
      ></path>
      <svg y="154" x="40"></svg>
      <text
        fontWeight="bold"
        fill="black"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="164.125"
        x="40"
      >
        Name
      </text>
      <text
        fill="black"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="177.875"
        x="40"
      >
        {formData.personalInfo.givenName} {formData.personalInfo.familyName}
      </text>
      <svg y="191.5" x="40" id="emailaddress"></svg>
      <text
        fontWeight="bold"
        fill="black"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="201.625"
        x="40"
      >
        Email&nbsp;
      </text>
      <text
        fontWeight="bold"
        fill="black"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="201.625"
        x="69.4580078125"
      >
        address
      </text>
      <text
        fill="black"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="215.375"
        x="40"
      >
        {formData.personalInfo.email}
      </text>
      <svg y="242.75" x="40" id="phonenumber"></svg>
      <text
        fontWeight="bold"
        fill="black"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="252.875"
        x="40"
      >
        Phone&nbsp;
      </text>
      <text
        fontWeight="bold"
        fill="black"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="252.875"
        x="73.3349609375"
      >
        number
      </text>
      <text
        fill="black"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="266.625"
        x="40"
      >
        {formData.personalInfo.phoneNumber}
      </text>
      <svg y="280.25" x="40" id="address"></svg>
      <text
        fontWeight="bold"
        fill="black"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="290.375"
        x="40"
      >
        Address
      </text>
      <text
        fill="black"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="304.125"
        x="40"
      >
        {(() => {
          const words = formData.personalInfo.address.split(" ");
          const lines = [];

          for (let i = 0; i < words.length; i += 4) {
            const lineWords = words.slice(i, i + 4);
            lines.push(lineWords.join(" "));
          }

          return lines.map((line, lineIndex) => (
            <tspan key={lineIndex} x="40" dy={lineIndex === 0 ? "0" : "1.2em"}>
              {line}
            </tspan>
          ));
        })()}
      </text>
      <svg y="345.25" x="40" id="dateOfBirth"></svg>
      <text
        fontWeight="bold"
        fill="black"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="355.375"
        x="40"
      >
        Date&nbsp;
      </text>
      <text
        fontWeight="bold"
        fill="black"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="355.375"
        x="64.453125"
      >
        of&nbsp;
      </text>
      <text
        fontWeight="bold"
        fill="black"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="355.375"
        x="76.669921875"
      >
        birth
      </text>
      <text
        fill="black"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="369.125"
        x="40"
      >
        {formData.personalInfo.dob}
      </text>
      <svg y="382.75" x="40" id="placeOfBirth"></svg>
      <text
        fontWeight="bold"
        fill="black"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="392.875"
        x="40"
      >
        Place&nbsp;
      </text>
      <text
        fontWeight="bold"
        fill="black"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="392.875"
        x="68.9111328125"
      >
        of&nbsp;
      </text>
      <text
        fontWeight="bold"
        fill="black"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="392.875"
        x="81.1279296875"
      >
        birth
      </text>
      <text
        fill="black"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="406.625"
        x="40"
      >
        {formData.personalInfo.placeOfBirth}
      </text>
      <svg y="420.25" x="40" id="driversLicense"></svg>
      <text
        fontWeight="bold"
        fill="black"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="430.375"
        x="40"
      >
        Driver's&nbsp;
      </text>
      <text
        fontWeight="bold"
        fill="black"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="430.375"
        x="79.6240234375"
      >
        license
      </text>
      <text
        fill="black"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="444.125"
        x="40"
      >
        {formData.personalInfo.driverLicense}
      </text>
      <svg y="457.75" x="40" id="gender"></svg>
      <text
        fontWeight="bold"
        fill="black"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="467.875"
        x="40"
      >
        Gender
      </text>
      <text
        fill="black"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="481.625"
        x="40"
      >
        {formData.personalInfo.gender}
      </text>
      <svg y="495.25" x="40" id="nationality"></svg>
      <text
        fontWeight="bold"
        fill="black"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="505.375"
        x="40"
      >
        Nationality
      </text>
      <text
        fill="black"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="519.125"
        x="40"
      >
        {formData.personalInfo.nationality}
      </text>
      <svg y="532.75" x="40" id="civilStatus"></svg>
      <text
        fontWeight="bold"
        fill="black"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="542.875"
        x="40"
      >
        Civil&nbsp;
      </text>
      <text
        fontWeight="bold"
        fill="black"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="542.875"
        x="63.896484375"
      >
        status
      </text>
      <text
        fill="black"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="556.625"
        x="40"
      >
        {formData.personalInfo.civilStatus}
      </text>
      <svg y="570.25" x="40" id="website"></svg>
      <text
        fontWeight="bold"
        fill="black"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="580.375"
        x="40"
      >
        Website
      </text>
      <text
        fill="black"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="594.125"
        x="40"
      >
        {formData.personalInfo.website}
      </text>
      <svg y="607.75" x="40" id="linkedin"></svg>
      <text
        fontWeight="bold"
        fill="black"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="617.875"
        x="40"
      >
        LinkedIn
      </text>
      <text
        fill="black"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="631.625"
        x="40"
      >
        {formData.personalInfo.linkedin}
      </text>
      <svg y="108.875" x="210.584" id="educations"></svg>
      <text
        fontWeight="bold"
        fill="#2f71a0"
        fontSize="15px"
        fontFamily="LiberationSans"
        y="124.0625"
        x="210.584"
      >
        Education
      </text>
      <path
        fill="#e2e2e2"
        d="M 210.584,133.5 L 565.28,133.5 C 565.28,133.5,565.28,133.5,565.28,133.5 L 565.28,134 C 565.28,134,565.28,134,565.28,134 L 210.584,134 C 210.584,134,210.584,134,210.584,134 L 210.584,133.5 C 210.584,133.5,210.584,133.5,210.584,133.5 Z"
      ></path>
      {formData.education && formData.education.length > 0 ? (
        formData.education.map((education, index) => {
          const yPosition = 159.125 + index * 35;
          return (
            <React.Fragment key={education.id}>
              <text
                fontWeight="bold"
                fill="#ad3f40"
                fontSize="10px"
                fontFamily="LiberationSans"
                y={yPosition + 7.5}
                x="464" // Adjusted x position for better alignment
              >
                {education.startDate} - {education.endDate}
              </text>
              <text
                fontWeight="bold"
                fill="black"
                fontSize="10px"
                fontFamily="LiberationSans"
                y={yPosition}
                x="210.584" // Adjusted x position for better alignment
              >
                {education.degree} 
              </text>
              <text
                fill="#2f71a0"
                fontSize="10px"
                fontFamily="LiberationSans"
                y={yPosition + 13}
                x="210.584"
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
      <svg y="229" x="210.584" id="employment"></svg>
      <text
        fontWeight="bold"
        fill="#2f71a0"
        fontSize="15px"
        fontFamily="LiberationSans"
        y="244.1875"
        x="210.584"
      >
        Employment
      </text>
      <path
        fill="#e2e2e2"
        d="M 210.584,253.625 L 565.28,253.625 C 565.28,253.625,565.28,253.625,565.28,253.625 L 565.28,254.125 C 565.28,254.125,565.28,254.125,565.28,254.125 L 210.584,254.125 C 210.584,254.125,210.584,254.125,210.584,254.125 L 210.584,253.625 C 210.584,253.625,210.584,253.625,210.584,253.625 Z"
      ></path>
      {formData.experience && formData.experience.length > 0 ? (
        formData.experience.map((experience, index) => {
          const yPosition = 279.25 + index * 35;
          return (
            <React.Fragment key={experience.id}>
              <text
                fontWeight="bold"
                fill="#2f71a0"
                fontSize="10px"
                fontFamily="LiberationSans"
                y={yPosition + 7.5}
                x="464" // Adjusted x position for better alignment
              >
                {experience.startDate} - {experience.endDate}
              </text>
              <text
                fontWeight="bold"
                fill="black"
                fontSize="10px"
                fontFamily="LiberationSans"
                y={yPosition}
                x="210.584" // Adjusted x position for better alignment
              >
                {experience.position} 
              </text>
              <text
                fill="#2f71a0"
                fontSize="10px"
                fontFamily="LiberationSans"
                y={yPosition + 13}
                x="210.584"
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
      <svg y="349.125" x="210.584" id="skills"></svg>
      <text
        fontWeight="bold"
        fill="#2f71a0"
        fontSize="15px"
        fontFamily="LiberationSans"
        y="364.3125"
        x="210.584"
      >
        Skills
      </text>
      <path
        fill="#e2e2e2"
        d="M 210.584,373.75 L 565.28,373.75 C 565.28,373.75,565.28,373.75,565.28,373.75 L 565.28,374.25 C 565.28,374.25,565.28,374.25,565.28,374.25 L 210.584,374.25 C 210.584,374.25,210.584,374.25,210.584,374.25 L 210.584,373.75 C 210.584,373.75,210.584,373.75,210.584,373.75 Z"
      ></path>
      {formData.skills.map((skill, index) => (
        <text
          key={index}
          fontWeight="bold"
          fill="black"
          fontSize="10px"
          fontFamily="LiberationSans"
          y={399.375 + index * 20}
          x="210.584"
        >
          {skill.skill}
        </text>
      ))}
      <svg y="441.75" x="210.584" id="courses"></svg>
      <text
        fontWeight="bold"
        fill="#2f71a0"
        fontSize="15px"
        fontFamily="LiberationSans"
        y="456.9375"
        x="210.584"
      >
        Courses
      </text>
      <path
        fill="#e2e2e2"
        d="M 210.584,466.375 L 565.28,466.375 C 565.28,466.375,565.28,466.375,565.28,466.375 L 565.28,466.875 C 565.28,466.875,565.28,466.875,565.28,466.875 L 210.584,466.875 C 210.584,466.875,210.584,466.875,210.584,466.875 L 210.584,466.375 C 210.584,466.375,210.584,466.375,210.584,466.375 Z"
      ></path>
      {formData.courses && formData.courses.length > 0 ? (
        formData.courses.map((courses, index) => {
          const yPosition = 492 + index * 20;
          return (
            <React.Fragment key={courses.id}>
              <text
                fontWeight="bold"
                fill="#2f71a0"
                fontSize="10px"
                fontFamily="LiberationSans"
                y={yPosition}
                x="464" // Adjusted x position for better alignment
              >
                {courses.startDate} - {courses.endDate}
              </text>
              <text
                fontWeight="bold"
                fill="black"
                fontSize="10px"
                fontFamily="LiberationSans"
                y={yPosition}
                x="210.584" // Adjusted x position for better alignment
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
      <svg y="534.375" x="210.584" id="achievements"></svg>
      <text
        fontWeight="bold"
        fill="#2f71a0"
        fontSize="15px"
        fontFamily="LiberationSans"
        y="549.5625"
        x="210.584"
      >
        Achievements
      </text>
      <path
        fill="#e2e2e2"
        d="M 210.584,559 L 565.28,559 C 565.28,559,565.28,559,565.28,559 L 565.28,559.5 C 565.28,559.5,565.28,559.5,565.28,559.5 L 210.584,559.5 C 210.584,559.5,210.584,559.5,210.584,559.5 L 210.584,559 C 210.584,559,210.584,559,210.584,559 Z"
      ></path>
      {formData.achievements && formData.achievements.length > 0 ? (
        formData.achievements.map((achievement, index) => {
          const yPosition = 584.625 + index * 20;
          return (
            <>
              <text
                key={achievement.id}
                fill="black"
                fontSize="10px"
                fontFamily="LiberationSans"
                y={yPosition}
                x="210.584"
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
      {/* Footer */}
      {formData.footer && (
        <text
          fill="black"
          fontSize="8px"
          fontFamily="LiberationSans"
          y="777.99"
          x="210.584"
        >
          {formData.footer}
        </text>
      )}
    </svg>
  );
};

export default DynamicSVG_09;
