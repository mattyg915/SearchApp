import tickets from "../../data/tickets.json";
import {
  ticketJson,
  ticketQuery
} from "../../modules/tickets/ticket.interfaces";
import { BaseController } from "../base/Base.controller";
import { Ticket } from "../../modules/tickets/Ticket";

export class TicketController extends BaseController {
  ticketData!: Array<ticketJson>;

  /**
   * @param data optional parameter for a separate source of data
   */
  constructor(data?: Array<ticketJson>) {
    super();
    if (data) {
      this.ticketData = data;
    } else {
      this.ticketData = tickets;
    }
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
  getMatchingTickets(params: ticketQuery): Array<Ticket> {
    const newTickets: Array<Ticket> = [];

    const ticketData: Array<Object> = this.getMatchingData(
      params,
      this.ticketData
    );

    for (let ticket of ticketData) {
      newTickets.push(new Ticket(ticket as ticketJson));
    }

    return newTickets;
  }
}
