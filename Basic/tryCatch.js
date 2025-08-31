try {
  let result = 10 / 0;
  if (!isFinite(result)) throw new Error("Invalid division");
} catch (error) {
  console.log("Error:", error.message);
} finally {
  console.log("Always runs");
}