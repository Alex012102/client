/**
 * Truncates a text string, keeping a specified number of characters and replacing the rest with '...'
 * @param {string} text - The original text string.
 * @param {number} maxLength - The maximum number of characters to keep.
 * @returns {string} - The modified text string.
 */

export const truncateText = (text, containerWidth) => {
  const TOLERANCE = 90;
  const words = text.split(" ");
  let truncated = "";
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  context.font = "16px Arial";

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const width = context.measureText(truncated + word + " ").width;

    // Check if adding the next word exceeds the width with some tolerance
    if (width > containerWidth - TOLERANCE) {
      return truncated.trim() + "..."; // Add ellipsis if exceeds width
    }

    truncated += word + " ";
  }

  return truncated.trim(); // Return the full text if it fits
};
