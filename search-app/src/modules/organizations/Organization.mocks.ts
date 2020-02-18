import { orgJson } from "./organizations.interfaces";

export const orgJsonMock: orgJson = {
  _id: 1234,
  url: "mockOrg@mock.org",
  external_id: "1234567890",
  name: "MockOrg",
  domain_names: ["mock"],
  created_at: "2016-05-21T11:10:28-10:00",
  shared_tickets: false,
  tags: ["tag1", "tag2"]
};
