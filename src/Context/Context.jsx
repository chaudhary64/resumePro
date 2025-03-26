import React, { useState, createContext } from "react";

// Create the context
export const Info = createContext();

const Context = (props) => {
  const [formData, setFormData] = useState({
    personalInfo: {
      givenName: "",
      familyName: "",
      headline: "",
      email: "",
      phoneNumber: "",
      address: "",
      postCode: "",
      city: "",
      dob: "",
      placeOfBirth: "",
      driverLicence: "",
      gender: "",
      nationality: "",
      civilStatus: "",
      website: "",
      linkedin: "",
    },
    educationCounter: 0,
    education: [],
    employmentCounter: 0,
    employment: [],
    skillsCounter: 0,
    skills: [],
    languagesCounter: 0,
    languages: [],
    hobbiesCounter: 0,
    hobbies: [],
    coursesCounter: 0,
    courses: [],
    achievementsCounter: 0,
    achievements: [],
    
  });

  return (
    <Info.Provider value={{ formData, setFormData }}>
      {props.children}
    </Info.Provider>
  );
};

export default Context;
