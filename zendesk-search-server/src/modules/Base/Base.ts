import { User } from "../users/User";

import { searchService } from "../../services/search/searchService";

export class Base {
  /**
   * Parses the provided file into
   * an array of objects that meet the
   * provided search parameters
   *
   * @param params object with key-value pairs to
   *   search for in the data
   * @returns an array of objects that match the
   *   provided query
   */
  static getMatchingData(params: object, data: Array<Object>): Array<Object> {
    const result: Array<Object> = [];
    let searchMatch; // initialize to true, set false on non-match

    for (let item of data) {
      searchMatch = true;
      for (let option in params) {
        let query: any;
        let searchTerm: any;

        // Type guard necessary to index params and item
        if (this.hasKey(params, option) && this.hasKey(item, option)) {
          query = params[option];
          searchTerm = item[option];
        } else {
          // This is an error, key does not exist on this object
          console.log(
            `ERROR: Field ${option} does not exist on this collection`
          );
          return [];
        }

        if (typeof query === "string" && typeof searchTerm === "string") {
          if (!searchService.searchStringField(query, searchTerm)) {
            searchMatch = false;
            break;
          }
        } else if (
          typeof query === "number" &&
          typeof searchTerm === "number"
        ) {
          if (!searchService.searchNumberField(query, searchTerm)) {
            searchMatch = false;
            break;
          }
        } else if (
          typeof query === "string" &&
          typeof searchTerm === "object"
        ) {
          if (!searchService.searchStringArray(query, searchTerm)) {
            searchMatch = false;
            break;
          }
        } else if (
          typeof query === "boolean" &&
          typeof searchTerm === "boolean"
        ) {
          if (!searchService.searchBooleanField(query, searchTerm)) {
            searchMatch = false;
            break;
          }
        }
      }

      if (searchMatch) {
        result.push(item);
      }
    }

    return result;
  }

  static hasKey<O>(obj: O, key: keyof any): key is keyof O {
    return key in obj;
  }
}
