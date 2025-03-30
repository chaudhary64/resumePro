export const expander = (controller) => {
  controller.start({
    height: "auto",
    visibility: "visible",
    transition: { duration: 0.5 },
  });
};

export const collapser = (controller) => {
  controller.start({
    height: 0,
    visibility: "hidden",
    transition: { duration: 0.5 },
  });
};
