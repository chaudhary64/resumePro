export const formatDate = (dateInput = new Date()) => {
  const date = new Date(dateInput);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};
