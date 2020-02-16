import tickets from "../../data/tickets.json"

/**
 * Ticket class contains data and functions related to an
 * ticket
 */

 export class ticket {
    _id!: string;
    url!: string;
    external_id!: string;
    created_at!: Date;
    type!: string | undefined;
    subject!: string;
    description!: string | undefined;
    priority!: string;
    status!: string;
    submitter_id!: number;
    assignee_id!: number | undefined;
    organization_id!: number | undefined;
    tags!: Array<string>;
    has_incidents!: boolean;
    due_at!: Date | undefined;
    via!: string;

    constructor(ticketObj: ticket) {
        Object.assign(this, ticketObj);
    }

    /**
     * Parses the tickets.json file into
     * an array of ticket objects
     */
    static getTicketsFromData(): Array<ticket> {
        const ticks: Array<ticket> = []; 

        for (let data of tickets) {
            // date strings in the data contain a space that can't be parsed properly
            data["created_at"] = data["created_at"].replace(/\s/g, '');
            if (data["due_at"]) {
                data["due_at"] = data["due_at"].replace(/\s/g, '');
            }

            ticks.push(
                new ticket({
                    _id: data["_id"],
                    url: data["url"],
                    external_id: data["external_id"],
                    created_at: new Date(data["created_at"]),
                    type: data["type"],
                    subject: data["subject"],
                    description: data["description"],
                    priority: data["priority"],
                    status: data["status"],
                    submitter_id: data["submitter_id"],
                    assignee_id: data["assignee_id"],
                    organization_id: data["organization_id"],
                    tags: data["tags"],
                    has_incidents: data["has_incidents"],
                    due_at: data["due_at"] ? new Date(data["due_at"]) : undefined,
                    via: data["via"]
                })
            );
        }

        return ticks;
    }
 }