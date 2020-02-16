import organizations from "../../data/organizations.json";
import { BaseController } from "../base/Base.controller";
import {
  orgQuery,
  orgJson
} from "../../modules/organizations/organizations.interfaces.js";
import { Organization } from "../../modules/organizations/Organization.js";

export class OrganizationController extends BaseController {
  /**
   * Parses the organizations.json file into
   * an array of organization objects that meet the
   * provided search parameters
   *
   * @param params object with key-value pairs to
   *   search for in the data
   * @returns an array of organizations that match the
   *   provided query
   */
  static getMatchingOrgs(params: orgQuery): Array<Organization> {
    const newOrgs: Array<Organization> = [];

    const orgData: Array<Object> = this.getMatchingData(params, organizations);

    for (let org of orgData) {
      newOrgs.push(new Organization(org as orgJson));
    }
    return newOrgs;
  }
}
