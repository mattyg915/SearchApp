import { Base } from "../Base/Base";
import { ticketJson } from "./ticket.interfaces";
import { OrganizationController } from "../../controllers/organization/Organization.controller";
import { UserController } from "../../controllers/user/User.controller";
import { User } from "../users/User";
import { Organization } from "../organizations/Organization";

/**
 * Ticket class contains data and functions related to an
 * ticket
 */

export class Ticket extends Base {
  _id!: string;
  url!: string;
  external_id!: string;
  created_at!: Date;
  type?: string;
  subject!: string;
  description?: string;
  priority!: string;
  status!: string;
  submitter_id!: number;
  assignee_id?: number;
  organization_id?: number;
  tags!: Array<string>;
  has_incidents!: boolean;
  due_at?: Date;
  via!: string;

  constructor(ticketData: ticketJson) {
    super();

    ticketData.created_at = ticketData.created_at.replace(/\s/g, "");
    if (ticketData.due_at) {
      ticketData.due_at = ticketData.due_at.replace(/\s/g, "");
    }

    this._id = ticketData._id;
    this.url = ticketData.url;
    this.external_id = ticketData.external_id;
    this.created_at = new Date(ticketData.created_at);
    this.type = ticketData.type;
    this.subject = ticketData.subject;
    this.description = ticketData.description;
    this.priority = ticketData.priority;
    this.status = ticketData.status;
    this.submitter_id = ticketData.submitter_id;
    this.assignee_id = ticketData.assignee_id;
    this.organization_id = ticketData.organization_id;
    this.tags = ticketData.tags;
    this.has_incidents = ticketData.has_incidents;
    this.due_at = ticketData.due_at ? new Date(ticketData.due_at) : undefined;
    this.via = ticketData.via;
  }

  /**
   * @returns an array of strings with the related data from this object
   */
  getRelatedData(): Array<string> {
    let result: Array<string> = [];
    const orgCtrl = new OrganizationController();
    const userCtrl = new UserController();

    // Get the org it belongs to
    const org: Array<Organization> = orgCtrl.getMatchingOrgs({
      _id: this.organization_id
    });
    result.push("Organization: " + org[0].name);

    // Get the user who submitted it
    const submitter: Array<User> = userCtrl.getMatchingUsers({
      _id: this.submitter_id
    });
    result.push("Submitted by: " + submitter[0].name);

    // Get the user assigned to it
    const assignee: Array<User> = userCtrl.getMatchingUsers({
      _id: this.assignee_id
    });
    result.push("Assigned to: " + assignee[0].name);

    return result;
  }
}
