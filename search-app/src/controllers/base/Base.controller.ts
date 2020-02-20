import { searchService } from "../../services/search/searchService";
import { hasKey } from "../../../src/utils/utils";

export class BaseController {
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
  getMatchingData(params: object, data: Array<Object>): Array<Object> {
    const result: Array<Object> = [];
    let searchMatch; // initialize to true, set false on non-match

    for (let item of data) {
      searchMatch = true;
      for (let option in params) {
        let query: any;
        let searchTerm: any;

        // Type guard necessary to index params and item
        if (hasKey(params, option) && hasKey(item, option)) {
          query = params[option];
          searchTerm = item[option];
        } else {
          // optional fields that aren't present will be caught here
          if (hasKey(params, option) && typeof params[option] === "undefined") {
            // This means we're searching for undefined or null fields
            break;
          }
          searchMatch = false;
          break;
        }

        if (typeof query === "undefined") {
          if (!searchService.searchNullField(searchTerm)) {
            searchMatch = false;
            break;
          }
        } else if (
          typeof query === "string" &&
          typeof searchTerm === "string"
        ) {
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
        } else if (
          query.hasOwnProperty("date") &&
          typeof searchTerm === "string"
        ) {
          // dates are all strings, so to differentiate we put them in an object
          query = query.date;
          if (!searchService.searchDateField(query, searchTerm)) {
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
}
