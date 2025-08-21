

/**
 * Formats a number as Indian Rupees (INR).
 * @param {number} amount - The amount to format.
 * @returns {string} - The formatted amount in INR.
 */
export const rupee = (amount) => {
  if (isNaN(amount)) return "₹0.00"; // Return default value if input is not a number

  // Convert to a number and format it
  const formattedAmount = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);

  return formattedAmount;
};
