import { Organization } from "./Organization";
import { orgJsonMock } from "./Organization.mocks";
import { orgJson } from "./organizations.interfaces";

describe("Organization module", () => {
  let org: Organization;
  let orgData: orgJson = orgJsonMock;

  describe("Constructor", () => {
    it("creates a new organization from valid data", () => {
      org = new Organization(orgData);
      expect(org._id).toEqual(orgData._id);
      expect(org.url).toEqual(orgData.url);
      expect(org.external_id).toEqual(orgData.external_id);
      expect(org.name).toEqual(orgData.name);
      expect(org.domain_names).toEqual(orgData.domain_names);
      expect(org.created_at).toEqual(new Date(orgData.created_at));
      expect(org.details).toBe(undefined);
      expect(org.shared_tickets).toEqual(orgData.shared_tickets);
      expect(org.tags).toEqual(orgData.tags);
    });
  });
});
