function parseDate(dateString) {
  // Create a new Date object from the input string
  const date = new Date(dateString);

  // Define an array of month names for easy access
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get the day, month number, and year
  const day = date.getDate();
  const monthNum = date.getMonth() + 1; // Months are zero-based, so we add 1
  const year = date.getFullYear();
  const month = monthNames[date.getMonth()]; // Get the full month name
  const monthAbb = month.substring(0, 3); // Get the abbreviated month name

  // Return the result as an object
  return {
    day,
    monthNum,
    year,
    month,
    monthAbb,
  };
}

export default parseDate;
