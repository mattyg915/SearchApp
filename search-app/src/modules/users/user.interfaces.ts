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

export const userSearchFields: Array<string> = [
  "_id",
  "url",
  "external_id",
  "name",
  "alias",
  "created_at",
  "active",
  "verified",
  "shared",
  "locale",
  "timezone",
  "last_login_at",
  "email",
  "phone",
  "signature",
  "organization_id",
  "tags",
  "suspended",
  "role"
];
