import { Base } from "../Base/Base";
import { userJson } from "./user.interfaces";

/**
 * User class contains data and functions related to an
 * user
 */

export class User extends Base {
  _id!: number;
  url!: string;
  external_id!: string;
  name!: string;
  alias?: string;
  created_at!: Date;
  active!: boolean;
  verified?: boolean;
  shared!: boolean;
  locale?: string;
  timezone?: string;
  last_login_at!: Date;
  email?: string;
  phone!: string;
  signature!: string;
  organization_id?: number;
  tags!: Array<string>;
  suspended!: boolean;
  role!: string;

  constructor(userData: userJson) {
    super();

    // Scrub spaces, the Date() constructor doesn't like them
    userData.created_at = userData.created_at.replace(/\s/g, "");
    userData.last_login_at = userData.last_login_at.replace(/\s/g, "");

    this._id = userData._id;
    this.url = userData.url;
    this.external_id = userData.external_id;
    this.name = userData.name;
    this.alias = userData.alias;
    this.created_at = new Date(userData.created_at);
    this.active = userData.active;
    this.verified = userData.verified;
    this.shared = userData.shared;
    this.locale = userData.locale;
    this.timezone = userData.timezone;
    this.last_login_at = new Date(userData.last_login_at);
    this.email = userData.email;
    this.phone = userData.phone;
    this.signature = userData.signature;
    this.organization_id = userData.organization_id;
    this.tags = userData.tags;
    this.suspended = userData.suspended;
    this.role = userData.role;
  }
}
