import organizations from "../../../src/data/organizations.json";
import { BaseController } from "../base/Base.controller";
import {
  orgQuery,
  orgJson
} from "../../../src/modules/organizations/organizations.interfaces";
import { Organization } from "../../../src/modules/organizations/Organization";

export class OrganizationController extends BaseController {
  orgData!: Array<orgJson>;

  /**
   * @param data optional parameter for a separate source of data
   */
  constructor(data?: Array<orgJson>) {
    super();
    if (data) {
      this.orgData = data;
    } else {
      this.orgData = organizations;
    }
  }
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
  getMatchingOrgs(params: orgQuery): Array<Organization> {
    const newOrgs: Array<Organization> = [];

    const orgData: Array<Object> = this.getMatchingData(params, this.orgData);

    for (let org of orgData) {
      newOrgs.push(new Organization(org as orgJson));
    }
    return newOrgs;
  }
}
