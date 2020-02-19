import { searchObject } from "../../utils/types";

export interface userJson {
  _id: number;
  url: string;
  external_id: string;
  name: string;
  alias?: string;
  created_at: string;
  active: boolean;
  verified?: boolean;
  shared: boolean;
  locale?: string;
  timezone?: string;
  last_login_at: string;
  email?: string;
  phone: string;
  signature: string;
  organization_id?: number;
  tags: Array<string>;
  suspended: boolean;
  role: string;
}

export interface userQuery {
  _id?: number;
  url?: string;
  external_id?: string;
  name?: string;
  alias?: string;
  created_at?: string;
  active?: boolean;
  verified?: boolean;
  shared?: boolean;
  locale?: string;
  timezone?: string;
  last_login_at?: string;
  email?: string;
  phone?: string;
  signature?: string;
  organization_id?: number;
  tags?: string;
  suspended?: boolean;
  role?: string;
}

export const userSearchFields: Array<searchObject> = [
  { title: "_id", type: "number" },
  { title: "url", type: "string" },
  { title: "external_id", type: "string" },
  { title: "name", type: "string" },
  { title: "alias", type: "string" },
  { title: "created_at", type: "date" },
  { title: "active", type: "boolean" },
  { title: "verified", type: "boolean" },
  { title: "shared", type: "boolean" },
  { title: "locale", type: "string" },
  { title: "timezone", type: "string" },
  { title: "last_login_at", type: "date" },
  { title: "email", type: "string" },
  { title: "phone", type: "string" },
  { title: "signature", type: "string" },
  { title: "organization_id", type: "number" },
  { title: "tags", type: "string" },
  { title: "suspended", type: "boolean" },
  { title: "role", type: "string" }
];
