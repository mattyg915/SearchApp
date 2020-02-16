import organizations from "../../data/organizations.json";
import { orgQuery, orgJson } from "./organizations.interfaces";
import { Base } from "../Base/Base";

/**
 * Organization class contains data and functions related to an
 * organization
 */

export class Organization extends Base {
  _id!: number;
  url!: string;
  external_id!: string;
  name!: string;
  domain_names!: Array<string>;
  created_at!: Date;
  details?: string;
  shared_tickets!: boolean;
  tags!: Array<string>;

  constructor(orgObj: Organization) {
    super();
    Object.assign(this, orgObj);
  }

  /**
   * @param orgData json data representing an organization
   * @returns a new organization object
   */
  static createOrgFromJson(orgData: orgJson): Organization {
    orgData.created_at = orgData.created_at.replace(/\s/g, "");

    return new Organization({
      _id: orgData._id,
      url: orgData.url,
      external_id: orgData.external_id,
      name: orgData.name,
      domain_names: orgData.domain_names,
      created_at: new Date(orgData.created_at),
      details: orgData.details,
      shared_tickets: orgData.shared_tickets,
      tags: orgData.tags
    });
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
  static getMatchingOrgs(params: orgQuery): Array<Organization> {
    const newOrgs: Array<Organization> = [];

    const orgData: Array<Object> = this.getMatchingData(params, organizations);

    for (let org of orgData) {
      newOrgs.push(this.createOrgFromJson(org as orgJson));
    }
    return newOrgs;
  }
}
