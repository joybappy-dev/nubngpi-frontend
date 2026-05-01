const getLatestResults = async () => {
  try {
    const response = await fetch(
      "https://nubngpi-backend.onrender.com/api/latest/results",
    );

    if (!response.ok) {
      throw new Error("Latest results API request failed");
    }

    const data = await response.json(); // 👈 Must parse JSON first

    // 🔥 Logic to remove students before 829428
    const students = data.filter((item) => Number(item.roll) >= 829428);

    return students; // 👈 Return the filtered data
  } catch (error) {
    console.error("Error fetching latest results:", error);
    return [];
  }
};

export default getLatestResults;
