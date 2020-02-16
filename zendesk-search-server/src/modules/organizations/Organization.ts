import { orgJson } from "./organizations.interfaces";
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

  constructor(orgData: orgJson) {
    super();
    (this._id = orgData._id),
      (this.url = orgData.url),
      (this.external_id = orgData.external_id),
      (this.name = orgData.name),
      (this.domain_names = orgData.domain_names),
      (this.created_at = new Date(orgData.created_at)),
      (this.details = orgData.details),
      (this.shared_tickets = orgData.shared_tickets),
      (this.tags = orgData.tags);
  }
}
