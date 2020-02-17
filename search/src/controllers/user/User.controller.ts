import users from "../../data/users.json";
import { userJson, userQuery } from "../../modules/users/user.interfaces";
import { BaseController } from "../base/Base.controller";
import { User } from "../../modules/users/User";

export class UserController extends BaseController {
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

    const userData: Array<Object> = this.getMatchingData(params, users);

    for (let user of userData) {
      newUsers.push(new User(user as userJson));
    }

    return newUsers;
  }
}
