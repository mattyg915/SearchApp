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
