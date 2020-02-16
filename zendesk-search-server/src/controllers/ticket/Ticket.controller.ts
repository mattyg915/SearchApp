import tickets from "../../data/tickets.json";
import {
  ticketJson,
  ticketQuery
} from "../../modules/tickets/ticket.interfaces";
import { BaseController } from "../base/Base.controller";
import { Ticket } from "../../modules/tickets/Ticket";

export class TicketController extends BaseController {
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
      newTickets.push(new Ticket(ticket as ticketJson));
    }

    return newTickets;
  }
}
