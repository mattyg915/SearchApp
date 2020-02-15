import users from "../../data/users.json"

/**
 * User class contains data and functions related to an
 * user
 */

 export class user {
    _id!: number;
    url!: string;
    external_id!: string;
    name!: string;
    alias!: string;
    created_at!: Date;
    
    tags!: Array<string>;
    

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
            data["created_at"] = data["created_at"].replace(/\s/g, '');

            newUsers.push(
                new user({
                    _id: data["_id"],
                    url: data["url"],
                    external_id: data["external_id"],
                    created_at: new Date(data["created_at"]),
                    
                })
            );
        }

        return newUsers;
    }
 }