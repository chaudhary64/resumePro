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

  const [userTemplates, setUserTemplates] = useState([]); // For storing user templates

  // Language dropdown states
  const [languages, setLanguages] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedLang, setSelectedLang] = useState("en");
  const [modalVisible, setModalVisible] = useState(false); // For controlling the visibility of the modal

  return (
    <Info.Provider
      value={{
        formData,
        setFormData,
        languages,
        setLanguages,
        search,
        setSearch,
        selectedLang,
        setSelectedLang,
        modalVisible,
        setModalVisible,
        userTemplates,
        setUserTemplates,
      }}
    >
      {props.children}
    </Info.Provider>
  );
};

export default Context;
