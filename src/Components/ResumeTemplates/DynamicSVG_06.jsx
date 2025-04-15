import React, { useContext } from "react";
import { Info } from "../../Context/Context";

const DynamicSVG_06 = () => {
  const { formData } = useContext(Info);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 595.28 841.89"
      className="document-preview"
    >
      <rect fill="white" height="100%" width="100%"></rect>
      <path
        fill="#EEF1F2"
        d="M 0,0 L 200,0 C 200,0,200,0,200,0 L 200,841.89 C 200,841.89,200,841.89,200,841.89 L 0,841.89 C 0,841.89,0,841.89,0,841.89 L 0,0 C 0,0,0,0,0,0 Z"
      ></path>
      <path
        fill="#395a86"
        d="M 0,0 L 200,0 C 200,0,200,0,200,0 L 200,55.625 C 200,55.625,200,55.625,200,55.625 L 0,55.625 C 0,55.625,0,55.625,0,55.625 L 0,0 C 0,0,0,0,0,0 Z"
      ></path>
      <text
        fontWeight="bold"
        fill="white"
        fontSize="15px"
        fontFamily="LiberationSans"
        y="45.1875"
        x="37.48046875"
      >
        {formData.personalInfo.givenName} {formData.personalInfo.familyName}
      </text>
      <path
        fill="#395a86"
        d="M 0,53.625 L 200,53.625 C 200,53.625,200,53.625,200,53.625 L 200,68.625 C 200,68.625,200,68.625,200,68.625 C 140,96.625,60,96.625,0,68.625 C 0,68.625,0,68.625,0,68.625 L 0,53.625 C 0,53.625,0,53.625,0,53.625 Z"
      ></path>
      <svg y="105.625" x="15" id="personalDetails"></svg>
      <text
        fill="#395a86"
        fontSize="18px"
        fontFamily="LiberationSans"
        y="123.85"
        x="15"
      >
        Personal&nbsp;
      </text>
      <text
        fill="#395a86"
        fontSize="18px"
        fontFamily="LiberationSans"
        y="123.85"
        x="91.04296875"
      >
        details
      </text>
      <path
        fill="#c8c8c8"
        d="M 15,134.375 L 185,134.375 C 185,134.375,185,134.375,185,134.375 L 185,134.875 C 185,134.875,185,134.875,185,134.875 L 15,134.875 C 15,134.875,15,134.875,15,134.875 L 15,134.375 C 15,134.375,15,134.375,15,134.375 Z"
      ></path>
      <svg y="144.875" x="15"></svg>
      <image
        imageRendering="optimizeSpeed"
        href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiMzOTVhODYiIHZpZXdCb3g9IjAgMCA0NDggNTEyIiB3aWR0aD0iNDQ4IiBoZWlnaHQ9IjUxMiI+PHBhdGggZD0iTTIyNCAyNTZjNzAuNyAwIDEyOC01Ny4zIDEyOC0xMjhTMjk0LjcgMCAyMjQgMCA5NiA1Ny4zIDk2IDEyOHM1Ny4zIDEyOCAxMjggMTI4em04OS42IDMyaC0xNi43Yy0yMi4yIDEwLjItNDYuOSAxNi03Mi45IDE2cy01MC42LTUuOC03Mi45LTE2aC0xNi43QzYwLjIgMjg4IDAgMzQ4LjIgMCA0MjIuNFY0NjRjMCAyNi41IDIxLjUgNDggNDggNDhoMzUyYzI2LjUgMCA0OC0yMS41IDQ4LTQ4di00MS42YzAtNzQuMi02MC4yLTEzNC40LTEzNC40LTEzNC40eiI+PC9wYXRoPjwvc3ZnPg=="
        height="15"
        width="13.125"
        y="144.875"
        x="15.9375"
      ></image>
      <text
        fill="black"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="155"
        x="39"
      >
        {formData.personalInfo.givenName} {formData.personalInfo.familyName}
      </text>
      <svg y="174.875" x="15" id="emailaddress"></svg>
      <image
        imageRendering="optimizeSpeed"
        href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiMzOTVhODYiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PHBhdGggZD0iTTUwMi4zIDE5MC44YzMuOS0zLjEgOS43LS4yIDkuNyA0LjdWNDAwYzAgMjYuNS0yMS41IDQ4LTQ4IDQ4SDQ4Yy0yNi41IDAtNDgtMjEuNS00OC00OFYxOTUuNmMwLTUgNS43LTcuOCA5LjctNC43IDIyLjQgMTcuNCA1Mi4xIDM5LjUgMTU0LjEgMTEzLjYgMjEuMSAxNS40IDU2LjcgNDcuOCA5Mi4yIDQ3LjYgMzUuNy4zIDcyLTMyLjggOTIuMy00Ny42IDEwMi03NC4xIDEzMS42LTk2LjMgMTU0LTExMy43ek0yNTYgMzIwYzIzLjIuNCA1Ni42LTI5LjIgNzMuNC00MS40IDEzMi43LTk2LjMgMTQyLjgtMTA0LjcgMTczLjQtMTI4LjcgNS44LTQuNSA5LjItMTEuNSA5LjItMTguOXYtMTljMC0yNi41LTIxLjUtNDgtNDgtNDhINDhDMjEuNSA2NCAwIDg1LjUgMCAxMTJ2MTljMCA3LjQgMy40IDE0LjMgOS4yIDE4LjkgMzAuNiAyMy45IDQwLjcgMzIuNCAxNzMuNCAxMjguNyAxNi44IDEyLjIgNTAuMiA0MS44IDczLjQgNDEuNHoiPjwvcGF0aD48L3N2Zz4="
        height="15"
        width="15"
        y="174.875"
        x="15"
      ></image>
      <text
        fill="black"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="185"
        x="39"
      >
        {formData.personalInfo.email}
      </text>
      <svg y="204.875" x="15" id="phonenumber"></svg>
      <image
        imageRendering="optimizeSpeed"
        href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiMzOTVhODYiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PHBhdGggZD0iTTQ5My40IDI0LjZsLTEwNC0yNGMtMTEuMy0yLjYtMjIuOSAzLjMtMjcuNSAxMy45bC00OCAxMTJjLTQuMiA5LjgtMS40IDIxLjMgNi45IDI4bDYwLjYgNDkuNmMtMzYgNzYuNy05OC45IDE0MC41LTE3Ny4yIDE3Ny4ybC00OS42LTYwLjZjLTYuOC04LjMtMTguMi0xMS4xLTI4LTYuOWwtMTEyIDQ4QzMuOSAzNjYuNS0yIDM3OC4xLjYgMzg5LjRsMjQgMTA0QzI3LjEgNTA0LjIgMzYuNyA1MTIgNDggNTEyYzI1Ni4xIDAgNDY0LTIwNy41IDQ2NC00NjQgMC0xMS4yLTcuNy0yMC45LTE4LjYtMjMuNHoiPjwvcGF0aD48L3N2Zz4="
        height="15"
        width="15"
        y="204.875"
        x="15"
      ></image>
      <text
        fill="black"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="215"
        x="39"
      >
        {formData.personalInfo.phoneNumber}
      </text>
      <svg y="234.875" x="15" id="address"></svg>
      <image
        imageRendering="optimizeSpeed"
        href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiMzOTVhODYiIHZpZXdCb3g9IjAgMCA1NzYgNTEyIiB3aWR0aD0iNTc2IiBoZWlnaHQ9IjUxMiI+PHBhdGggZD0iTTI4MC4zNyAxNDguMjZMOTYgMzAwLjExVjQ2NGExNiAxNiAwIDAgMCAxNiAxNmwxMTIuMDYtLjI5YTE2IDE2IDAgMCAwIDE1LjkyLTE2VjM2OGExNiAxNiAwIDAgMSAxNi0xNmg2NGExNiAxNiAwIDAgMSAxNiAxNnY5NS42NGExNiAxNiAwIDAgMCAxNiAxNi4wNUw0NjQgNDgwYTE2IDE2IDAgMCAwIDE2LTE2VjMwMEwyOTUuNjcgMTQ4LjI2YTEyLjE5IDEyLjE5IDAgMCAwLTE1LjMgMHpNNTcxLjYgMjUxLjQ3TDQ4OCAxODIuNTZWNDQuMDVhMTIgMTIgMCAwIDAtMTItMTJoLTU2YTEyIDEyIDAgMCAwLTEyIDEydjcyLjYxTDMxOC40NyA0M2E0OCA0OCAwIDAgMC02MSAwTDQuMzQgMjUxLjQ3YTEyIDEyIDAgMCAwLTEuNiAxNi45bDI1LjUgMzFBMTIgMTIgMCAwIDAgNDUuMTUgMzAxbDIzNS4yMi0xOTMuNzRhMTIuMTkgMTIuMTkgMCAwIDEgMTUuMyAwTDUzMC45IDMwMWExMiAxMiAwIDAgMCAxNi45LTEuNmwyNS41LTMxYTEyIDEyIDAgMCAwLTEuNy0xNi45M3oiPjwvcGF0aD48L3N2Zz4="
        height="15"
        width="16.875"
        y="234.875"
        x="14.0625"
      ></image>
      <text
        fill="black"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="245"
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
      <svg y="291.125" x="15" id="dateOfBirth"></svg>
      <image
        imageRendering="optimizeSpeed"
        href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiMzOTVhODYiIHZpZXdCb3g9IjAgMCA0NDggNTEyIiB3aWR0aD0iNDQ4IiBoZWlnaHQ9IjUxMiI+PHBhdGggZD0iTTAgNDY0YzAgMjYuNSAyMS41IDQ4IDQ4IDQ4aDM1MmMyNi41IDAgNDgtMjEuNSA0OC00OFYxOTJIMHYyNzJ6bTMyMC0xOTZjMC02LjYgNS40LTEyIDEyLTEyaDQwYzYuNiAwIDEyIDUuNCAxMiAxMnY0MGMwIDYuNi01LjQgMTItMTIgMTJoLTQwYy02LjYgMC0xMi01LjQtMTItMTJ2LTQwem0wIDEyOGMwLTYuNiA1LjQtMTIgMTItMTJoNDBjNi42IDAgMTIgNS40IDEyIDEydjQwYzAgNi42LTUuNCAxMi0xMiAxMmgtNDBjLTYuNiAwLTEyLTUuNC0xMi0xMnYtNDB6TTE5MiAyNjhjMC02LjYgNS40LTEyIDEyLTEyaDQwYzYuNiAwIDEyIDUuNCAxMiAxMnY0MGMwIDYuNi01LjQgMTItMTIgMTJoLTQwYy02LjYgMC0xMi01LjQtMTItMTJ2LTQwem0wIDEyOGMwLTYuNiA1LjQtMTIgMTItMTJoNDBjNi42IDAgMTIgNS40IDEyIDEydjQwYzAgNi42LTUuNCAxMi0xMiAxMmgtNDBjLTYuNiAwLTEyLTUuNC0xMi0xMnYtNDB6TTY0IDI2OGMwLTYuNiA1LjQtMTIgMTItMTJoNDBjNi42IDAgMTIgNS40IDEyIDEydjQwYzAgNi42LTUuNCAxMi0xMiAxMkg3NmMtNi42IDAtMTItNS40LTEyLTEydi00MHptMCAxMjhjMC02LjYgNS40LTEyIDEyLTEyaDQwYzYuNiAwIDEyIDUuNCAxMiAxMnY0MGMwIDYuNi01LjQgMTItMTIgMTJINzZjLTYuNiAwLTEyLTUuNC0xMi0xMnYtNDB6TTQwMCA2NGgtNDhWMTZjMC04LjgtNy4yLTE2LTE2LTE2aC0zMmMtOC44IDAtMTYgNy4yLTE2IDE2djQ4SDE2MFYxNmMwLTguOC03LjItMTYtMTYtMTZoLTMyYy04LjggMC0xNiA3LjItMTYgMTZ2NDhINDhDMjEuNSA2NCAwIDg1LjUgMCAxMTJ2NDhoNDQ4di00OGMwLTI2LjUtMjEuNS00OC00OC00OHoiPjwvcGF0aD48L3N2Zz4="
        height="15"
        width="13.125"
        y="291.125"
        x="15.9375"
      ></image>
      <text
        fill="black"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="301.25"
        x="39"
      >
        {formData.personalInfo.dob}
      </text>
      <svg y="321.125" x="15" id="placeOfBirth"></svg>
      <image
        imageRendering="optimizeSpeed"
        href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiMzOTVhODYiIHZpZXdCb3g9IjAgMCAzODQgNTEyIiB3aWR0aD0iMzg0IiBoZWlnaHQ9IjUxMiI+PHBhdGggZD0iTTE3Mi4yNjggNTAxLjY3QzI2Ljk3IDI5MS4wMzEgMCAyNjkuNDEzIDAgMTkyIDAgODUuOTYxIDg1Ljk2MSAwIDE5MiAwczE5MiA4NS45NjEgMTkyIDE5MmMwIDc3LjQxMy0yNi45NyA5OS4wMzEtMTcyLjI2OCAzMDkuNjctOS41MzUgMTMuNzc0LTI5LjkzIDEzLjc3My0zOS40NjQgMHpNMTkyIDI3MmM0NC4xODMgMCA4MC0zNS44MTcgODAtODBzLTM1LjgxNy04MC04MC04MC04MCAzNS44MTctODAgODAgMzUuODE3IDgwIDgwIDgweiI+PC9wYXRoPjwvc3ZnPg=="
        height="15"
        width="11.25"
        y="321.125"
        x="16.875"
      ></image>
      <text
        fill="black"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="331.25"
        x="39"
      >
        {formData.personalInfo.placeOfBirth}
      </text>
      <svg y="351.125" x="15" id="driversLicense"></svg>
      <image
        imageRendering="optimizeSpeed"
        href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiMzOTVhODYiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PHBhdGggZD0iTTQ5OS45OSAxNzZoLTU5Ljg3bC0xNi42NC00MS42QzQwNi4zOCA5MS42MyAzNjUuNTcgNjQgMzE5LjUgNjRoLTEyN2MtNDYuMDYgMC04Ni44OCAyNy42My0xMDMuOTkgNzAuNEw3MS44NyAxNzZIMTIuMDFDNC4yIDE3Ni0xLjUzIDE4My4zNC4zNyAxOTAuOTFsNiAyNEM3LjcgMjIwLjI1IDEyLjUgMjI0IDE4LjAxIDIyNGgyMC4wN0MyNC42NSAyMzUuNzMgMTYgMjUyLjc4IDE2IDI3MnY0OGMwIDE2LjEyIDYuMTYgMzAuNjcgMTYgNDEuOTNWNDE2YzAgMTcuNjcgMTQuMzMgMzIgMzIgMzJoMzJjMTcuNjcgMCAzMi0xNC4zMyAzMi0zMnYtMzJoMjU2djMyYzAgMTcuNjcgMTQuMzMgMzIgMzIgMzJoMzJjMTcuNjcgMCAzMi0xNC4zMyAzMi0zMnYtNTQuMDdjOS44NC0xMS4yNSAxNi0yNS44IDE2LTQxLjkzdi00OGMwLTE5LjIyLTguNjUtMzYuMjctMjIuMDctNDhINDk0YzUuNTEgMCAxMC4zMS0zLjc1IDExLjY0LTkuMDlsNi0yNGMxLjg5LTcuNTctMy44NC0xNC45MS0xMS42NS0xNC45MXptLTM1Mi4wNi0xNy44M2M3LjI5LTE4LjIyIDI0Ljk0LTMwLjE3IDQ0LjU3LTMwLjE3aDEyN2MxOS42MyAwIDM3LjI4IDExLjk1IDQ0LjU3IDMwLjE3TDM4NCAyMDhIMTI4bDE5LjkzLTQ5Ljgzek05NiAzMTkuOGMtMTkuMiAwLTMyLTEyLjc2LTMyLTMxLjlTNzYuOCAyNTYgOTYgMjU2czQ4IDI4LjcxIDQ4IDQ3Ljg1LTI4LjggMTUuOTUtNDggMTUuOTV6bTMyMCAwYy0xOS4yIDAtNDggMy4xOS00OC0xNS45NVMzOTYuOCAyNTYgNDE2IDI1NnMzMiAxMi43NiAzMiAzMS45LTEyLjggMzEuOS0zMiAzMS45eiI+PC9wYXRoPjwvc3ZnPg=="
        height="15"
        width="15"
        y="351.125"
        x="15"
      ></image>
      <text
        fill="black"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="361.25"
        x="39"
      >
        {formData.personalInfo.driverLicense}
      </text>
      <svg y="381.125" x="15" id="gender"></svg>
      <image
        imageRendering="optimizeSpeed"
        href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiMzOTVhODYiIHZpZXdCb3g9IjAgMCA1NzYgNTEyIiB3aWR0aD0iNTc2IiBoZWlnaHQ9IjUxMiI+PHBhdGggZD0iTTU2NCAwaC03OWMtMTAuNyAwLTE2IDEyLjktOC41IDIwLjVsMTYuOSAxNi45LTQ4LjcgNDguN0M0MjIuNSA3Mi4xIDM5Ni4yIDY0IDM2OCA2NGMtMzMuNyAwLTY0LjYgMTEuNi04OS4yIDMwLjkgMTQgMTYuNyAyNSAzNiAzMi4xIDU3LjEgMTQuNS0xNC44IDM0LjctMjQgNTcuMS0yNCA0NC4xIDAgODAgMzUuOSA4MCA4MHMtMzUuOSA4MC04MCA4MGMtMjIuMyAwLTQyLjYtOS4yLTU3LjEtMjQtNy4xIDIxLjEtMTggNDAuNC0zMi4xIDU3LjEgMjQuNSAxOS40IDU1LjUgMzAuOSA4OS4yIDMwLjkgNzkuNSAwIDE0NC02NC41IDE0NC0xNDQgMC0yOC4yLTguMS01NC41LTIyLjEtNzYuN2w0OC43LTQ4LjcgMTYuOSAxNi45YzIuNCAyLjQgNS40IDMuNSA4LjQgMy41IDYuMiAwIDEyLjEtNC44IDEyLjEtMTJWMTJjMC02LjYtNS40LTEyLTEyLTEyek0xNDQgNjRDNjQuNSA2NCAwIDEyOC41IDAgMjA4YzAgNjguNSA0Ny45IDEyNS45IDExMiAxNDAuNFY0MDBINzZjLTYuNiAwLTEyIDUuNC0xMiAxMnY0MGMwIDYuNiA1LjQgMTIgMTIgMTJoMzZ2MzZjMCA2LjYgNS40IDEyIDEyIDEyaDQwYzYuNiAwIDEyLTUuNCAxMi0xMnYtMzZoMzZjNi42IDAgMTItNS40IDEyLTEydi00MGMwLTYuNi01LjQtMTItMTItMTJoLTM2di01MS42YzY0LjEtMTQuNiAxMTItNzEuOSAxMTItMTQwLjQgMC03OS41LTY0LjUtMTQ0LTE0NC0xNDR6bTAgMjI0Yy00NC4xIDAtODAtMzUuOS04MC04MHMzNS45LTgwIDgwLTgwIDgwIDM1LjkgODAgODAtMzUuOSA4MC04MCA4MHoiPjwvcGF0aD48L3N2Zz4="
        height="15"
        width="16.875"
        y="381.125"
        x="14.0625"
      ></image>
      <text
        fill="black"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="391.25"
        x="39"
      >
        {formData.personalInfo.gender}
      </text>
      <svg y="411.125" x="15" id="nationality"></svg>
      <image
        imageRendering="optimizeSpeed"
        href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiMzOTVhODYiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PHBhdGggZD0iTTM0OS41NjUgOTguNzgzQzI5NS45NzggOTguNzgzIDI1MS43MjEgNjQgMTg0LjM0OCA2NGMtMjQuOTU1IDAtNDcuMzA5IDQuMzg0LTY4LjA0NSAxMi4wMTNhNTUuOTQ3IDU1Ljk0NyAwIDAgMCAzLjU4Ni0yMy41NjJDMTE4LjExNyAyNC4wMTUgOTQuODA2IDEuMjA2IDY2LjMzOC4wNDggMzQuMzQ1LTEuMjU0IDggMjQuMjk2IDggNTZjMCAxOS4wMjYgOS40OTcgMzUuODI1IDI0IDQ1Ljk0NVY0ODhjMCAxMy4yNTUgMTAuNzQ1IDI0IDI0IDI0aDE2YzEzLjI1NSAwIDI0LTEwLjc0NSAyNC0yNHYtOTQuNGMyOC4zMTEtMTIuMDY0IDYzLjU4Mi0yMi4xMjIgMTE0LjQzNS0yMi4xMjIgNTMuNTg4IDAgOTcuODQ0IDM0Ljc4MyAxNjUuMjE3IDM0Ljc4MyA0OC4xNjkgMCA4Ni42NjctMTYuMjk0IDEyMi41MDUtNDAuODU4QzUwNi44NCAzNTkuNDUyIDUxMiAzNDkuNTcxIDUxMiAzMzkuMDQ1di0yNDMuMWMwLTIzLjM5My0yNC4yNjktMzguODctNDUuNDg1LTI5LjAxNi0zNC4zMzggMTUuOTQ4LTc2LjQ1NCAzMS44NTQtMTE2Ljk1IDMxLjg1NHoiPjwvcGF0aD48L3N2Zz4="
        height="15"
        width="15"
        y="411.125"
        x="15"
      ></image>
      <text
        fill="black"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="421.25"
        x="39"
      >
        {formData.personalInfo.nationality}
      </text>
      <svg y="441.125" x="15" id="civilStatus"></svg>
      <image
        imageRendering="optimizeSpeed"
        href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiMzOTVhODYiIHZpZXdCb3g9IjAgMCA2NDAgNTEyIiB3aWR0aD0iNjQwIiBoZWlnaHQ9IjUxMiI+PHBhdGggZD0iTTE5MiAyNTZjNjEuOSAwIDExMi01MC4xIDExMi0xMTJTMjUzLjkgMzIgMTkyIDMyIDgwIDgyLjEgODAgMTQ0czUwLjEgMTEyIDExMiAxMTJ6bTc2LjggMzJoLTguM2MtMjAuOCAxMC00My45IDE2LTY4LjUgMTZzLTQ3LjYtNi02OC41LTE2aC04LjNDNTEuNiAyODggMCAzMzkuNiAwIDQwMy4yVjQzMmMwIDI2LjUgMjEuNSA0OCA0OCA0OGgyODhjMjYuNSAwIDQ4LTIxLjUgNDgtNDh2LTI4LjhjMC02My42LTUxLjYtMTE1LjItMTE1LjItMTE1LjJ6TTQ4MCAyNTZjNTMgMCA5Ni00MyA5Ni05NnMtNDMtOTYtOTYtOTYtOTYgNDMtOTYgOTYgNDMgOTYgOTYgOTZ6bTQ4IDMyaC0zLjhjLTEzLjkgNC44LTI4LjYgOC00NC4yIDhzLTMwLjMtMy4yLTQ0LjItOEg0MzJjLTIwLjQgMC0zOS4yIDUuOS01NS43IDE1LjQgMjQuNCAyNi4zIDM5LjcgNjEuMiAzOS43IDk5Ljh2MzguNGMwIDIuMi0uNSA0LjMtLjYgNi40SDU5MmMyNi41IDAgNDgtMjEuNSA0OC00OCAwLTYxLjktNTAuMS0xMTItMTEyLTExMnoiPjwvcGF0aD48L3N2Zz4="
        height="15"
        width="18.75"
        y="441.125"
        x="13.125"
      ></image>
      <text
        fill="black"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="451.25"
        x="39"
      >
        {formData.personalInfo.civilStatus}
      </text>
      <svg y="471.125" x="15" id="website"></svg>
      <image
        imageRendering="optimizeSpeed"
        href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiMzOTVhODYiIHZpZXdCb3g9IjAgMCA0OTYgNTEyIiB3aWR0aD0iNDk2IiBoZWlnaHQ9IjUxMiI+PHBhdGggZD0iTTMzNi41IDE2MEMzMjIgNzAuNyAyODcuOCA4IDI0OCA4cy03NCA2Mi43LTg4LjUgMTUyaDE3N3pNMTUyIDI1NmMwIDIyLjIgMS4yIDQzLjUgMy4zIDY0aDE4NS4zYzIuMS0yMC41IDMuMy00MS44IDMuMy02NHMtMS4yLTQzLjUtMy4zLTY0SDE1NS4zYy0yLjEgMjAuNS0zLjMgNDEuOC0zLjMgNjR6bTMyNC43LTk2Yy0yOC42LTY3LjktODYuNS0xMjAuNC0xNTgtMTQxLjYgMjQuNCAzMy44IDQxLjIgODQuNyA1MCAxNDEuNmgxMDh6TTE3Ny4yIDE4LjRDMTA1LjggMzkuNiA0Ny44IDkyLjEgMTkuMyAxNjBoMTA4YzguNy01Ni45IDI1LjUtMTA3LjggNDkuOS0xNDEuNnpNNDg3LjQgMTkySDM3Mi43YzIuMSAyMSAzLjMgNDIuNSAzLjMgNjRzLTEuMiA0My0zLjMgNjRoMTE0LjZjNS41LTIwLjUgOC42LTQxLjggOC42LTY0cy0zLjEtNDMuNS04LjUtNjR6TTEyMCAyNTZjMC0yMS41IDEuMi00MyAzLjMtNjRIOC42QzMuMiAyMTIuNSAwIDIzMy44IDAgMjU2czMuMiA0My41IDguNiA2NGgxMTQuNmMtMi0yMS0zLjItNDIuNS0zLjItNjR6bTM5LjUgOTZjMTQuNSA4OS4zIDQ4LjcgMTUyIDg4LjUgMTUyczc0LTYyLjcgODguNS0xNTJoLTE3N3ptMTU5LjMgMTQxLjZjNzEuNC0yMS4yIDEyOS40LTczLjcgMTU4LTE0MS42aC0xMDhjLTguOCA1Ni45LTI1LjYgMTA3LjgtNTAgMTQxLjZ6TTE5LjMgMzUyYzI4LjYgNjcuOSA4Ni41IDEyMC40IDE1OCAxNDEuNi0yNC40LTMzLjgtNDEuMi04NC43LTUwLTE0MS42aC0xMDh6Ij48L3BhdGg+PC9zdmc+"
        height="15"
        width="14.53125"
        y="471.125"
        x="15.234375"
      ></image>
      <text
        fill="black"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="481.25"
        x="39"
      >
        {formData.personalInfo.website}
      </text>
      <svg y="501.125" x="15" id="linkedin"></svg>
      <image
        imageRendering="optimizeSpeed"
        href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiMzOTVhODYiIHZpZXdCb3g9IjAgMCA0NDggNTEyIiB3aWR0aD0iNDQ4IiBoZWlnaHQ9IjUxMiI+PHBhdGggZD0iTTQxNiAzMkgzMS45QzE0LjMgMzIgMCA0Ni41IDAgNjQuM3YzODMuNEMwIDQ2NS41IDE0LjMgNDgwIDMxLjkgNDgwSDQxNmMxNy42IDAgMzItMTQuNSAzMi0zMi4zVjY0LjNjMC0xNy44LTE0LjQtMzIuMy0zMi0zMi4zek0xMzUuNCA0MTZINjlWMjAyLjJoNjYuNVY0MTZ6bS0zMy4yLTI0M2MtMjEuMyAwLTM4LjUtMTcuMy0zOC41LTM4LjVTODAuOSA5NiAxMDIuMiA5NmMyMS4yIDAgMzguNSAxNy4zIDM4LjUgMzguNSAwIDIxLjMtMTcuMiAzOC41LTM4LjUgMzguNXptMjgyLjEgMjQzaC02Ni40VjMxMmMwLTI0LjgtLjUtNTYuNy0zNC41LTU2LjctMzQuNiAwLTM5LjkgMjctMzkuOSA1NC45VjQxNmgtNjYuNFYyMDIuMmg2My43djI5LjJoLjljOC45LTE2LjggMzAuNi0zNC41IDYyLjktMzQuNSA2Ny4yIDAgNzkuNyA0NC4zIDc5LjcgMTAxLjlWNDE2eiI+PC9wYXRoPjwvc3ZnPg=="
        height="15"
        width="13.125"
        y="501.125"
        x="15.9375"
      ></image>
      <text
        fill="black"
        fontSize="10px"
        fontFamily="LiberationSans"
        y="511.25"
        x="39"
      >
        {formData.personalInfo.linkedin}
      </text>
      <svg y="541.125" x="15" id="skills"></svg>
      <text
        fill="#395a86"
        fontSize="18px"
        fontFamily="LiberationSans"
        y="559.35"
        x="15"
      >
        Skills
      </text>
      <path
        fill="#c8c8c8"
        d="M 15,569.875 L 185,569.875 C 185,569.875,185,569.875,185,569.875 L 185,570.375 C 185,570.375,185,570.375,185,570.375 L 15,570.375 C 15,570.375,15,570.375,15,570.375 L 15,569.875 C 15,569.875,15,569.875,15,569.875 Z"
      ></path>
      {formData.skills.map((skill, index) => (
        <text
          key={index}
          fill="black"
          fontSize="10px"
          fontFamily="LiberationSans"
          y={590.5 + index * 20}
          x="15"
        >
          {skill.skill}
        </text>
      ))}
      <svg y="637.875" x="15" id="languages"></svg>
      <text
        fill="#395a86"
        fontSize="18px"
        fontFamily="LiberationSans"
        y="656.1"
        x="15"
      >
        Languages
      </text>
      <path
        fill="#c8c8c8"
        d="M 15,666.625 L 185,666.625 C 185,666.625,185,666.625,185,666.625 L 185,667.125 C 185,667.125,185,667.125,185,667.125 L 15,667.125 C 15,667.125,15,667.125,15,667.125 L 15,666.625 C 15,666.625,15,666.625,15,666.625 Z"
      ></path>
      {formData.languages.map((language, index) => (
        <text
          key={index}
          fill="black"
          fontSize="10px"
          fontFamily="LiberationSans"
          y={687.25 + index * 20}
          x="15"
        >
          {language.language}
        </text>
      ))}
      <svg y="734.625" x="15" id="hobbies"></svg>
      <text
        fill="#395a86"
        fontSize="18px"
        fontFamily="LiberationSans"
        y="752.85"
        x="15"
      >
        Hobbies
      </text>
      <path
        fill="#c8c8c8"
        d="M 15,763.375 L 185,763.375 C 185,763.375,185,763.375,185,763.375 L 185,763.875 C 185,763.875,185,763.875,185,763.875 L 15,763.875 C 15,763.875,15,763.875,15,763.875 L 15,763.375 C 15,763.375,15,763.375,15,763.375 Z"
      ></path>
      {formData.hobbies.map((hobby, index) => (
        <text
          key={index}
          fill="black"
          fontSize="10px"
          fontFamily="LiberationSans"
          y={784 + index * 20}
          x="15"
        >
          {hobby.hobby}
        </text>
      ))}
      {/* Footer */}
      {formData.footer && (
        <text
          fill="black"
          fontSize="8px"
          fontFamily="LiberationSans"
          y="797.99"
          x="215"
        >
          {formData.footer}
        </text>
      )}
      <svg y="30" x="215" id="educations"></svg>
      <text
        fill="#395a86"
        fontSize="18px"
        fontFamily="LiberationSans"
        y="48.225"
        x="215"
      >
        Education
      </text>
      <path
        fill="#c8c8c8"
        d="M 215,58.75 L 580.28,58.75 C 580.28,58.75,580.28,58.75,580.28,58.75 L 580.28,59.25 C 580.28,59.25,580.28,59.25,580.28,59.25 L 215,59.25 C 215,59.25,215,59.25,215,59.25 L 215,58.75 C 215,58.75,215,58.75,215,58.75 Z"
      ></path>
      {formData.education && formData.education.length > 0 ? (
        formData.education.map((education, index) => {
          const yPosition = 88 + index * 33;
          return (
            <React.Fragment key={education.id}>
              <text
                fontWeight="bold"
                fill="#395a86"
                fontSize="10px"
                fontFamily="LiberationSans"
                y={yPosition + 7.5}
                x="480" // Adjusted x position for better alignment
              >
                {education.startDate} - {education.endDate}
              </text>
              <text
                fontWeight="bold"
                fill="black"
                fontSize="10px"
                fontFamily="LiberationSans"
                y={yPosition}
                x="215" // Adjusted x position for better alignment
              >
                {education.degree} 
              </text>
              <text
                fill="#395a86"
                fontSize="10px"
                fontFamily="LiberationSans"
                y={yPosition + 13}
                x="215"
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
      <svg y="154.25" x="215" id="employment"></svg>
      <text
        fill="#395a86"
        fontSize="18px"
        fontFamily="LiberationSans"
        y="172.475"
        x="215"
      >
        Employment
      </text>
      <path
        fill="#c8c8c8"
        d="M 215,183 L 580.28,183 C 580.28,183,580.28,183,580.28,183 L 580.28,183.5 C 580.28,183.5,580.28,183.5,580.28,183.5 L 215,183.5 C 215,183.5,215,183.5,215,183.5 L 215,183 C 215,183,215,183,215,183 Z"
      ></path>
      {formData.experience && formData.experience.length > 0 ? (
        formData.experience.map((experience, index) => {
          const yPosition = 210 + index * 33;
          return (
            <React.Fragment key={experience.id}>
              <text
                fontWeight="bold"
                fill="#395a86"
                fontSize="10px"
                fontFamily="LiberationSans"
                y={yPosition + 7.5}
                x="480" // Adjusted x position for better alignment
              >
                {experience.startDate} - {experience.endDate}
              </text>
              <text
                fontWeight="bold"
                fill="black"
                fontSize="10px"
                fontFamily="LiberationSans"
                y={yPosition}
                x="215" // Adjusted x position for better alignment
              >
                {experience.position} 
              </text>
              <text
                fill="#395a86"
                fontSize="10px"
                fontFamily="LiberationSans"
                y={yPosition + 13}
                x="215"
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
      <svg y="278.5" x="215" id="courses"></svg>
      <text
        fill="#395a86"
        fontSize="18px"
        fontFamily="LiberationSans"
        y="296.725"
        x="215"
      >
        Courses
      </text>
      <path
        fill="#c8c8c8"
        d="M 215,307.25 L 580.28,307.25 C 580.28,307.25,580.28,307.25,580.28,307.25 L 580.28,307.75 C 580.28,307.75,580.28,307.75,580.28,307.75 L 215,307.75 C 215,307.75,215,307.75,215,307.75 L 215,307.25 C 215,307.25,215,307.25,215,307.25 Z"
      ></path>
      {formData.courses && formData.courses.length > 0 ? (
        formData.courses.map((courses, index) => {
          const yPosition = 335 + index * 20;
          return (
            <React.Fragment key={courses.id}>
              <text
                fontWeight="bold"
                fill="#395a86"
                fontSize="10px"
                fontFamily="LiberationSans"
                y={yPosition}
                x="480" // Adjusted x position for better alignment
              >
                {courses.startDate} - {courses.endDate}
              </text>
              <text
                fontWeight="bold"
                fill="black"
                fontSize="10px"
                fontFamily="LiberationSans"
                y={yPosition}
                x="215" // Adjusted x position for better alignment
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
      <svg y="375.25" x="215" id="achievements"></svg>
      <text
        fill="#395a86"
        fontSize="18px"
        fontFamily="LiberationSans"
        y="393.475"
        x="215"
      >
        Achievements
      </text>
      <path
        fill="#c8c8c8"
        d="M 215,404 L 580.28,404 C 580.28,404,580.28,404,580.28,404 L 580.28,404.5 C 580.28,404.5,580.28,404.5,580.28,404.5 L 215,404.5 C 215,404.5,215,404.5,215,404.5 L 215,404 C 215,404,215,404,215,404 Z"
      ></path>
      {formData.achievements && formData.achievements.length > 0 ? (
        formData.achievements.map((achievement, index) => {
          const yPosition = 430 + index * 20;
          return (
            <text
              key={achievement.id}
              fill="black"
              fontSize="10px"
              fontFamily="LiberationSans"
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

export default DynamicSVG_06;
