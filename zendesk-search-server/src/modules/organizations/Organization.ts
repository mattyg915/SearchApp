import organizations from "../../data/organizations.json"

/**
 * Organization class contains data and functions related to an
 * organization
 */

 export class organization {
    _id!: number;
    url!: string;
    external_id!: string;
    name!: string;
    domain_names!: Array<string>;
    created_at!: Date;
    details!: string | null;
    shared_tickets!: boolean;
    tags!: Array<string>;

    constructor(orgObj: organization) {
        Object.assign(this, orgObj);
    }

    /**
     * Parses the organizations.json file into
     * an array of organization objects
     */
    static getOrgsFromorgData(): Array<organization> {
        const orgs: Array<organization> = []; 

        for (let data of organizations) {
            // date strings in the data contain a space that can't be parsed properly
            data["created_at"] = data["created_at"].replace(/\s/g, '');

            orgs.push(
                new organization({
                    _id: data["_id"],
                    url: data["url"],
                    external_id: data["external_id"],
                    name: data["name"],
                    domain_names: data["domain_names"],
                    created_at: new Date(data["created_at"]),
                    details: data["details"],
                    shared_tickets: data["shared_tickets"],
                    tags: data["tags"]
                })
            );
        }

        return orgs;
    }
 }