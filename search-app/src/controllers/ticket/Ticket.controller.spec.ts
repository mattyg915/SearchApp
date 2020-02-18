import { TicketController } from "./Ticket.controller";
import { ticketJsonMock } from "../../../src/modules/tickets/Ticket.mocks";
import { Ticket } from "../../../src/modules/tickets/Ticket";

describe("TicketController", () => {
  const ctrl: TicketController = new TicketController([ticketJsonMock]);

  describe("getMatchingTickets", () => {
    it("calls the base controller search method", () => {
      const baseControllerSpy = jest.spyOn(ctrl, "getMatchingData");
      ctrl.getMatchingTickets({ type: "problem" });
      expect(baseControllerSpy).toBeCalled();
    });

    it("returns an array of Ticket objects that match the search", () => {
      const tickets = ctrl.getMatchingTickets({ type: "problem" });
      expect(tickets).toEqual([new Ticket(ticketJsonMock)]);
    });
  });
});
