import users from "../../data/users.json"
import { deflateRaw } from "zlib";

/**
 * User class contains data and functions related to an
 * user
 */

 export class user {
    _id!: number;
    url!: string;
    external_id!: string;
    name!: string;
    alias!: string | undefined;
    created_at!: Date;
    active!: boolean;
    verified!: boolean | undefined;
    shared!: boolean;
    locale!: string | undefined;
    timezone!: string | undefined;
    last_login_at!: Date;
    email!: string | undefined;
    phone!: string;
    signature!: string;
    organization_id!: number | undefined;
    tags!: Array<string>;
    suspended!: boolean;
    role!: string;
    
    constructor(userObj: user) {
        Object.assign(this, userObj);
    }

    /**
     * Parses the users.json file into
     * an array of user objects
     */
    static getOrgsFromorgData(): Array<user> {
        const newUsers: Array<user> = []; 

        for (let data of users) {
            // date strings in the data contain a space that can't be parsed properly
            data.created_at = data.created_at.replace(/\s/g, '');
            data.last_login_at = data.last_login_at.replace(/\s/g, '');

            newUsers.push(
                new user({
                    _id: data._id,
                    url: data.url,
                    external_id: data.external_id,
                    name: data.name,
                    alias: data.alias,
                    created_at: new Date(data.created_at),
                    active: data.active,
                    verified: data.verified,
                    shared : data.shared,
                    locale : data.locale,
                    timezone : data.timezone,
                    last_login_at : new Date(data.last_login_at),
                    email : data.email,
                    phone: data.phone,
                    signature : data.signature,
                    organization_id : data.organization_id,
                    tags : data.tags,
                    suspended : data.suspended,
                    role : data.role
                })
            );
        }

        return newUsers;
    }
 }