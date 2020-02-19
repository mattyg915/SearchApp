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

export const ticketSearchFields: Array<string> = [
  "_id",
  "url",
  "external_id",
  "created_at",
  "type",
  "subject",
  "description",
  "priority",
  "status",
  "submitter_id",
  "assignee_id",
  "organization_id",
  "tags",
  "has_incidents",
  "due_at",
  "via"
];
