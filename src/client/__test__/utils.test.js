import { isValidURL } from "./js/utils";

describe("isValidURL", () => {
  test("should return true for a valid URL", () => {
    const validURL = "https://www.example.com";
    expect(isValidURL(validURL)).toBe(true);
  });

  test("should return false for an invalid URL", () => {
    const invalidURL = "example.com";
    expect(isValidURL(invalidURL)).toBe(false);
  });

  test("should return true for URLs with different schemes", () => {
    const httpURL = "http://www.example.com";
    const httpsURL = "https://www.example.com";
    expect(isValidURL(httpURL)).toBe(true);
    expect(isValidURL(httpsURL)).toBe(true);
  });

  test("should return true for URLs with additional path or query parameters", () => {
    const urlWithPath = "https://www.example.com/path";
    const urlWithQuery = "https://www.example.com/?query=test";
    expect(isValidURL(urlWithPath)).toBe(true);
    expect(isValidURL(urlWithQuery)).toBe(true);
  });

  test("should return false for URLs without a scheme", () => {
    const urlWithoutScheme = "www.example.com";
    expect(isValidURL(urlWithoutScheme)).toBe(false);
  });

  test("should return false for an empty string", () => {
    const emptyURL = "";
    expect(isValidURL(emptyURL)).toBe(false);
  });
});
