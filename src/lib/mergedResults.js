const mergedResults = async () => {
  try {
    const [studentsRes, resultsRes] = await Promise.all([
      fetch("https://nubngpi-backend.onrender.com/api/students"),
      fetch("https://nubngpi-backend.onrender.com/api/results"),
    ]);

    if (!studentsRes.ok || !resultsRes.ok) {
      throw new Error("One or more API requests failed");
    }

    const students = await studentsRes.json();
    const results = await resultsRes.json();

    // 1. Create the Map for efficient lookup
    const studentMap = new Map(students.map((s) => [s.roll, s]));

    // 2. Merge AND Filter
    const finalData = results
      .map((result) => {
        const studentInfo = studentMap.get(result.roll);
        return {
          ...result,
          studentName: studentInfo?.name || "Unknown Student",
          registration: studentInfo?.registration || "N/A",
          studentImage: studentInfo?.img || null,
        };
      })
      .filter((item) => Number(item.roll) >= 829428)
      .sort((a, b) => Number(a.roll) - Number(b.roll));
    return finalData;
  } catch (error) {
    console.error("Error fetching or merging data:", error);
    return [];
  }
};

export default mergedResults;