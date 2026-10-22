import {
  getPreferredLanguage,
  languageDetector,
} from "../app-language/language-detector";

describe("Spanish app language defaults", () => {
  afterEach(() => vi.restoreAllMocks());

  it("defaults to Spanish without an explicit preference", () => {
    vi.spyOn(languageDetector, "detect").mockReturnValue([]);
    expect(getPreferredLanguage()).toBe("es-ES");
  });

  it("preserves a supported explicit preference", () => {
    vi.spyOn(languageDetector, "detect").mockReturnValue(["fr-FR"]);
    expect(getPreferredLanguage()).toBe("fr-FR");
  });

  it("falls back to Spanish for an unsupported preference", () => {
    vi.spyOn(languageDetector, "detect").mockReturnValue(["unknown"]);
    expect(getPreferredLanguage()).toBe("es-ES");
  });
});
