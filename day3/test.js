// Error handling

try {
  let result = 10 / 0;
  console.log("Result:", result);
  throw new Error("Something went wrong");
} catch (error) {
  console.error("Caught Error:", error.message);
}

async function fetchData() {
  try {
    let data = await Promise.reject("Network error");
  } catch (err) {
    console.error("Caught async error:", err);
  }
}
fetchData();