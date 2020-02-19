import { searchObject } from "../../utils/types";

export interface orgJson {
  _id: number;
  url: string;
  external_id: string;
  name: string;
  domain_names: Array<string>;
  created_at: string;
  details?: string | null;
  shared_tickets: boolean;
  tags: Array<string>;
}

export interface orgQuery {
  _id?: number;
  url?: string;
  external_id?: string;
  name?: string;
  domain_names?: string;
  created_at?: string;
  details?: string;
  shared_tickets?: boolean;
  tags?: string;
}

export const orgSearchFields: Array<searchObject> = [
  { title: "_id", type: "number" },
  { title: "url", type: "string" },
  { title: "external_id", type: "string" },
  { title: "name", type: "string" },
  { title: "dommain_names", type: "string" },
  { title: "created_at", type: "date" },
  { title: "details", type: "string" },
  { title: "shared_tickets", type: "boolean" },
  { title: "tags", type: "string" }
];
