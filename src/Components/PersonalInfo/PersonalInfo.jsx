// PersonalInfo.jsx
import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { collapser, expander } from "../../utils/animation";
import { useAnimation } from "framer-motion";
import { Info } from "../../Context/Context";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const PersonalInfo = ({ toogleElement, setToggleElement }) => {
  const personalInfoWrapper = useAnimation();
  const { formData, setFormData } = useContext(Info);

  useEffect(() => {
    console.log("Updated formData:", formData);
  }, [formData]);

  const handlePersonalInfoChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value,
      },
    }));
  };

  return (
    <section className="pb-5.5 border-b border-gray-200">
      <div className="pt-5.5 flex justify-between items-center">
        <p className="text-xl truncate text-gray-800 font-bold select-none">
          Personal Information
        </p>
        <span
          onClick={() => {
            console.log("Saving Data:", formData.personalInfo);
            toogleElement.personalInfo
              ? collapser(personalInfoWrapper)
              : expander(personalInfoWrapper);
            setToggleElement((prev) => ({
              ...prev,
              personalInfo: !prev.personalInfo,
            }));
          }}
          className="rounded border border-gray-400 p-0.25"
        >
          {toogleElement.personalInfo ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              className="pointer-events-none flex-shrink-0 box-content h-6 w-6"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M480-542.463 317.076-379.539q-8.307 8.308-20.884 8.5t-21.268-8.5q-8.693-8.692-8.693-21.076t8.693-21.077l179.769-179.769q5.615-5.615 11.846-7.923T480-611.691t13.461 2.307q6.231 2.308 11.846 7.923l179.769 179.769q8.308 8.308 8.5 20.884t-8.5 21.269T664-370.847t-21.076-8.692z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              className="pointer-events-none flex-shrink-0 box-content h-6 w-6 text-gray-700"
            >
              <path
                fill="currentColor"
                d="M480-373.539q-7.231 0-13.461-2.308t-11.846-7.923L274.924-563.539q-8.308-8.307-8.5-20.884t8.5-21.269T296-614.384t21.076 8.692L480-442.768l162.924-162.924q8.307-8.307 20.884-8.5t21.268 8.5q8.693 8.692 8.693 21.077 0 12.384-8.693 21.076L505.307-383.77q-5.615 5.615-11.846 7.923T480-373.539"
              ></path>
            </svg>
          )}
        </span>
      </div>
      <motion.section
        initial={{ height: 0, visibility: "none" }}
        animate={personalInfoWrapper}
        className="overflow-hidden"
      >
        <div className="border p-4 my-5.5 rounded">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
            {/* First Name */}
            <div>
              <label className="block text-sm font-medium">First Name</label>
              <input
                type="text"
                value={formData.personalInfo?.givenName || ""}
                onChange={(e) =>
                  handlePersonalInfoChange("givenName", e.target.value)
                }
                className="border p-2 w-full rounded"
              />
            </div>
            {/* Last Name */}
            <div>
              <label className="block text-sm font-medium">Last Name</label>
              <input
                type="text"
                value={formData.personalInfo?.familyName || ""}
                onChange={(e) =>
                  handlePersonalInfoChange("familyName", e.target.value)
                }
                className="border p-2 w-full rounded"
              />
            </div>
            {/* Email */}
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                value={formData.personalInfo?.email || ""}
                onChange={(e) =>
                  handlePersonalInfoChange("email", e.target.value)
                }
                className="border p-2 w-full rounded"
              />
            </div>
            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium">Phone Number</label>
              <PhoneInput
                international
                countryCallingCodeEditable={false}
                defaultCountry="IN"
                value={formData.personalInfo?.phoneNumber || ""}
                onChange={(value) =>
                  handlePersonalInfoChange("phoneNumber", value)
                }
                className="border p-2 w-full rounded"
              />
            </div>
            {/* Address */}
            <div>
              <label className="block text-sm font-medium">Address</label>
              <input
                type="text"
                value={formData.personalInfo?.address || ""}
                onChange={(e) =>
                  handlePersonalInfoChange("address", e.target.value)
                }
                className="border p-2 w-full rounded"
              />
            </div>
            {/* Postal Code */}
            <div>
              <label className="block text-sm font-medium">Postal Code</label>
              <input
                type="text"
                value={formData.personalInfo?.postCode || ""}
                onChange={(e) =>
                  handlePersonalInfoChange("postCode", e.target.value)
                }
                className="border p-2 w-full rounded"
              />
            </div>
            {/* City */}
            <div>
              <label className="block text-sm font-medium">City</label>
              <input
                type="text"
                value={formData.personalInfo?.city || ""}
                onChange={(e) =>
                  handlePersonalInfoChange("city", e.target.value)
                }
                className="border p-2 w-full rounded"
              />
            </div>
            {/* Date of Birth */}
            <div>
              <label className="block text-sm font-medium">Date of Birth</label>
              <input
                type="date"
                value={formData.personalInfo?.dob || ""}
                onChange={(e) =>
                  handlePersonalInfoChange("dob", e.target.value)
                }
                className="border p-2 w-full rounded"
              />
            </div>
            {/* Place of Birth */}
            <div>
              <label className="block text-sm font-medium">
                Place of Birth
              </label>
              <input
                type="text"
                value={formData.personalInfo?.placeOfBirth || ""}
                onChange={(e) =>
                  handlePersonalInfoChange("placeOfBirth", e.target.value)
                }
                className="border p-2 w-full rounded"
              />
            </div>
            {/* Driver's License */}
            <div>
              <label className="block text-sm font-medium">
                Driver's License
              </label>
              <input
                type="text"
                value={formData.personalInfo?.driverLicense || ""}
                onChange={(e) =>
                  handlePersonalInfoChange("driverLicense", e.target.value)
                }
                className="border p-2 w-full rounded"
              />
            </div>

            {/* Gender */}
            <div className="col-span-full">
              <label className="block text-sm font-medium">Gender</label>
              <div className="relative w-full">
                <select
                  value={formData.personalInfo?.gender || ""}
                  onChange={(e) =>
                    handlePersonalInfoChange("gender", e.target.value)
                  }
                  className="border p-2 w-full rounded appearance-none bg-white"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-800"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            {/* Nationality */}
            <div className="col-span-full">
              <label className="block text-sm font-medium">Nationality</label>
              <input
                type="text"
                value={formData.personalInfo?.nationality || ""}
                onChange={(e) =>
                  handlePersonalInfoChange("nationality", e.target.value)
                }
                className="border p-2 w-full rounded"
              />
            </div>
            {/* Marital Status */}
            <div className="col-span-full">
              <label className="block text-sm font-medium">
                Marital Status
              </label>
              <div className="relative w-full">
                <select
                  value={formData.personalInfo?.civilStatus || ""}
                  onChange={(e) =>
                    handlePersonalInfoChange("civilStatus", e.target.value)
                  }
                  className="border p-2 w-full rounded appearance-none bg-white"
                >
                  <option value="">Select Marital Status</option>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                  <option value="divorced">Divorced</option>
                  <option value="widowed">Widowed</option>
                </select>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-700"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            {/* Linkedin */}
            <div className="col-span-full">
              <label className="block text-sm font-medium">Linkedin</label>
              <input
                type="text"
                value={formData.personalInfo?.linkedin || ""}
                onChange={(e) =>
                  handlePersonalInfoChange("linkedin", e.target.value)
                }
                className="border p-2 w-full rounded"
              />
            </div>
            {/* Website */}
            <div className="col-span-full">
              <label className="block text-sm font-medium">Website</label>
              <input
                type="text"
                value={formData.personalInfo?.website || ""}
                onChange={(e) =>
                  handlePersonalInfoChange("website", e.target.value)
                }
                className="border p-2 w-full rounded"
              />
            </div>
          </div>
        </div>
      </motion.section>
    </section>
  );
};

export default PersonalInfo;
