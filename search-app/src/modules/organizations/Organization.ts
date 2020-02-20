import { orgJson } from "./organizations.interfaces";
import { Base } from "../Base/Base";
import { TicketController } from "../../controllers/ticket/Ticket.controller";
import { UserController } from "../../controllers/user/User.controller";
import { Ticket } from "../tickets/Ticket";
import { User } from "../users/User";

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
  details?: string | null;
  shared_tickets!: boolean;
  tags!: Array<string>;

  constructor(orgData: orgJson) {
    super();
    orgData.created_at = orgData.created_at.replace(/\s/g, "");

    this._id = orgData._id;
    this.url = orgData.url;
    this.external_id = orgData.external_id;
    this.name = orgData.name;
    this.domain_names = orgData.domain_names;
    this.created_at = new Date(orgData.created_at);
    this.details = orgData.details;
    this.shared_tickets = orgData.shared_tickets;
    this.tags = orgData.tags;
  }

  /**
   * @returns an array of strings with the related data from this object
   */
  getRelatedData(): Array<string> {
    let result: Array<string> = [];
    const ticketctrl = new TicketController();
    const userCtrl = new UserController();

    // Get tickets in this org
    const tickets: Array<Ticket> = ticketctrl.getMatchingTickets({
      organization_id: this._id
    });
    for (let ticket of tickets) {
      if (ticket.subject) {
        result.push("Ticket: " + ticket.subject);
      }
    }

    // Get users who belong to this org
    const users: Array<User> = userCtrl.getMatchingUsers({
      organization_id: this._id
    });
    for (let user of users) {
      if (user.name) {
        result.push("User: " + user.name);
      }
    }

    return result;
  }
}
