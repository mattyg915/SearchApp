import { User } from "./modules/users/User";
import { Ticket } from "./modules/tickets/Ticket";

const tickets: Array<Ticket> = Ticket.getMatchingTickets({
  tags: "ohio"
});

console.log(tickets);
