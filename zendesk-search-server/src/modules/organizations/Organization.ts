import { orgObject } from "./orgObject.interfaces";

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
    date!: string;
    details!: string;
    shared_tickets!: boolean;
    tags!: Array<string>;

    constructor(orgObj: orgObject) {
        Object.assign(this, orgObj);
    }
 }