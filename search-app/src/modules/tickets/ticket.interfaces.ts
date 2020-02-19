import { searchObject } from "../../utils/types";

export interface ticketJson {
  _id: string;
  url: string;
  external_id: string;
  created_at: string;
  type?: string;
  subject: string;
  description?: string;
  priority: string;
  status: string;
  submitter_id: number;
  assignee_id?: number;
  organization_id?: number;
  tags: Array<string>;
  has_incidents: boolean;
  due_at?: string;
  via: string;
}

export interface ticketQuery {
  _id?: string;
  url?: string;
  external_id?: string;
  created_at?: string;
  type?: string;
  subject?: string;
  description?: string;
  priority?: string;
  status?: string;
  submitter_id?: number;
  assignee_id?: number;
  organization_id?: number;
  tags?: string;
  has_incidents?: boolean;
  due_at?: string;
  via?: string;
}

export const ticketSearchFields: Array<searchObject> = [
  { title: "_id", type: "string" },
  { title: "url", type: "string" },
  { title: "external_id", type: "string" },
  { title: "created_at", type: "date" },
  { title: "type", type: "string" },
  { title: "subject", type: "string" },
  { title: "description", type: "string" },
  { title: "priority", type: "string" },
  { title: "status", type: "string" },
  { title: "submitter_id", type: "number" },
  { title: "assignee_id", type: "number" },
  { title: "organization_id", type: "number" },
  { title: "tags", type: "string" },
  { title: "has_incidents", type: "boolean" },
  { title: "due_at", type: "date" },
  { title: "via", type: "string" }
];
