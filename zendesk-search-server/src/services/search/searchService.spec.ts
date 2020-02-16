import { searchService } from "./searchService";

describe("Search Service", () => {
  let searchArray: Array<string>;

  describe("searchStringField", () => {
    it("returns true if a string occurs in the search string", () => {
      const result: boolean = searchService.searchStringField("sea", "search");
      expect(result).toBe(true);
    });

    it("is case insensitive", () => {
      const result: boolean = searchService.searchStringField("SEA", "search");
      expect(result).toBe(true);
    });

    it("returns false if the string isn't present", () => {
      const result: boolean = searchService.searchStringField("test", "search");
      expect(result).toBe(false);
    });

    it("returns false if the search field is undefined", () => {
      const result: boolean = searchService.searchStringField("SEA", undefined);
      expect(result).toBe(false);
    });
  });

  describe("searchNumberField", () => {
    it("returns true if both numbers match", () => {
      const result: boolean = searchService.searchNumberField(7, 7);
      expect(result).toBe(true);
    });

    it("returns false if the numbers don't match", () => {
      const result: boolean = searchService.searchNumberField(7, 8);
      expect(result).toBe(false);
    });

    it("returns false if the search field is undefined", () => {
      const result: boolean = searchService.searchNumberField(7, undefined);
      expect(result).toBe(false);
    });
  });

  describe("searchBooleanField", () => {
    it("returns true if both bools match", () => {
      const result: boolean = searchService.searchBooleanField(true, true);
      expect(result).toBe(true);
    });

    it("returns false if the bools don't match", () => {
      const result: boolean = searchService.searchBooleanField(true, false);
      expect(result).toBe(false);
    });

    it("returns false if the search field is undefined", () => {
      const result: boolean = searchService.searchBooleanField(
        false,
        undefined
      );
      expect(result).toBe(false);
    });
  });

  describe("searchStringArrayField", () => {
    beforeAll(() => {
      searchArray = ["search", "array"];
    });

    it("returns true if the string is found in any element of the array", () => {
      const result: boolean = searchService.searchStringArray(
        "sear",
        searchArray
      );
      expect(result).toBe(true);
    });

    it("is case insensitive", () => {
      const result: boolean = searchService.searchStringArray(
        "SEA",
        searchArray
      );
      expect(result).toBe(true);
    });

    it("returns false if the string is not present in the array", () => {
      const result: boolean = searchService.searchStringArray(
        "object",
        searchArray
      );
      expect(result).toBe(false);
    });

    it("returns false if the search field is undefined", () => {
      const result: boolean = searchService.searchStringArray(
        "search",
        undefined
      );
      expect(result).toBe(false);
    });
  });
});
