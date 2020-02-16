import users from "../../data/users.json";
import { userJson, userQuery } from "./user.interfaces";
import { searchService } from "../../services/search/searchService";

/**
 * User class contains data and functions related to an
 * user
 */

export class User {
  _id!: number;
  url!: string;
  external_id!: string;
  name!: string;
  alias?: string;
  created_at!: Date;
  active!: boolean;
  verified?: boolean;
  shared!: boolean;
  locale?: string;
  timezone?: string;
  last_login_at!: Date;
  email?: string;
  phone!: string;
  signature!: string;
  organization_id?: number;
  tags!: Array<string>;
  suspended!: boolean;
  role!: string;

  constructor(userObj: User) {
    Object.assign(this, userObj);
  }

  /**
   * @param userData json data representing a user
   * @returns a new user object
   */
  static createUserFromJson(userData: userJson): User {
    userData.created_at = userData.created_at.replace(/\s/g, "");
    userData.last_login_at = userData.last_login_at.replace(/\s/g, "");

    return new User({
      _id: userData._id,
      url: userData.url,
      external_id: userData.external_id,
      name: userData.name,
      alias: userData.alias,
      created_at: new Date(userData.created_at),
      active: userData.active,
      verified: userData.verified,
      shared: userData.shared,
      locale: userData.locale,
      timezone: userData.timezone,
      last_login_at: new Date(userData.last_login_at),
      email: userData.email,
      phone: userData.phone,
      signature: userData.signature,
      organization_id: userData.organization_id,
      tags: userData.tags,
      suspended: userData.suspended,
      role: userData.role
    });
  }

  /**
   * Parses the users.json file into
   * an array of user objects that meet the
   * provided search parameters
   *
   * @param params object with key-value pairs to
   *   search for in the data
   * @returns an array of users that match the
   *   provided query
   */
  static getMatchingUsers(params: userQuery): Array<User> {
    const newUsers: Array<User> = [];
    let searchMatch; // initialize to true, set false on non-match
    let option: keyof User;
    let newUser: User;

    for (let data of users) {
      searchMatch = true;
      newUser = this.createUserFromJson(data);
      for (option in params) {
        let query: any = params[option];
        let searchTerm: any = data[option];

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
        newUsers.push(newUser);
      }
    }

    return newUsers;
  }
}
