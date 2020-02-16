import tickets from "../../data/tickets.json";
import { Base } from "../Base/Base";
import { ticketQuery, ticketJson } from "./ticket.interfaces";

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

  constructor(ticketObj: Ticket) {
    super();
    Object.assign(this, ticketObj);
  }

  /**
   * @param ticketData json data representing a ticket
   * @returns a new ticket object
   */
  static createTicketFromJson(ticketData: ticketJson): Ticket {
    ticketData.created_at = ticketData.created_at.replace(/\s/g, "");
    if (ticketData.due_at) {
      ticketData.due_at = ticketData.due_at.replace(/\s/g, "");
    }

    return new Ticket({
      _id: ticketData._id,
      url: ticketData.url,
      external_id: ticketData.external_id,
      created_at: new Date(ticketData.created_at),
      type: ticketData.type,
      subject: ticketData.subject,
      description: ticketData.description,
      priority: ticketData.priority,
      status: ticketData.status,
      submitter_id: ticketData.submitter_id,
      assignee_id: ticketData.assignee_id,
      organization_id: ticketData.organization_id,
      tags: ticketData.tags,
      has_incidents: ticketData.has_incidents,
      due_at: ticketData.due_at ? new Date(ticketData.due_at) : undefined,
      via: ticketData.via
    });
  }

  /**
   * Parses the tickets.json file into
   * an array of ticket objects that meet the
   * provided search parameters
   *
   * @param params object with key-value pairs to
   *   search for in the data
   * @returns an array of tickets that match the
   *   provided query
   */
  static getMatchingTickets(params: ticketQuery): Array<Ticket> {
    const newTickets: Array<Ticket> = [];

    const ticketData: Array<Object> = this.getMatchingData(params, tickets);

    for (let ticket of ticketData) {
      newTickets.push(this.createTicketFromJson(ticket as ticketJson));
    }

    return newTickets;
  }
}
