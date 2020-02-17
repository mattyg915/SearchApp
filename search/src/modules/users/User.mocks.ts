import { userJson } from "./user.interfaces";

export const userJsonMock: userJson = {
  _id: 1234,
  url: "mockuser@mock.user",
  external_id: "1234567890",
  name: "Mock Guy",
  alias: undefined,
  created_at: "2016-05-21T11:10:28-10:00",
  active: true,
  verified: false,
  shared: true,
  locale: "wisco",
  timezone: "central US",
  last_login_at: "2013-08-04T01:03:27-10:00",
  email: "fake@artificial.notreal",
  phone: "867-5309",
  signature: "ticket crusher",
  organization_id: 12345,
  tags: ["place"],
  suspended: false,
  role: "god emperor"
};
