// ResumeComponentSelector.js

import DynamicSVG_01 from "../Components/ResumeTemplates/DynamicSVG_01";
import DynamicSVG_02 from "../Components/ResumeTemplates/DynamicSVG_02";
import DynamicSVG_03 from "../Components/ResumeTemplates/DynamicSVG_03";
import DynamicSVG_04 from "../Components/ResumeTemplates/DynamicSVG_04";
import DynamicSVG_05 from "../Components/ResumeTemplates/DynamicSVG_05";
import DynamicSVG_06 from "../Components/ResumeTemplates/DynamicSVG_06";
import DynamicSVG_07 from "../Components/ResumeTemplates/DynamicSVG_07";
import DynamicSVG_08 from "../Components/ResumeTemplates/DynamicSVG_08";
import DynamicSVG_09 from "../Components/ResumeTemplates/DynamicSVG_09";

const components = {
  1: DynamicSVG_01,
  2: DynamicSVG_02,
  3: DynamicSVG_03,
  4: DynamicSVG_04,
  5: DynamicSVG_05,
  6: DynamicSVG_06,
  7: DynamicSVG_07,
  8: DynamicSVG_08,
  9: DynamicSVG_09,
};

export const getDynamicSVGComponent = (number, props) => {
  const SelectedComponent = components[number];
  return SelectedComponent ? <SelectedComponent {...props} /> : null;
};
