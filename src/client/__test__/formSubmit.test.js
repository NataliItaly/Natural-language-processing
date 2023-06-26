import * as apiModule from "./js/api";

describe("handleFormSubmission", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="container form">
        <form id="analyze-form">
          <label for="article-url" id="text-label" class="form__label">Article Url</label>
          <input type="text" name="article-url" id="article-url" class="form__input form__text"
            placeholder="Enter Article URL">
          <button type="submit" class="form__input form__input_btn" id="form-submit">Check the output</button>
        </form>
        <div class="form__output form__text" id="result-container">
          <p class="form__result" id="polarity"></p>
          <p class="form__result" id="subjectivity"></p>
          <p class="form__result" id="text"></p>
        </div>
      </div>
    `;

    require("../src/client/js");

    // Mock the necessary functions
    jest.spyOn(global, "alert").mockImplementation(() => {});
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    // Restore the mocked functions
    jest.restoreAllMocks();
  });

  test("Form submission with valid URL", async () => {
    const analyzeArticleMock = jest.fn().mockResolvedValueOnce({
      data: {
        polarity: "positive",
        subjectivity: "objective",
        text: "Some text",
      },
    });
    jest
      .spyOn(apiModule, "analyzeArticle")
      .mockImplementation(analyzeArticleMock);

    const articleUrlInput = document.getElementById("article-url");

    const articleUrl =
      "https://dev.to/abhishekalbert/recommended-reading-for-developers-3b8";
    articleUrlInput.value = articleUrl;

    document.getElementById("analyze-form").dispatchEvent(new Event("submit"));

    await Promise.resolve();

    expect(analyzeArticleMock).toHaveBeenCalledWith(articleUrl);

    expect(document.getElementById("polarity").textContent).toBe(
      "Polarity: positive"
    );
    expect(document.getElementById("subjectivity").textContent).toBe(
      "Subjectivity: objective"
    );
    expect(document.getElementById("text").textContent).toBe("Text: Some text");
  });
});
