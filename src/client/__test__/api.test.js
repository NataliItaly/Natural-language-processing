const { analyzeArticle } = require("./js/api");

describe("analyzeArticle", () => {
  // Mock the fetch function
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ data: "mocked data" }),
    })
  );

  beforeEach(() => {
    fetch.mockClear();
  });

  test("should make a POST request to the API and return the response data", async () => {
    const articleUrl = "https://www.example.com/article";
    const expectedData = { data: "mocked data" };

    const result = await analyzeArticle(articleUrl);

    expect(fetch).toHaveBeenCalledWith("/api/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        articleUrl,
      }),
    });

    expect(result).toEqual(expectedData);
  });

  test("should throw an error when the API request fails", async () => {
    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve({ data: "mocked data" }),
      })
    );

    const articleUrl = "https://www.example.com/article";

    await expect(analyzeArticle(articleUrl)).rejects.toThrow(
      "An error occurred. Please try again later: API request failed"
    );
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  test("should throw an error when an error occurs during the API request", async () => {
    global.fetch.mockImplementationOnce(() =>
      Promise.reject(new Error("Mock Network error"))
    );

    const articleUrl = "https://www.example.com/article";

    await expect(analyzeArticle(articleUrl)).rejects.toThrow(
      "An error occurred. Please try again later: Mock Network error"
    );
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
