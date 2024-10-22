function toPascalCase(str) {
  // Check if the input is undefined or not a string
  if (typeof str !== "string") {
    console.warn("Input is not a valid string:", str);
    return ""; // Return an empty string or handle it accordingly
  }

  return str
    .replace(/(?:^|\s|-|_)(\w)/g, (_, c) => (c ? c.toUpperCase() : "")) // Capitalize the first letter of each word
    .replace(/\s|-|_/g, ""); // Remove spaces, dashes, and underscores
}

export default toPascalCase;
