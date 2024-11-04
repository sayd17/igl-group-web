const fixedSizeString = (str, length) => {
  let fixedString =
    str?.length > length ? str?.substring(0, length) + "..." : str;
  return fixedString;
};

export { fixedSizeString };
