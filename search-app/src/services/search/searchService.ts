/**
 * Class contains helper functions for searching data
 */
export class searchService {
  /**
   * Searches for occurence of a string in another string
   * Search is CASE INSENSITIVE
   * @param search a string to search for
   * @param source the string to search in
   * @returns true if the string is found, else false
   */
  static searchStringField(
    search: string | undefined,
    source: string | undefined
  ): boolean {
    if (!search || !source) {
      return false;
    }

    search = search.toLowerCase();
    source = source.toLowerCase();
    return source.indexOf(search) >= 0;
  }
  /**
   * @param search the number to search for
   * @param source the number to compare
   * @returns true if the numbers match
   */
  static searchNumberField(
    search: number | undefined,
    source: number | undefined
  ): boolean {
    if (typeof source === undefined || typeof search === undefined) {
      return false;
    }

    return search === source;
  }
  /**
   * @param search the bool to search for
   * @param source the bool to compare
   * @returns true if the bools match
   */
  static searchBooleanField(
    search: boolean | undefined,
    source: boolean | undefined
  ): boolean {
    if (typeof source === undefined || typeof search === undefined) {
      return false;
    }

    return search === source;
  }
  /**
   * Searches the values of an array of strings
   * for an instance of a string.
   * Search is CASE INSENSITIVE.
   * @param search the string to search for
   * @param source the array to search in
   * @returns true if the string is found
   */
  static searchStringArray(
    search: string | undefined,
    source: Array<string> | undefined
  ): boolean {
    if (!source || !search) {
      return false;
    }

    search = search.toLowerCase();

    for (let element of source) {
      if (element.toLowerCase().indexOf(search) >= 0) {
        return true;
      }
    }

    return false;
  }
  /**
   * @param search the date to search for as a
   * string formatted as "YYYY-MM-DD"
   * @param source the date to search for
   * @returns true if the string is found
   */
  static searchDateField(
    search: string | undefined,
    source: Date | string | undefined
  ): boolean {
    if (!source || !search) {
      return false;
    }

    if (typeof source === "string") {
      source = source.replace(/\s/g, "");
      source = new Date(source);
    }

    // validates date format
    const dateRegex = /\d{4}-\d{2}-\d{2}/;

    if (dateRegex.test(search)) {
      const day = source.getDate();
      const month = source.getMonth();
      const year = source.getFullYear();
      let monthToken: string;
      let dayToken: string;

      // Handle leading zeros
      if (month < 10) {
        monthToken = `0${month + 1}`; // Date zero-indexes the month for...reasons
      } else {
        monthToken = `${month + 1}`;
      }

      if (day < 10) {
        dayToken = `0${day}`;
      } else {
        dayToken = `${day}`;
      }

      const dateTest: string = `${year}-${monthToken}-${dayToken}`;

      if (search === dateTest) {
        return true;
      } else {
        return false;
      }
    } else {
      throw new Error("Date string provided not properly formatted");
    }
  }
}
