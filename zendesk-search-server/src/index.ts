import { User } from "./modules/users/User";
import { Ticket } from "./modules/tickets/Ticket";
import { Organization } from "./modules/organizations/Organization";
import { UserController } from "./controllers/user/User.controller";
import { TicketController } from "./controllers/ticket/Ticket.controller";
import { OrganizationController } from "./controllers/organization/Organization.controller";

const orgs: Array<Organization> = OrganizationController.getMatchingOrgs({
  domain_names: "kage"
});

console.log(orgs);
console.log(orgs[0].getFieldValue("name"));
