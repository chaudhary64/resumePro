import React, { useContext } from "react";
import { Info } from "../../Context/Context";

const DynamicSVG_05 = () => {
  const { formData } = useContext(Info);

  // In this resume template there is no languages, hobbies, courses, and footer

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 595.28 841.89"
      className="document-preview"
    >
      <rect fill="white" height="100%" width="100%"></rect>
      <path
        fill="#b69d96"
        d="M 40,0 L 115,0 C 115,0,115,0,115,0 L 115,75 C 115,75,115,75,115,75 L 40,75 C 40,75,40,75,40,75 L 40,0 C 40,0,40,0,40,0 Z"
      ></path>
      <text
        fill="white"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="70.125"
        x="58.8818359375"
      >
        Resume
      </text>
      <text
        fill="#b69d96"
        fontSize="25px"
        fontFamily="LiberationSans"
        y="75.3125"
        x="190"
      >
        {formData.personalInfo.givenName} {formData.personalInfo.familyName}
      </text>
      {/* Footer */}
      {formData.footer && (
        <text
          fill="gray"
          fontSize="8px"
          fontFamily="LiberationSans"
          y={824.31}
          x="40"
        >
          {formData.footer}
        </text>
      )}
      <svg y="104.375" x="40" id="personalDetails"></svg>
      <text
        fill="black"
        fontSize="15px"
        fontFamily="LiberationSans"
        y="129.5625"
        x="40"
      >
        Personal&nbsp;
      </text>
      <text
        fill="black"
        fontSize="15px"
        fontFamily="LiberationSans"
        y="129.5625"
        x="103.369140625"
      >
        details
      </text>
      <path
        fill="#d8d8d8"
        d="M 40,139 L 555.28,139 C 555.28,139,555.28,139,555.28,139 L 555.28,139.5 C 555.28,139.5,555.28,139.5,555.28,139.5 L 40,139.5 C 40,139.5,40,139.5,40,139.5 L 40,139 C 40,139,40,139,40,139 Z"
      ></path>
      <svg y="154.5" x="40"></svg>
      <text
        fontWeight="bold"
        fill="#b69d96"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="164.625"
        x="40"
      >
        Email address
      </text>
      <text
        fill="black"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="164.625"
        x="190"
      >
        {formData.personalInfo.email}
      </text>
      <svg y="178.25" x="40" id="emailaddress"></svg>
      <text
        fontWeight="bold"
        fill="#b69d96"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="188.375"
        x="40"
      >
        Phone number
      </text>
      <text
        fill="black"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="188.375"
        x="190"
      >
        {formData.personalInfo.phoneNumber}
      </text>
      <svg y="202" x="40" id="phonenumber"></svg>
      <text
        fontWeight="bold"
        fill="#b69d96"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="212.125"
        x="40"
      >
        Address
      </text>
      <text
        fill="black"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="212.125"
        x="190"
      >
        {formData.personalInfo.address}
      </text>
      <svg y="225.75" x="40" id="address"></svg>
      <text
        fontWeight="bold"
        fill="#b69d96"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="235.875"
        x="40"
      >
        Date of birth
      </text>
      <text
        fill="black"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="235.875"
        x="190"
      >
        {formData.personalInfo.dob}
      </text>
      <svg y="249.5" x="40" id="dateOfBirth"></svg>
      <text
        fontWeight="bold"
        fill="#b69d96"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="259.625"
        x="40"
      >
        Place of birth
      </text>
      <text
        fill="black"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="259.625"
        x="190"
      >
        {formData.personalInfo.placeOfBirth}
      </text>
      <svg y="273.25" x="40" id="placeOfBirth"></svg>
      <text
        fontWeight="bold"
        fill="#b69d96"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="283.375"
        x="40"
      >
        Driver license
      </text>
      <text
        fill="black"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="283.375"
        x="190"
      >
        {formData.personalInfo.driverLicense}
      </text>
      <svg y="297" x="40" id="driversLicense"></svg>
      <text
        fontWeight="bold"
        fill="#b69d96"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="307.125"
        x="40"
      >
        Gender
      </text>
      <text
        fill="black"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="307.125"
        x="190"
      >
        {formData.personalInfo.gender}
      </text>
      <svg y="320.75" x="40" id="gender"></svg>
      <text
        fontWeight="bold"
        fill="#b69d96"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="330.875"
        x="40"
      >
        Nationality
      </text>
      <text
        fill="black"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="330.875"
        x="190"
      >
        {formData.personalInfo.nationality}
      </text>
      <svg y="344.5" x="40" id="nationality"></svg>
      <text
        fontWeight="bold"
        fill="#b69d96"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="354.625"
        x="40"
      >
        Civil Status
      </text>
      <text
        fill="black"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="354.625"
        x="190"
      >
        {formData.personalInfo.civilStatus}
      </text>
      <svg y="368.25" x="40" id="civilStatus"></svg>
      <text
        fontWeight="bold"
        fill="#b69d96"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="378.375"
        x="40"
      >
        Website
      </text>
      <text
        fill="black"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="378.375"
        x="190"
      >
        {formData.personalInfo.website}
      </text>
      <svg y="392" x="40" id="website"></svg>
      <text
        fontWeight="bold"
        fill="#b69d96"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="402.125"
        x="40"
      >
        LinkedIn
      </text>
      <text
        fill="black"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="402.125"
        x="190"
      >
        {formData.personalInfo.linkedin}
      </text>
      <svg y="409.5" x="40" id="educations"></svg>
      <text
        fill="black"
        fontSize="15px"
        fontFamily="LiberationSans"
        y="434.6875"
        x="40"
      >
        Education
      </text>
      <line
        x1="40"
        y1="444.6875"
        x2="555.28"
        y2="444.6875"
        stroke="#d8d8d8"
        stroke-width="0.5"
      />
      {formData.education && formData.education.length > 0 ? (
        formData.education.map((education, index) => {
          const yPosition = 470 + index * 33;
          return (
            <React.Fragment key={education.id}>
              <text
                fill="black"
                fontSize="10px"
                fontFamily="Poppins"
                fontWeight="bold"
                y={yPosition}
                x="40" // Adjusted x position for better alignment
              >
                {education.startDate} - {education.endDate}
              </text>
              <text
                fill="black"
                fontSize="10px"
                fontFamily="Poppins"
                fontWeight="bold"
                y={yPosition}
                x="190" // Adjusted x position for better alignment
              >
                {education.degree} 
              </text>
              <text
                fill="#58a18a"
                fontSize="11px"
                fontFamily="LiberationSans"
                y={yPosition + 13}
                x="190"
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
      <svg y="564.625" x="40" id="employment"></svg>
      <text
        fill="black"
        fontSize="15px"
        fontFamily="LiberationSans"
        y="550.8125"
        x="40"
      >
        Employment
      </text>
      <line
        x1="40"
        y1="563"
        x2="555.28"
        y2="563"
        stroke="#d8d8d8"
        stroke-width="0.5"
      />

      {formData.experience && formData.experience.length > 0 ? (
        formData.experience.map((experience, index) => {
          const yPosition = 589 + index * 33;
          return (
            <React.Fragment key={experience.id}>
              <text
                fill="black"
                fontSize="10px"
                fontFamily="Poppins"
                fontWeight="bold"
                y={yPosition}
                x="40" // Adjusted x position for better alignment
              >
                {experience.startDate} - {experience.endDate}
              </text>
              <text
                fill="black"
                fontSize="10px"
                fontFamily="Poppins"
                fontWeight="bold"
                y={yPosition}
                x="190" // Adjusted x position for better alignment
              >
                {experience.position} 
              </text>
              <text
                fill="#58a18a"
                fontSize="11px"
                fontFamily="LiberationSans"
                y={yPosition + 13}
                x="190"
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

      <svg y="689.75" x="40" id="skills"></svg>
      <text
        fill="black"
        fontSize="15px"
        fontFamily="LiberationSans"
        y="666.9375"
        x="40"
      >
        Skills
      </text>
      <line
        x1="40"
        y1="678"
        x2="555.28"
        y2="678"
        stroke="#d8d8d8"
        stroke-width="0.5"
      />
      {formData.skills.map((skill, index) => (
        <text
          key={index}
          fill="black"
          fontSize="10px"
          fontFamily="LiberationSans"
          y="700"
          x={40 + (index / formData.skills.length) * 100}
        >
          {skill.skill}
        </text>
      ))}
      <svg y="689.75" x="40" id="skills"></svg>
      <text
        fill="black"
        fontSize="15px"
        fontFamily="LiberationSans"
        y="730.9375"
        x="40"
      >
        Achievements
      </text>
      <line
        x1="40"
        y1="743"
        x2="555.28"
        y2="743"
        stroke="#d8d8d8"
        stroke-width="0.5"
      />
      {formData.achievements && formData.achievements.length > 0 ? (
        formData.achievements.map((achievement, index) => {
          const yPosition = 760 + index * 20;
          return (
            <text
              key={achievement.id}
              fill="black"
              font-size="10px"
              font-family="Poppins"
              y={yPosition}
              x="40"
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

export default DynamicSVG_05;
