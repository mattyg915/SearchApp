import { User } from "./modules/users/User";
import { Ticket } from "./modules/tickets/Ticket";
import { Organization } from "./modules/organizations/Organization";
import { UserController } from "./controllers/user/User.controller";
import { TicketController } from "./controllers/ticket/Ticket.controller";

const tickets: Array<Ticket> = TicketController.getMatchingTickets({
  assignee_id: 24
});

console.log(tickets);
console.log(tickets[0].getFieldValue("tags"));
