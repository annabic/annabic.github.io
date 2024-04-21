export const formatLocaleDate = (date: Date) =>
  date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
