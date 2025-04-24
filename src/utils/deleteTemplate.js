// utils/deleteTemplate.js

export const deleteTemplate = async (email, templateNumber) => {
  try {
    const response = await fetch(
      "https://resume-pro-db-api.onrender.com/delete",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, templateNumber }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("❌ Delete failed:", data.error);
      console.log(`Error: ${data.error}`);
      return;
    }

    console.log("✅ Template deleted successfully:", data);
    console.log(
      `Template deleted successfully for ${email} (Template #${templateNumber})`
    );
  } catch (error) {
    console.error("❌ Network error:", error);
    console.log("Network error. Please try again.");
  }
};
