import { User } from "./modules/users/User";
import { Ticket } from "./modules/tickets/Ticket";
import { Organization } from "./modules/organizations/Organization";

const orgs: Array<Organization> = Organization.getMatchingOrgs({
  domain_names: "troll"
});

console.log(orgs);
