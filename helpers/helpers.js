const fixedSizeString = (str, length) => {
  let fixedString =
    str?.length > length ? str?.substring(0, length) + "..." : str;
  return fixedString;
};

// get capitalized string
const capitalizeWords = (str) => {
  return str
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

export { fixedSizeString, capitalizeWords };
