export const postResumeData = async ({
  email,
  dataObject,
  templateNumber,
  date,
}) => {
  try {
    // console.log("📤 Sending resume data to server...");
    // console.log("📤 Email:", email);
    // console.log("📤 Data Object:", dataObject);
    // console.log("📤 Template Number:", templateNumber);
    // console.log("📤 Date:", date);
    // Input validation
    if (!email || !dataObject || templateNumber === undefined) {
      throw new Error(
        "Missing required fields: email, dataObject, or templateNumber."
      );
    }

    const payload = {
      email,
      object: dataObject,
      templateNumber,
      date: date || new Date().toDateString(), // fallback to today's date
    };

    // console.log("📤 Sending resume data to server:", payload);

    const response = await fetch(
      "https://resume-pro-db-api.onrender.com/submit",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      console.error("❌ Server responded with error:", result);
      throw new Error(
        `Server error: ${response.status} - ${result.error || "Unknown error"}`
      );
    }

    console.log("✅ Resume submitted successfully");
    return result;
  } catch (error) {
    console.error("❌ Error submitting resume:", error.message);
    throw error;
  }
};
