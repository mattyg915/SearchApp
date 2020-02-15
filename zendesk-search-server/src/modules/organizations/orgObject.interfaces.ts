import { organization } from "./Organization";

/**
 * Interface for a json object representing an organization
 */
export interface orgObject {
    _id: number;
    url: string;
    external_id: string;
    name: string;
    domain_names: Array<string>;
    date: string;
    details: string;
    shared_tickets: boolean;
    tags: Array<string>;
}

/**
 * 
 * @param orgData 
 */
export function getOrgsFromorgData(json: JSON): Array<organization> {
    const orgs: Array<organization> = []; 
    const orgData: Array<orgObject> = [];

    for (let org of orgData) {
        orgs.push(new organization(org));
    }

    return orgs;
}