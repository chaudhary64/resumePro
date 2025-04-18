import React, { useContext } from "react";
import { Info } from "../../Context/Context";

const DynamicSVG_03 = () => {
  const { formData } = useContext(Info);
  return (
    <svg
      id="03"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 595.28 841.89"
      className="document-preview"
    >
      <rect fill="white" height="100%" width="100%"></rect>
      <path
        fill="#f5f5f5"
        d="M 0,0 L 595.28,0 C 595.28,0,595.28,0,595.28,0 L 595.28,141.375 C 595.28,141.375,595.28,141.375,595.28,141.375 L 0,141.375 C 0,141.375,0,141.375,0,141.375 L 0,0 C 0,0,0,0,0,0 Z"
      ></path>
      <text
        fontWeight="bold"
        fill="#3e94e4"
        fontSize="25px"
        fontFamily="Montserrat"
        y="53.3125"
        x="20"
      >
        {formData.personalInfo.givenName} {formData.personalInfo.familyName}
      </text>
      <image
        imageRendering="optimizeSpeed"
        href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiMzZTk0ZTQiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PHBhdGggZD0iTTUwMi4zIDE5MC44YzMuOS0zLjEgOS43LS4yIDkuNyA0LjdWNDAwYzAgMjYuNS0yMS41IDQ4LTQ4IDQ4SDQ4Yy0yNi41IDAtNDgtMjEuNS00OC00OFYxOTUuNmMwLTUgNS43LTcuOCA5LjctNC43IDIyLjQgMTcuNCA1Mi4xIDM5LjUgMTU0LjEgMTEzLjYgMjEuMSAxNS40IDU2LjcgNDcuOCA5Mi4yIDQ3LjYgMzUuNy4zIDcyLTMyLjggOTIuMy00Ny42IDEwMi03NC4xIDEzMS42LTk2LjMgMTU0LTExMy43ek0yNTYgMzIwYzIzLjIuNCA1Ni42LTI5LjIgNzMuNC00MS40IDEzMi43LTk2LjMgMTQyLjgtMTA0LjcgMTczLjQtMTI4LjcgNS44LTQuNSA5LjItMTEuNSA5LjItMTguOXYtMTljMC0yNi41LTIxLjUtNDgtNDgtNDhINDhDMjEuNSA2NCAwIDg1LjUgMCAxMTJ2MTljMCA3LjQgMy40IDE0LjMgOS4yIDE4LjkgMzAuNiAyMy45IDQwLjcgMzIuNCAxNzMuNCAxMjguNyAxNi44IDEyLjIgNTAuMiA0MS44IDczLjQgNDEuNHoiPjwvcGF0aD48L3N2Zz4="
        height="10"
        width="10"
        y="71.375"
        x="20"
      ></image>
      <text
        fill="black"
        fontSize="10px"
        fontFamily="Montserrat"
        y="79.625"
        x="34"
      >
        {formData.personalInfo.email}
      </text>
      <image
        imageRendering="optimizeSpeed"
        href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiMzZTk0ZTQiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PHBhdGggZD0iTTQ5My40IDI0LjZsLTEwNC0yNGMtMTEuMy0yLjYtMjIuOSAzLjMtMjcuNSAxMy45bC00OCAxMTJjLTQuMiA5LjgtMS40IDIxLjMgNi45IDI4bDYwLjYgNDkuNmMtMzYgNzYuNy05OC45IDE0MC41LTE3Ny4yIDE3Ny4ybC00OS42LTYwLjZjLTYuOC04LjMtMTguMi0xMS4xLTI4LTYuOWwtMTEyIDQ4QzMuOSAzNjYuNS0yIDM3OC4xLjYgMzg5LjRsMjQgMTA0QzI3LjEgNTA0LjIgMzYuNyA1MTIgNDggNTEyYzI1Ni4xIDAgNDY0LTIwNy41IDQ2NC00NjQgMC0xMS4yLTcuNy0yMC45LTE4LjYtMjMuNHoiPjwvcGF0aD48L3N2Zz4="
        height="10"
        width="10"
        y="71.375"
        x="206.49"
      ></image>
      <text
        fill="black"
        fontSize="10px"
        fontFamily="Montserrat"
        y="79.625"
        x="220.49"
      >
        {formData.personalInfo.phoneNumber}
      </text>
      <image
        imageRendering="optimizeSpeed"
        href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiMzZTk0ZTQiIHZpZXdCb3g9IjAgMCA1NzYgNTEyIiB3aWR0aD0iNTc2IiBoZWlnaHQ9IjUxMiI+PHBhdGggZD0iTTI4MC4zNyAxNDguMjZMOTYgMzAwLjExVjQ2NGExNiAxNiAwIDAgMCAxNiAxNmwxMTIuMDYtLjI5YTE2IDE2IDAgMCAwIDE1LjkyLTE2VjM2OGExNiAxNiAwIDAgMSAxNi0xNmg2NGExNiAxNiAwIDAgMSAxNiAxNnY5NS42NGExNiAxNiAwIDAgMCAxNiAxNi4wNUw0NjQgNDgwYTE2IDE2IDAgMCAwIDE2LTE2VjMwMEwyOTUuNjcgMTQ4LjI2YTEyLjE5IDEyLjE5IDAgMCAwLTE1LjMgMHpNNTcxLjYgMjUxLjQ3TDQ4OCAxODIuNTZWNDQuMDVhMTIgMTIgMCAwIDAtMTItMTJoLTU2YTEyIDEyIDAgMCAwLTEyIDEydjcyLjYxTDMxOC40NyA0M2E0OCA0OCAwIDAgMC02MSAwTDQuMzQgMjUxLjQ3YTEyIDEyIDAgMCAwLTEuNiAxNi45bDI1LjUgMzFBMTIgMTIgMCAwIDAgNDUuMTUgMzAxbDIzNS4yMi0xOTMuNzRhMTIuMTkgMTIuMTkgMCAwIDEgMTUuMyAwTDUzMC45IDMwMWExMiAxMiAwIDAgMCAxNi45LTEuNmwyNS41LTMxYTEyIDEyIDAgMCAwLTEuNy0xNi45M3oiPjwvcGF0aD48L3N2Zz4="
        height="10"
        width="11.25"
        y="89.375"
        x="19.375"
      ></image>
      <text
        fill="black"
        fontSize="10px"
        fontFamily="Montserrat"
        y="97.625"
        x="34"
      >
        {formData.personalInfo.address}
      </text>
      <image
        imageRendering="optimizeSpeed"
        href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiMzZTk0ZTQiIHZpZXdCb3g9IjAgMCA0NDggNTEyIiB3aWR0aD0iNDQ4IiBoZWlnaHQ9IjUxMiI+PHBhdGggZD0iTTAgNDY0YzAgMjYuNSAyMS41IDQ4IDQ4IDQ4aDM1MmMyNi41IDAgNDgtMjEuNSA0OC00OFYxOTJIMHYyNzJ6bTMyMC0xOTZjMC02LjYgNS40LTEyIDEyLTEyaDQwYzYuNiAwIDEyIDUuNCAxMiAxMnY0MGMwIDYuNi01LjQgMTItMTIgMTJoLTQwYy02LjYgMC0xMi01LjQtMTItMTJ2LTQwem0wIDEyOGMwLTYuNiA1LjQtMTIgMTItMTJoNDBjNi42IDAgMTIgNS40IDEyIDEydjQwYzAgNi42LTUuNCAxMi0xMiAxMmgtNDBjLTYuNiAwLTEyLTUuNC0xMi0xMnYtNDB6TTE5MiAyNjhjMC02LjYgNS40LTEyIDEyLTEyaDQwYzYuNiAwIDEyIDUuNCAxMiAxMnY0MGMwIDYuNi01LjQgMTItMTIgMTJoLTQwYy02LjYgMC0xMi01LjQtMTItMTJ2LTQwem0wIDEyOGMwLTYuNiA1LjQtMTIgMTItMTJoNDBjNi42IDAgMTIgNS40IDEyIDEydjQwYzAgNi42LTUuNCAxMi0xMiAxMmgtNDBjLTYuNiAwLTEyLTUuNC0xMi0xMnYtNDB6TTY0IDI2OGMwLTYuNiA1LjQtMTIgMTItMTJoNDBjNi42IDAgMTIgNS40IDEyIDEydjQwYzAgNi42LTUuNCAxMi0xMiAxMkg3NmMtNi42IDAtMTItNS40LTEyLTEydi00MHptMCAxMjhjMC02LjYgNS40LTEyIDEyLTEyaDQwYzYuNiAwIDEyIDUuNCAxMiAxMnY0MGMwIDYuNi01LjQgMTItMTIgMTJINzZjLTYuNiAwLTEyLTUuNC0xMi0xMnYtNDB6TTQwMCA2NGgtNDhWMTZjMC04LjgtNy4yLTE2LTE2LTE2aC0zMmMtOC44IDAtMTYgNy4yLTE2IDE2djQ4SDE2MFYxNmMwLTguOC03LjItMTYtMTYtMTZoLTMyYy04LjggMC0xNiA3LjItMTYgMTZ2NDhINDhDMjEuNSA2NCAwIDg1LjUgMCAxMTJ2NDhoNDQ4di00OGMwLTI2LjUtMjEuNS00OC00OC00OHoiPjwvcGF0aD48L3N2Zz4="
        height="10"
        width="8.75"
        y="89.375"
        x="329.055"
      ></image>
      <text
        fill="black"
        fontSize="10px"
        fontFamily="Montserrat"
        y="97.625"
        x="342.43"
      >
        {formData.personalInfo.dob}
      </text>
      <image
        imageRendering="optimizeSpeed"
        href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiMzZTk0ZTQiIHZpZXdCb3g9IjAgMCAzODQgNTEyIiB3aWR0aD0iMzg0IiBoZWlnaHQ9IjUxMiI+PHBhdGggZD0iTTE3Mi4yNjggNTAxLjY3QzI2Ljk3IDI5MS4wMzEgMCAyNjkuNDEzIDAgMTkyIDAgODUuOTYxIDg1Ljk2MSAwIDE5MiAwczE5MiA4NS45NjEgMTkyIDE5MmMwIDc3LjQxMy0yNi45NyA5OS4wMzEtMTcyLjI2OCAzMDkuNjctOS41MzUgMTMuNzc0LTI5LjkzIDEzLjc3My0zOS40NjQgMHpNMTkyIDI3MmM0NC4xODMgMCA4MC0zNS44MTcgODAtODBzLTM1LjgxNy04MC04MC04MC04MCAzNS44MTctODAgODAgMzUuODE3IDgwIDgwIDgweiI+PC9wYXRoPjwvc3ZnPg=="
        height="10"
        width="7.5"
        y="89.375"
        x="414.63"
      ></image>
      <text
        fill="black"
        fontSize="10px"
        fontFamily="Montserrat"
        y="97.625"
        x="427.38"
      >
        {formData.personalInfo.placeOfBirth}
      </text>
      <image
        imageRendering="optimizeSpeed"
        href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiMzZTk0ZTQiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PHBhdGggZD0iTTQ5OS45OSAxNzZoLTU5Ljg3bC0xNi42NC00MS42QzQwNi4zOCA5MS42MyAzNjUuNTcgNjQgMzE5LjUgNjRoLTEyN2MtNDYuMDYgMC04Ni44OCAyNy42My0xMDMuOTkgNzAuNEw3MS44NyAxNzZIMTIuMDFDNC4yIDE3Ni0xLjUzIDE4My4zNC4zNyAxOTAuOTFsNiAyNEM3LjcgMjIwLjI1IDEyLjUgMjI0IDE4LjAxIDIyNGgyMC4wN0MyNC42NSAyMzUuNzMgMTYgMjUyLjc4IDE2IDI3MnY0OGMwIDE2LjEyIDYuMTYgMzAuNjcgMTYgNDEuOTNWNDE2YzAgMTcuNjcgMTQuMzMgMzIgMzIgMzJoMzJjMTcuNjcgMCAzMi0xNC4zMyAzMi0zMnYtMzJoMjU2djMyYzAgMTcuNjcgMTQuMzMgMzIgMzIgMzJoMzJjMTcuNjcgMCAzMi0xNC4zMyAzMi0zMnYtNTQuMDdjOS44NC0xMS4yNSAxNi0yNS44IDE2LTQxLjkzdi00OGMwLTE5LjIyLTguNjUtMzYuMjctMjIuMDctNDhINDk0YzUuNTEgMCAxMC4zMS0zLjc1IDExLjY0LTkuMDlsNi0yNGMxLjg5LTcuNTctMy44NC0xNC45MS0xMS42NS0xNC45MXptLTM1Mi4wNi0xNy44M2M3LjI5LTE4LjIyIDI0Ljk0LTMwLjE3IDQ0LjU3LTMwLjE3aDEyN2MxOS42MyAwIDM3LjI4IDExLjk1IDQ0LjU3IDMwLjE3TDM4NCAyMDhIMTI4bDE5LjkzLTQ5Ljgzek05NiAzMTkuOGMtMTkuMiAwLTMyLTEyLjc2LTMyLTMxLjlTNzYuOCAyNTYgOTYgMjU2czQ4IDI4LjcxIDQ4IDQ3Ljg1LTI4LjggMTUuOTUtNDggMTUuOTV6bTMyMCAwYy0xOS4yIDAtNDggMy4xOS00OC0xNS45NVMzOTYuOCAyNTYgNDE2IDI1NnMzMiAxMi43NiAzMiAzMS45LTEyLjggMzEuOS0zMiAzMS45eiI+PC9wYXRoPjwvc3ZnPg=="
        height="10"
        width="10"
        y="89.375"
        x="474.86"
      ></image>
      <text
        fill="black"
        fontSize="10px"
        fontFamily="Montserrat"
        y="97.625"
        x="488.86"
      >
        {formData.personalInfo.driverLicense}
      </text>
      <image
        imageRendering="optimizeSpeed"
        href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiMzZTk0ZTQiIHZpZXdCb3g9IjAgMCA1NzYgNTEyIiB3aWR0aD0iNTc2IiBoZWlnaHQ9IjUxMiI+PHBhdGggZD0iTTU2NCAwaC03OWMtMTAuNyAwLTE2IDEyLjktOC41IDIwLjVsMTYuOSAxNi45LTQ4LjcgNDguN0M0MjIuNSA3Mi4xIDM5Ni4yIDY0IDM2OCA2NGMtMzMuNyAwLTY0LjYgMTEuNi04OS4yIDMwLjkgMTQgMTYuNyAyNSAzNiAzMi4xIDU3LjEgMTQuNS0xNC44IDM0LjctMjQgNTcuMS0yNCA0NC4xIDAgODAgMzUuOSA4MCA4MHMtMzUuOSA4MC04MCA4MGMtMjIuMyAwLTQyLjYtOS4yLTU3LjEtMjQtNy4xIDIxLjEtMTggNDAuNC0zMi4xIDU3LjEgMjQuNSAxOS40IDU1LjUgMzAuOSA4OS4yIDMwLjkgNzkuNSAwIDE0NC02NC41IDE0NC0xNDQgMC0yOC4yLTguMS01NC41LTIyLjEtNzYuN2w0OC43LTQ4LjcgMTYuOSAxNi45YzIuNCAyLjQgNS40IDMuNSA4LjQgMy41IDYuMiAwIDEyLjEtNC44IDEyLjEtMTJWMTJjMC02LjYtNS40LTEyLTEyLTEyek0xNDQgNjRDNjQuNSA2NCAwIDEyOC41IDAgMjA4YzAgNjguNSA0Ny45IDEyNS45IDExMiAxNDAuNFY0MDBINzZjLTYuNiAwLTEyIDUuNC0xMiAxMnY0MGMwIDYuNiA1LjQgMTIgMTIgMTJoMzZ2MzZjMCA2LjYgNS40IDEyIDEyIDEyaDQwYzYuNiAwIDEyLTUuNCAxMi0xMnYtMzZoMzZjNi42IDAgMTItNS40IDEyLTEydi00MGMwLTYuNi01LjQtMTItMTItMTJoLTM2di01MS42YzY0LjEtMTQuNiAxMTItNzEuOSAxMTItMTQwLjQgMC03OS41LTY0LjUtMTQ0LTE0NC0xNDR6bTAgMjI0Yy00NC4xIDAtODAtMzUuOS04MC04MHMzNS45LTgwIDgwLTgwIDgwIDM1LjkgODAgODAtMzUuOSA4MC04MCA4MHoiPjwvcGF0aD48L3N2Zz4="
        height="10"
        width="11.25"
        y="107.375"
        x="19.375"
      ></image>
      <text
        fill="black"
        fontSize="10px"
        fontFamily="Montserrat"
        y="115.625"
        x="34"
      >
        {formData.personalInfo.gender}
      </text>
      <image
        imageRendering="optimizeSpeed"
        href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiMzZTk0ZTQiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PHBhdGggZD0iTTM0OS41NjUgOTguNzgzQzI5NS45NzggOTguNzgzIDI1MS43MjEgNjQgMTg0LjM0OCA2NGMtMjQuOTU1IDAtNDcuMzA5IDQuMzg0LTY4LjA0NSAxMi4wMTNhNTUuOTQ3IDU1Ljk0NyAwIDAgMCAzLjU4Ni0yMy41NjJDMTE4LjExNyAyNC4wMTUgOTQuODA2IDEuMjA2IDY2LjMzOC4wNDggMzQuMzQ1LTEuMjU0IDggMjQuMjk2IDggNTZjMCAxOS4wMjYgOS40OTcgMzUuODI1IDI0IDQ1Ljk0NVY0ODhjMCAxMy4yNTUgMTAuNzQ1IDI0IDI0IDI0aDE2YzEzLjI1NSAwIDI0LTEwLjc0NSAyNC0yNHYtOTQuNGMyOC4zMTEtMTIuMDY0IDYzLjU4Mi0yMi4xMjIgMTE0LjQzNS0yMi4xMjIgNTMuNTg4IDAgOTcuODQ0IDM0Ljc4MyAxNjUuMjE3IDM0Ljc4MyA0OC4xNjkgMCA4Ni42NjctMTYuMjk0IDEyMi41MDUtNDAuODU4QzUwNi44NCAzNTkuNDUyIDUxMiAzNDkuNTcxIDUxMiAzMzkuMDQ1di0yNDMuMWMwLTIzLjM5My0yNC4yNjktMzguODctNDUuNDg1LTI5LjAxNi0zNC4zMzggMTUuOTQ4LTc2LjQ1NCAzMS44NTQtMTE2Ljk1IDMxLjg1NHoiPjwvcGF0aD48L3N2Zz4="
        height="10"
        width="10"
        y="107.375"
        x="69.24000000000001"
      ></image>
      <text
        fill="black"
        fontSize="10px"
        fontFamily="Montserrat"
        y="115.625"
        x="83.24000000000001"
      >
        {formData.personalInfo.nationality}
      </text>
      <image
        imageRendering="optimizeSpeed"
        href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiMzZTk0ZTQiIHZpZXdCb3g9IjAgMCA2NDAgNTEyIiB3aWR0aD0iNjQwIiBoZWlnaHQ9IjUxMiI+PHBhdGggZD0iTTE5MiAyNTZjNjEuOSAwIDExMi01MC4xIDExMi0xMTJTMjUzLjkgMzIgMTkyIDMyIDgwIDgyLjEgODAgMTQ0czUwLjEgMTEyIDExMiAxMTJ6bTc2LjggMzJoLTguM2MtMjAuOCAxMC00My45IDE2LTY4LjUgMTZzLTQ3LjYtNi02OC41LTE2aC04LjNDNTEuNiAyODggMCAzMzkuNiAwIDQwMy4yVjQzMmMwIDI2LjUgMjEuNSA0OCA0OCA0OGgyODhjMjYuNSAwIDQ4LTIxLjUgNDgtNDh2LTI4LjhjMC02My42LTUxLjYtMTE1LjItMTE1LjItMTE1LjJ6TTQ4MCAyNTZjNTMgMCA5Ni00MyA5Ni05NnMtNDMtOTYtOTYtOTYtOTYgNDMtOTYgOTYgNDMgOTYgOTYgOTZ6bTQ4IDMyaC0zLjhjLTEzLjkgNC44LTI4LjYgOC00NC4yIDhzLTMwLjMtMy4yLTQ0LjItOEg0MzJjLTIwLjQgMC0zOS4yIDUuOS01NS43IDE1LjQgMjQuNCAyNi4zIDM5LjcgNjEuMiAzOS43IDk5Ljh2MzguNGMwIDIuMi0uNSA0LjMtLjYgNi40SDU5MmMyNi41IDAgNDgtMjEuNSA0OC00OCAwLTYxLjktNTAuMS0xMTItMTEyLTExMnoiPjwvcGF0aD48L3N2Zz4="
        height="10"
        width="12.5"
        y="107.375"
        x="123.57000000000001"
      ></image>
      <text
        fill="black"
        fontSize="10px"
        fontFamily="Montserrat"
        y="115.625"
        x="138.82"
      >
        {formData.civilStatus}
      </text>
      <image
        imageRendering="optimizeSpeed"
        href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiMzZTk0ZTQiIHZpZXdCb3g9IjAgMCA0OTYgNTEyIiB3aWR0aD0iNDk2IiBoZWlnaHQ9IjUxMiI+PHBhdGggZD0iTTMzNi41IDE2MEMzMjIgNzAuNyAyODcuOCA4IDI0OCA4cy03NCA2Mi43LTg4LjUgMTUyaDE3N3pNMTUyIDI1NmMwIDIyLjIgMS4yIDQzLjUgMy4zIDY0aDE4NS4zYzIuMS0yMC41IDMuMy00MS44IDMuMy02NHMtMS4yLTQzLjUtMy4zLTY0SDE1NS4zYy0yLjEgMjAuNS0zLjMgNDEuOC0zLjMgNjR6bTMyNC43LTk2Yy0yOC42LTY3LjktODYuNS0xMjAuNC0xNTgtMTQxLjYgMjQuNCAzMy44IDQxLjIgODQuNyA1MCAxNDEuNmgxMDh6TTE3Ny4yIDE4LjRDMTA1LjggMzkuNiA0Ny44IDkyLjEgMTkuMyAxNjBoMTA4YzguNy01Ni45IDI1LjUtMTA3LjggNDkuOS0xNDEuNnpNNDg3LjQgMTkySDM3Mi43YzIuMSAyMSAzLjMgNDIuNSAzLjMgNjRzLTEuMiA0My0zLjMgNjRoMTE0LjZjNS41LTIwLjUgOC42LTQxLjggOC42LTY0cy0zLjEtNDMuNS04LjUtNjR6TTEyMCAyNTZjMC0yMS41IDEuMi00MyAzLjMtNjRIOC42QzMuMiAyMTIuNSAwIDIzMy44IDAgMjU2czMuMiA0My41IDguNiA2NGgxMTQuNmMtMi0yMS0zLjItNDIuNS0zLjItNjR6bTM5LjUgOTZjMTQuNSA4OS4zIDQ4LjcgMTUyIDg4LjUgMTUyczc0LTYyLjcgODguNS0xNTJoLTE3N3ptMTU5LjMgMTQxLjZjNzEuNC0yMS4yIDEyOS40LTczLjcgMTU4LTE0MS42aC0xMDhjLTguOCA1Ni45LTI1LjYgMTA3LjgtNTAgMTQxLjZ6TTE5LjMgMzUyYzI4LjYgNjcuOSA4Ni41IDEyMC40IDE1OCAxNDEuNi0yNC40LTMzLjgtNDEuMi04NC43LTUwLTE0MS42aC0xMDh6Ij48L3BhdGg+PC9zdmc+"
        height="10"
        width="9.6875"
        y="107.375"
        x="187.95625"
      ></image>
      <text
        fill="black"
        fontSize="10px"
        fontFamily="Montserrat"
        y="115.625"
        x="201.8"
      >
        {formData.personalInfo.website}
      </text>
      <image
        imageRendering="optimizeSpeed"
        href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiMzZTk0ZTQiIHZpZXdCb3g9IjAgMCA0NDggNTEyIiB3aWR0aD0iNDQ4IiBoZWlnaHQ9IjUxMiI+PHBhdGggZD0iTTQxNiAzMkgzMS45QzE0LjMgMzIgMCA0Ni41IDAgNjQuM3YzODMuNEMwIDQ2NS41IDE0LjMgNDgwIDMxLjkgNDgwSDQxNmMxNy42IDAgMzItMTQuNSAzMi0zMi4zVjY0LjNjMC0xNy44LTE0LjQtMzIuMy0zMi0zMi4zek0xMzUuNCA0MTZINjlWMjAyLjJoNjYuNVY0MTZ6bS0zMy4yLTI0M2MtMjEuMyAwLTM4LjUtMTcuMy0zOC41LTM4LjVTODAuOSA5NiAxMDIuMiA5NmMyMS4yIDAgMzguNSAxNy4zIDM4LjUgMzguNSAwIDIxLjMtMTcuMiAzOC41LTM4LjUgMzguNXptMjgyLjEgMjQzaC02Ni40VjMxMmMwLTI0LjgtLjUtNTYuNy0zNC41LTU2LjctMzQuNiAwLTM5LjkgMjctMzkuOSA1NC45VjQxNmgtNjYuNFYyMDIuMmg2My43djI5LjJoLjljOC45LTE2LjggMzAuNi0zNC41IDYyLjktMzQuNSA2Ny4yIDAgNzkuNyA0NC4zIDc5LjcgMTAxLjlWNDE2eiI+PC9wYXRoPjwvc3ZnPg=="
        height="10"
        width="8.75"
        y="107.375"
        x="251.705"
      ></image>
      <text
        fill="black"
        fontSize="10px"
        fontFamily="Montserrat"
        y="115.625"
        x="265.08000000000004"
      >
        {formData.personalInfo.linkedin}
      </text>
      {/* Footer */}
      <path
        fill="#e2e2e2"
        d="M 0,141.375 L 595.28,141.375 C 595.28,141.375,595.28,141.375,595.28,141.375 L 595.28,142.375 C 595.28,142.375,595.28,142.375,595.28,142.375 L 0,142.375 C 0,142.375,0,142.375,0,142.375 L 0,141.375 C 0,141.375,0,141.375,0,141.375 Z"
      ></path>
      <path
        fill="#e2e2e2"
        d="M 180,142.375 L 181,142.375 C 181,142.375,181,142.375,181,142.375 L 181,841.89 C 181,841.89,181,841.89,181,841.89 L 180,841.89 C 180,841.89,180,841.89,180,841.89 L 180,142.375 C 180,142.375,180,142.375,180,142.375 Z"
      ></path>
      <text
        fill="gray"
        fontSize="8px"
        fontFamily="Montserrat"
        y="807.99"
        x="200"
      >
        {formData.footer}
      </text>
      {/* Education */}
      <svg y="162.375" x="20" id="educations"></svg>
      <text
        fontWeight="bold"
        fill="#3e94e4"
        fontSize="11px"
        fontFamily="Montserrat"
        y="173.5125"
        x="20"
      >
        Education
      </text>
      {formData.education && formData.education.length > 0 ? (
        formData.education.map((education, index) => {
          const yPosition = 195 + index * 30;

          // Adjust these values to align the square with the text
          const squareSize = 7; // Height of the square (193.5 - 186.5 = 7)
          const textBaseline = yPosition; // Text baseline position
          const squareYPosition = textBaseline - squareSize - 1; // Position square to align with text

          return (
            <React.Fragment key={education.id}>
              {/* Path element with dynamic y coordinates - square indicator */}
              <path
                fill="#3e94e4"
                d={`M 177,${squareYPosition} L 184,${squareYPosition} C 184,${squareYPosition},184,${squareYPosition},184,${squareYPosition} L 184,${
                  squareYPosition + squareSize
                } C 184,${squareYPosition + squareSize},184,${
                  squareYPosition + squareSize
                },184,${squareYPosition + squareSize} L 177,${
                  squareYPosition + squareSize
                } C 177,${squareYPosition + squareSize},177,${
                  squareYPosition + squareSize
                },177,${
                  squareYPosition + squareSize
                } L 177,${squareYPosition} C 177,${squareYPosition},177,${squareYPosition},177,${squareYPosition} Z`}
              ></path>
              <text
                fontWeight="bold"
                fill="black"
                fontSize="10px"
                fontFamily="Montserrat"
                y={yPosition}
                x="200"
              >
                {education.degree}
              </text>
              <text
                fontWeight="bold"
                fill="#3e94e4"
                fontSize="10px"
                fontFamily="Montserrat"
                y={yPosition + 12}
                x="200"
              >
                {education.institution}
              </text>
              <text
                fontWeight="bold"
                fill="black"
                fontSize="10px"
                fontFamily="Montserrat"
                y={yPosition}
                x="20"
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
          y="340.875"
          x="215"
        ></text>
      )}
      {/* Employment */}
      <svg y="267.5" x="20" id="employment"></svg>
      <text
        fontWeight="bold"
        fill="#3e94e4"
        fontSize="11px"
        fontFamily="Montserrat"
        y="278.6375"
        x="20"
      >
        Employment
      </text>
      {formData.experience && formData.experience.length > 0 ? (
        formData.experience.map((experience, index) => {
          const yPosition = 300 + index * 30;

          // Adjust these values to align the square with the text
          const squareSize = 7; // Height of the square (193.5 - 186.5 = 7)
          const textBaseline = yPosition; // Text baseline position
          const squareYPosition = textBaseline - squareSize - 1; // Position square to align with text

          return (
            <React.Fragment key={experience.id}>
              {/* Path element with dynamic y coordinates - square indicator */}
              <path
                fill="#3e94e4"
                d={`M 177,${squareYPosition} L 184,${squareYPosition} C 184,${squareYPosition},184,${squareYPosition},184,${squareYPosition} L 184,${
                  squareYPosition + squareSize
                } C 184,${squareYPosition + squareSize},184,${
                  squareYPosition + squareSize
                },184,${squareYPosition + squareSize} L 177,${
                  squareYPosition + squareSize
                } C 177,${squareYPosition + squareSize},177,${
                  squareYPosition + squareSize
                },177,${
                  squareYPosition + squareSize
                } L 177,${squareYPosition} C 177,${squareYPosition},177,${squareYPosition},177,${squareYPosition} Z`}
              ></path>
              <text
                fontWeight="bold"
                fill="black"
                fontSize="10px"
                fontFamily="Montserrat"
                y={yPosition}
                x="200"
              >
                {experience.position}
              </text>
              <text
                fontWeight="bold"
                fill="#3e94e4"
                fontSize="10px"
                fontFamily="Montserrat"
                y={yPosition + 12}
                x="200"
              >
                {experience.employer}
              </text>
              <text
                fontWeight="bold"
                fill="black"
                fontSize="10px"
                fontFamily="Montserrat"
                y={yPosition}
                x="20"
              >
                {experience.startDate} - {experience.endDate}
              </text>
            </React.Fragment>
          );
        })
      ) : (
        <text
          fill="black"
          fontSize="10px"
          fontFamily="Poppins"
          y="340.875"
          x="215"
        ></text>
      )}
      <svg y="358.875" x="20" id="skills"></svg>
      <text
        fontWeight="bold"
        fill="#3e94e4"
        fontSize="11px"
        fontFamily="Montserrat"
        y="370.0125"
        x="20"
      >
        Skills
      </text>
      {formData.skills.map((skill, index) => (
        <text
          key={index}
          fill="black"
          fontSize="11px"
          fontFamily="LiberationSans"
          x={200 + index * 25}
          y="370.0125"
        >
          {skill.skill}
        </text>
      ))}
      <svg y="392.625" x="20" id="languages"></svg>
      <text
        fontWeight="bold"
        fill="#3e94e4"
        fontSize="11px"
        fontFamily="Montserrat"
        y="403.7625"
        x="20"
      >
        Languages
      </text>
      {formData.languages.map((languages, index) => (
        <text
          key={index}
          fill="black"
          fontSize="11px"
          fontFamily="LiberationSans"
          x={200 + index * 25}
          y="403.7625"
        >
          {languages.language}
        </text>
      ))}
      <svg y="426.375" x="20" id="hobbies"></svg>
      <text
        fontWeight="bold"
        fill="#3e94e4"
        fontSize="11px"
        fontFamily="Montserrat"
        y="437.5125"
        x="20"
      >
        Hobbies
      </text>
      {formData.hobbies.map((hobbies, index) => (
        <text
          key={index}
          fill="black"
          fontSize="11px"
          fontFamily="LiberationSans"
          x={200 + index * 25}
          y="437.5125"
        >
          {hobbies.hobby}
        </text>
      ))}
      <svg y="460.125" x="20" id="courses"></svg>
      <text
        fontWeight="bold"
        fill="#3e94e4"
        fontSize="11px"
        fontFamily="Montserrat"
        y="471.2625"
        x="20"
      >
        Courses
      </text>
      {formData.courses && formData.courses.length > 0 ? (
        formData.courses.map((courses, index) => {
          const yPosition = 490 + index * 30;

          // Adjust these values to align the square with the text
          const squareSize = 7; // Height of the square (193.5 - 186.5 = 7)
          const textBaseline = yPosition; // Text baseline position
          const squareYPosition = textBaseline - squareSize - 1; // Position square to align with text

          return (
            <React.Fragment key={courses.id}>
              {/* Path element with dynamic y coordinates - square indicator */}
              <path
                fill="#3e94e4"
                d={`M 177,${squareYPosition} L 184,${squareYPosition} C 184,${squareYPosition},184,${squareYPosition},184,${squareYPosition} L 184,${
                  squareYPosition + squareSize
                } C 184,${squareYPosition + squareSize},184,${
                  squareYPosition + squareSize
                },184,${squareYPosition + squareSize} L 177,${
                  squareYPosition + squareSize
                } C 177,${squareYPosition + squareSize},177,${
                  squareYPosition + squareSize
                },177,${
                  squareYPosition + squareSize
                } L 177,${squareYPosition} C 177,${squareYPosition},177,${squareYPosition},177,${squareYPosition} Z`}
              ></path>
              <text
                fontWeight="bold"
                fill="black"
                fontSize="10px"
                fontFamily="Montserrat"
                y={yPosition}
                x="200"
              >
                {courses.courseName}
              </text>
              <text
                fontWeight="bold"
                fill="black"
                fontSize="10px"
                fontFamily="Montserrat"
                y={yPosition}
                x="20"
              >
                {courses.startDate} - {courses.endDate}
              </text>
            </React.Fragment>
          );
        })
      ) : (
        <text
          fill="black"
          fontSize="10px"
          fontFamily="Poppins"
          y="340.875"
          x="215"
        ></text>
      )}
      <svg y="537.75" x="20" id="achievements"></svg>
      <text
        fontWeight="bold"
        fill="#3e94e4"
        fontSize="11px"
        fontFamily="Montserrat"
        y="548.8875"
        x="20"
      >
        Achievements
      </text>
      {formData.achievements && formData.achievements.length > 0 ? (
        formData.achievements.map((achievement, index) => {
          const yPosition = 560 + index * 20;

          // Adjust these values to align the square with the text
          const squareSize = 7; // Height of the square (193.5 - 186.5 = 7)
          const textBaseline = yPosition; // Text baseline position
          const squareYPosition = textBaseline - squareSize - 1; // Position square to align with text
          return (
            <>
              {/* Path element with dynamic y coordinates - square indicator */}
              <path
                fill="#3e94e4"
                d={`M 177,${squareYPosition} L 184,${squareYPosition} C 184,${squareYPosition},184,${squareYPosition},184,${squareYPosition} L 184,${
                  squareYPosition + squareSize
                } C 184,${squareYPosition + squareSize},184,${
                  squareYPosition + squareSize
                },184,${squareYPosition + squareSize} L 177,${
                  squareYPosition + squareSize
                } C 177,${squareYPosition + squareSize},177,${
                  squareYPosition + squareSize
                },177,${
                  squareYPosition + squareSize
                } L 177,${squareYPosition} C 177,${squareYPosition},177,${squareYPosition},177,${squareYPosition} Z`}
              ></path>
              <text
                key={achievement.id}
                fill="black"
                font-size="10px"
                font-family="Poppins"
                y={yPosition}
                x="200"
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
    </svg>
  );
};

export default DynamicSVG_03;
