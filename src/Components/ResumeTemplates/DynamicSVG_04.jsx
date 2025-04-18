import React, { useContext } from "react";
import { Info } from "../../Context/Context";

const DynamicSVG_04 = () => {
  const { formData } = useContext(Info);
  return (
    <svg
      id="04"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 595.28 841.89"
      className="document-preview"
    >
      <rect fill="white" height="100%" width="100%"></rect>
      <path
        fill="#6faa8a"
        d="M 25,0 L 188.584,0 C 188.584,0,188.584,0,188.584,0 L 188.584,40 C 188.584,40,188.584,40,188.584,40 L 25,40 C 25,40,25,40,25,40 L 25,0 C 25,0,25,0,25,0 Z"
      ></path>
      <path
        fill="#b7d4c4"
        d="M 25,40 L 188.584,40 C 188.584,40,188.584,40,188.584,40 L 188.584,45 C 188.584,45,188.584,45,188.584,45 L 25,45 C 25,45,25,45,25,45 L 25,40 C 25,40,25,40,25,40 Z"
      ></path>
      <text
        fontWeight="bold"
        fill="black"
        fontSize="25px"
        fontFamily="LiberationSans"
        y="75.3125"
        x="25"
      >
        {formData.personalInfo.givenName} {formData.personalInfo.familyName}
      </text>
      <path
        fill="#6faa8a"
        d="M 25,89.375 L 188.584,89.375 C 188.584,89.375,188.584,89.375,188.584,89.375 L 188.584,841.89 C 188.584,841.89,188.584,841.89,188.584,841.89 L 25,841.89 C 25,841.89,25,841.89,25,841.89 L 25,89.375 C 25,89.375,25,89.375,25,89.375 Z"
      ></path>
      <svg y="104.375" x="35" id="personalDetails"></svg>
      <text
        fill="#d3e5db"
        fontSize="15px"
        fontFamily="LiberationSans"
        y="118.7375"
        x="35"
      >
        Personal&nbsp;
      </text>
      <text
        fill="#d3e5db"
        fontSize="15px"
        fontFamily="LiberationSans"
        y="118.7375"
        x="98.369140625"
      >
        details
      </text>
      <path
        fill="#b7d4c4"
        d="M 35,127.35 L 178.584,127.35 C 178.584,127.35,178.584,127.35,178.584,127.35 L 178.584,127.85 C 178.584,127.85,178.584,127.85,178.584,127.85 L 35,127.85 C 35,127.85,35,127.85,35,127.85 L 35,127.35 C 35,127.35,35,127.35,35,127.35 Z"
      ></path>
      <svg y="137.85" x="35"></svg>
      <text
        fontWeight="bold"
        fill="white"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="147.42499999999998"
        x="35"
      >
        Email
      </text>
      <text
        fill="white"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="160.075"
        x="35"
      >
        {formData.personalInfo.email}
      </text>
      <svg y="173.15" x="35" id="emailaddress"></svg>
      <text
        fontWeight="bold"
        fill="white"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="182.725"
        x="35"
      >
        Phone number
      </text>
      <text
        fill="white"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="195.375"
        x="35"
      >
        {formData.personalInfo.phoneNumber}
      </text>
      <svg y="208.45000000000002" x="35" id="phonenumber"></svg>
      <text
        fontWeight="bold"
        fill="white"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="218.025"
        x="35"
      >
        Address
      </text>
      <text
        fill="white"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="230.675"
        x="35"
      >
        {(() => {
          const words = formData.personalInfo.address.split(" ");
          const lines = [];

          for (let i = 0; i < words.length; i += 4) {
            const lineWords = words.slice(i, i + 4);
            lines.push(lineWords.join(" "));
          }

          return lines.map((line, lineIndex) => (
            <tspan key={lineIndex} x="35" dy={lineIndex === 0 ? "0" : "1.2em"}>
              {line}
            </tspan>
          ));
        })()}
      </text>
      <svg y="243.75000000000003" x="35" id="address"></svg>
      <text
        fontWeight="bold"
        fill="white"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="265.32500000000002"
        x="35"
      >
        Date of birth
      </text>
      <text
        fill="white"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="279.975"
        x="35"
      >
        {formData.personalInfo.dob}
      </text>
      <svg y="339.6499999999999" x="35" id="placeOfBirth"></svg>
      <text
        fontWeight="bold"
        fill="white"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="302.2249999999999"
        x="35"
      >
        Place&nbsp;
      </text>
      <text
        fontWeight="bold"
        fill="white"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="302.2249999999999"
        x="63.9111328125"
      >
        of&nbsp;
      </text>
      <text
        fontWeight="bold"
        fill="white"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="302.2249999999999"
        x="76.1279296875"
      >
        birth
      </text>
      <text
        fill="white"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="314.8749999999999"
        x="35"
      >
        {formData.personalInfo.placeOfBirth}
      </text>
      <svg y="374.9499999999999" x="35" id="driversLicense"></svg>
      <text
        fontWeight="bold"
        fill="white"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="335.52499999999986"
        x="35"
      >
        Driver's&nbsp;
      </text>
      <text
        fontWeight="bold"
        fill="white"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="335.52499999999986"
        x="74.6240234375"
      >
        license
      </text>
      <text
        fill="white"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="348.17499999999984"
        x="35"
      >
        {formData.personalInfo.driverLicense}
      </text>
      <svg y="410.24999999999983" x="35" id="gender"></svg>
      <text
        fontWeight="bold"
        fill="white"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="370.8249999999998"
        x="35"
      >
        Gender
      </text>
      <text
        fill="white"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="385.4749999999998"
        x="35"
      >
        {formData.personalInfo.gender}
      </text>
      <svg y="445.5499999999998" x="35" id="nationality"></svg>
      <text
        fontWeight="bold"
        fill="white"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="405.1249999999998"
        x="35"
      >
        Nationality
      </text>
      <text
        fill="white"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="420.77499999999975"
        x="35"
      >
        {formData.personalInfo.nationality}
      </text>
      <svg y="480.84999999999974" x="35" id="civilStatus"></svg>
      <text
        fontWeight="bold"
        fill="white"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="445.4249999999997"
        x="35"
      >
        Civil&nbsp;
      </text>
      <text
        fontWeight="bold"
        fill="white"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="445.4249999999997"
        x="58.896484375"
      >
        status
      </text>
      <text
        fill="white"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="462.0749999999997"
        x="35"
      >
        {formData.personalInfo.civilStatus}
      </text>
      <svg y="516.1499999999996" x="35" id="website"></svg>
      <text
        fontWeight="bold"
        fill="white"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="483.7249999999997"
        x="35"
      >
        Website
      </text>
      <text
        fill="white"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="498.3749999999997"
        x="35"
      >
        {formData.personalInfo.website}
      </text>
      <svg y="551.4499999999996" x="35" id="linkedin"></svg>
      <text
        fontWeight="bold"
        fill="white"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="520.0249999999996"
        x="35"
      >
        LinkedIn
      </text>
      <text
        fill="white"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="535.6749999999996"
        x="35"
      >
        {formData.personalInfo.linkedin}
      </text>
      <svg y="591.7499999999995" x="35" id="skills"></svg>
      <text
        fill="#d3e5db"
        fontSize="15px"
        fontFamily="LiberationSans"
        y="606.1124999999995"
        x="35"
      >
        Skills
      </text>
      <path
        fill="#b7d4c4"
        d="M 35,614.7249999999996 L 178.584,614.7249999999996 C 178.584,614.7249999999996,178.584,614.7249999999996,178.584,614.7249999999996 L 178.584,615.2249999999996 C 178.584,615.2249999999996,178.584,615.2249999999996,178.584,615.2249999999996 L 35,615.2249999999996 C 35,615.2249999999996,35,615.2249999999996,35,615.2249999999996 L 35,614.7249999999996 C 35,614.7249999999996,35,614.7249999999996,35,614.7249999999996 Z"
      ></path>
      <svg
        y="625.2249999999996"
        x="35"
        id="27641995-aecc-4bae-90d5-107e366a9b26"
      ></svg>
      {formData.skills.map((skill, index) => (
        <text
          key={index}
          fill="white"
          fontSize="10px"
          fontFamily="LiberationSans"
          y={635 + index * 20}
          x="35"
        >
          {skill.skill}
        </text>
      ))}
      <svg y="675.5249999999995" x="35" id="languages"></svg>
      <text
        fill="#d3e5db"
        fontSize="15px"
        fontFamily="LiberationSans"
        y="689.8874999999995"
        x="35"
      >
        Languages
      </text>
      <path
        fill="#b7d4c4"
        d="M 35,698.4999999999995 L 178.584,698.4999999999995 C 178.584,698.4999999999995,178.584,698.4999999999995,178.584,698.4999999999995 L 178.584,698.9999999999995 C 178.584,698.9999999999995,178.584,698.9999999999995,178.584,698.9999999999995 L 35,698.9999999999995 C 35,698.9999999999995,35,698.9999999999995,35,698.9999999999995 L 35,698.4999999999995 C 35,698.4999999999995,35,698.4999999999995,35,698.4999999999995 Z"
      ></path>
      <svg
        y="708.9999999999995"
        x="35"
        id="2eb2bba4-3df1-48d7-a67d-cbc457b62f70"
      ></svg>
      {formData.languages.map((language, index) => (
        <text
          key={index}
          fill="white"
          fontSize="11px"
          fontFamily="LiberationSans"
          y={718 + index * 20}
          x="35"
        >
          {language.language}
        </text>
      ))}
      {/* Footer */}
      {formData.footer && (
        <text
          fill="gray"
          fontSize="8px"
          fontFamily="LiberationSans"
          y={804.31}
          x="203.584"
        >
          {formData.footer}
        </text>
      )}
      <svg y="104.375" x="203.584" id="educations"></svg>
      <text
        fontWeight="bold"
        fill="black"
        fontSize="15px"
        fontFamily="LiberationSans"
        y="118.7375"
        x="203.584"
      >
        Education
      </text>
      <path
        fill="#e2e2e2"
        d="M 203.584,127.35 L 570.28,127.35 C 570.28,127.35,570.28,127.35,570.28,127.35 L 570.28,127.85 C 570.28,127.85,570.28,127.85,570.28,127.85 L 203.584,127.85 C 203.584,127.85,203.584,127.85,203.584,127.85 L 203.584,127.35 C 203.584,127.35,203.584,127.35,203.584,127.35 Z"
      ></path>
      {formData.education && formData.education.length > 0 ? (
        formData.education.map((education, index) => {
          const yPosition = 150 + index * 33;
          return (
            <React.Fragment key={education.id}>
              <text
                fill="black"
                fontSize="10px"
                fontFamily="Poppins"
                fontWeight="bold"
                y={yPosition}
                x="203.584" // Adjusted x position for better alignment
              >
                {education.startDate} - {education.endDate}
              </text>
              <text
                fill="black"
                fontSize="10px"
                fontFamily="Poppins"
                fontWeight="bold"
                y={yPosition}
                x="331" // Adjusted x position for better alignment
              >
                {education.degree} 
              </text>
              <text
                fill="#58a18a"
                fontSize="11px"
                fontFamily="LiberationSans"
                y={yPosition + 13}
                x="331"
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
      <svg y="218.45000000000002" x="203.584" id="employment"></svg>
      <text
        fontWeight="bold"
        fill="black"
        fontSize="15px"
        fontFamily="LiberationSans"
        y="232.81250000000003"
        x="203.584"
      >
        Employment
      </text>
      <path
        fill="#e2e2e2"
        d="M 203.584,241.425 L 570.28,241.425 C 570.28,241.425,570.28,241.425,570.28,241.425 L 570.28,241.925 C 570.28,241.925,570.28,241.925,570.28,241.925 L 203.584,241.925 C 203.584,241.925,203.584,241.925,203.584,241.925 L 203.584,241.425 C 203.584,241.425,203.584,241.425,203.584,241.425 Z"
      ></path>
      {formData.experience && formData.experience.length > 0 ? (
        formData.experience.map((experience, index) => {
          const yPosition = 265 + index * 33;
          return (
            <React.Fragment key={experience.id}>
              <text
                fill="black"
                fontSize="10px"
                fontFamily="Poppins"
                fontWeight="bold"
                y={yPosition}
                x="203.584" // Adjusted x position for better alignment
              >
                {experience.startDate} - {experience.endDate}
              </text>
              <text
                fill="black"
                fontSize="10px"
                fontFamily="Poppins"
                fontWeight="bold"
                y={yPosition}
                x="331" // Adjusted x position for better alignment
              >
                {experience.position} 
              </text>
              <text
                fill="#58a18a"
                fontSize="11px"
                fontFamily="LiberationSans"
                y={yPosition + 13}
                x="331"
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
      <svg y="319.87499999999994" x="203.584" id="courses"></svg>
      <text
        fontWeight="bold"
        fill="black"
        fontSize="15px"
        fontFamily="LiberationSans"
        y="334.23749999999995"
        x="203.584"
      >
        Courses
      </text>
      <path
        fill="#e2e2e2"
        d="M 203.584,342.84999999999997 L 570.28,342.84999999999997 C 570.28,342.84999999999997,570.28,342.84999999999997,570.28,342.84999999999997 L 570.28,343.34999999999997 C 570.28,343.34999999999997,570.28,343.34999999999997,570.28,343.34999999999997 L 203.584,343.34999999999997 C 203.584,343.34999999999997,203.584,343.34999999999997,203.584,343.34999999999997 L 203.584,342.84999999999997 C 203.584,342.84999999999997,203.584,342.84999999999997,203.584,342.84999999999997 Z"
      ></path>
      {formData.courses && formData.courses.length > 0 ? (
        formData.courses.map((courses, index) => {
          const yPosition = 362 + index * 20;
          return (
            <React.Fragment key={courses.id}>
              <text
                fill="black"
                fontSize="10px"
                fontFamily="Poppins"
                fontWeight="bold"
                y={yPosition}
                x="203.584" // Adjusted x position for better alignment
              >
                {courses.startDate} - {courses.endDate}
              </text>
              <text
                fill="black"
                fontSize="10px"
                fontFamily="Poppins"
                fontWeight="bold"
                y={yPosition}
                x="331" // Adjusted x position for better alignment
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
      <svg y="408.6499999999999" x="203.584" id="achievements"></svg>
      <text
        fontWeight="bold"
        fill="black"
        fontSize="15px"
        fontFamily="LiberationSans"
        y="423.01249999999993"
        x="203.584"
      >
        Achievements
      </text>
      <path
        fill="#e2e2e2"
        d="M 203.584,431.62499999999994 L 570.28,431.62499999999994 C 570.28,431.62499999999994,570.28,431.62499999999994,570.28,431.62499999999994 L 570.28,432.12499999999994 C 570.28,432.12499999999994,570.28,432.12499999999994,570.28,432.12499999999994 L 203.584,432.12499999999994 C 203.584,432.12499999999994,203.584,432.12499999999994,203.584,432.12499999999994 L 203.584,431.62499999999994 C 203.584,431.62499999999994,203.584,431.62499999999994,203.584,431.62499999999994 Z"
      ></path>
      {formData.achievements && formData.achievements.length > 0 ? (
        formData.achievements.map((achievement, index) => {
          const yPosition = 450 + index * 20;
          return (
            <text
              key={achievement.id}
              fill="black"
              font-size="10px"
              font-family="Poppins"
              y={yPosition}
              x="203.584"
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

export default DynamicSVG_04;
