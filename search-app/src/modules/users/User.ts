import { Base } from "../Base/Base";
import { userJson } from "./user.interfaces";
import { TicketController } from "../../controllers/ticket/Ticket.controller";
import { OrganizationController } from "../../controllers/organization/Organization.controller";
import { Organization } from "../organizations/Organization";
import { Ticket } from "../tickets/Ticket";

/**
 * User class contains data and functions related to an
 * user
 */

export class User extends Base {
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

  constructor(userData: userJson) {
    super();

    // Scrub spaces, the Date() constructor doesn't like them
    userData.created_at = userData.created_at.replace(/\s/g, "");
    userData.last_login_at = userData.last_login_at.replace(/\s/g, "");

    this._id = userData._id;
    this.url = userData.url;
    this.external_id = userData.external_id;
    this.name = userData.name;
    this.alias = userData.alias;
    this.created_at = new Date(userData.created_at);
    this.active = userData.active;
    this.verified = userData.verified;
    this.shared = userData.shared;
    this.locale = userData.locale;
    this.timezone = userData.timezone;
    this.last_login_at = new Date(userData.last_login_at);
    this.email = userData.email;
    this.phone = userData.phone;
    this.signature = userData.signature;
    this.organization_id = userData.organization_id;
    this.tags = userData.tags;
    this.suspended = userData.suspended;
    this.role = userData.role;
  }

  /**
   * @returns an array of strings with the related data from this object
   */
  getRelatedData(): Array<string> {
    let result: Array<string> = [];
    const orgCtrl = new OrganizationController();
    const ticketCtrl = new TicketController();

    // Get the org name they belong to
    const org: Array<Organization> = orgCtrl.getMatchingOrgs({
      _id: this.organization_id
    });
    if (org[0] && org[0].name) {
      result.push("Organization: " + org[0].name);
    }

    // Get tickets they've submitted
    const ticketsSubmitted: Array<Ticket> = ticketCtrl.getMatchingTickets({
      submitter_id: this._id
    });
    for (let ticket of ticketsSubmitted) {
      if (ticket.subject) {
        result.push("Ticket submitted: " + ticket.subject);
      }
    }

    // Get the tickets they're assigned to
    const ticketsAssigned: Array<Ticket> = ticketCtrl.getMatchingTickets({
      assignee_id: this._id
    });
    for (let ticket of ticketsAssigned) {
      if (ticket.subject) {
        result.push("Assigned to ticket: " + ticket.subject);
      }
    }

    return result;
  }
}
