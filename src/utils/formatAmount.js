/**
 * Take a value, and formate into currency.
 * 
 * @param {int} amount - The amount to formate.
 * @returns {string} - The modified text string.
 */

const formatAmount = (amount) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};

export default formatAmount;