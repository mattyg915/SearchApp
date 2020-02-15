import { organization } from "./modules/organizations/Organization";

const orgs: Array<organization> = organization.getOrgsFromorgData();

console.log(orgs);