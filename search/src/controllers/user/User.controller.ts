import users from "../../data/users.json";
import { userJson, userQuery } from "../../modules/users/user.interfaces";
import { BaseController } from "../base/Base.controller";
import { User } from "../../modules/users/User";

export class UserController extends BaseController {
  userData!: Array<userJson>;

  /**
   * @param data optional parameter for a separate source of data
   */
  constructor(data?: Array<userJson>) {
    super();
    if (data) {
      this.userData = data;
    } else {
      this.userData = users;
    }
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
  getMatchingUsers(params: userQuery): Array<User> {
    const newUsers: Array<User> = [];

    const userData: Array<Object> = this.getMatchingData(params, this.userData);

    for (let user of userData) {
      newUsers.push(new User(user as userJson));
    }

    return newUsers;
  }
}
