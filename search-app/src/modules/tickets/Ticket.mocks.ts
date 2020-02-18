import { ticketJson } from "./ticket.interfaces";

export const ticketJsonMock: ticketJson = {
  _id: "1234",
  url: "mockticket@mock.ticket",
  external_id: "1234567890",
  created_at: "2016-05-21T11:10:28-10:00",
  type: "problem",
  subject: "a fake ticket",
  description: "just for testing",
  priority: "critical",
  status: "new",
  submitter_id: 123,
  assignee_id: 1234,
  organization_id: 12345,
  tags: ["place"],
  has_incidents: true,
  due_at: "2016-07-31T02:37:50-10:00",
  via: "web"
};
