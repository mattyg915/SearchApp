import { searchService } from "./searchService";

describe("Search Service", () => {
  describe("searchStringField", () => {
    it("returns true if a string occurs in the search string", () => {
      const result: boolean = searchService.searchStringField("sea", "search");
      expect(result).toBe(true);
    });

    it("returns true on an exact match search exact matches", () => {
      const result: boolean = searchService.searchStringField(
        '"search"',
        "search"
      );
      expect(result).toBe(true);
    });

    it("returns false on an exact match search if they aren't exact matches", () => {
      const result: boolean = searchService.searchStringField(
        '"sea"',
        "search"
      );
      expect(result).toBe(false);
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
    let searchArray: Array<string>;

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

  describe("searchDateField", () => {
    let searchDate: string;

    beforeAll(() => {
      searchDate = "2016-05-21T11:10:28 -10:00";
    });

    it("returns true if the dates match", () => {
      const result: boolean = searchService.searchDateField(
        "2016-05-21",
        searchDate
      );
      expect(result).toBe(true);
    });

    it("returns false if dates don't match", () => {
      const result: boolean = searchService.searchDateField(
        "2016-05-22",
        searchDate
      );
      expect(result).toBe(false);
    });

    it("throws an error if the search date is not properly formatted", () => {
      expect(() => {
        const result: boolean = searchService.searchDateField(
          "2016/05/21",
          searchDate
        );
      }).toThrowError("Date string provided not properly formatted");
    });

    it("returns false if the search field is undefined", () => {
      const result: boolean = searchService.searchDateField(
        "2016-05-21",
        undefined
      );
      expect(result).toBe(false);
    });
  });
});
