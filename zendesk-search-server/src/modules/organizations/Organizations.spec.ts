import { Organization } from "./Organization";
import { orgJsonMock } from "./Organization.mocks";

describe("Organization module", () => {
  let org;
  let orgData = orgJsonMock;

  describe("Constructor", () => {
    it("creates a new organization from valid data", () => {
      org = new Organization(orgData);
      expect(org._id).toEqual(orgData._id);
      expect(org.created_at).toEqual(new Date(orgData.created_at));
      expect(org.details).toBe(undefined);
    });
  });
});
