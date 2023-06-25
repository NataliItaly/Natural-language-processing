//------------Function to handle API request and display response data--------

export const analyzeArticle = async (articleUrl) => {
  try {
    const response = await fetch("/api/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        articleUrl,
      }),
    });

    if (!response.ok) {
      throw new Error("API request failed");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw new Error(
      `An error occurred. Please try again later: ${error?.message}`
    );
  }
};
