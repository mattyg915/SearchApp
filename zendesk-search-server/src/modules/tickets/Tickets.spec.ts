import { Ticket } from "./Ticket";
import { ticketJsonMock } from "./Ticket.mocks";
import { ticketJson } from "./ticket.interfaces";

describe("Ticket module", () => {
  let ticket: Ticket;
  let ticketData: ticketJson = ticketJsonMock;

  describe("Constructor", () => {
    it("creates a new ticket from valid data", () => {
      ticket = new Ticket(ticketData);
      expect(ticket._id).toEqual(ticketData._id);
      expect(ticket.url).toEqual(ticketData.url);
      expect(ticket.external_id).toEqual(ticketData.external_id);
      expect(ticket.created_at).toEqual(new Date(ticketData.created_at));
      expect(ticket.type).toEqual(ticketData.type);
      expect(ticket.subject).toBe(ticketData.subject);
      expect(ticket.description).toEqual(ticketData.description);
      expect(ticket.priority).toEqual(ticketData.priority);
      expect(ticket.status).toEqual(ticketData.status);
      expect(ticket.submitter_id).toEqual(ticketData.submitter_id);
      expect(ticket.assignee_id).toEqual(ticketData.assignee_id);
      expect(ticket.organization_id).toEqual(ticketData.organization_id);
      expect(ticket.tags).toEqual(ticketData.tags);
      expect(ticket.has_incidents).toEqual(ticketData.has_incidents);
      expect(ticket.due_at).toEqual(new Date(ticketData.due_at!));
      expect(ticket.via).toEqual(ticketData.via);
    });
  });
});
