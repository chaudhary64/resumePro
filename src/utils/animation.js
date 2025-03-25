export const expander = (controller) => {
  controller.start({
    height: "auto",
    visibility: "visible",
  });
};

export const collapser = (controller) => {
  controller.start({
    height: 0,
    visibility: "hidden",
  });
};
