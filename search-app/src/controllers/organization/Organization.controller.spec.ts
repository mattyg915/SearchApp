import { OrganizationController } from "./Organization.controller";
import { orgJsonMock } from "../../../src/modules/organizations/Organization.mocks";
import { Organization } from "../../../src/modules/organizations/Organization";

describe("OrganizationController", () => {
  const ctrl: OrganizationController = new OrganizationController([
    orgJsonMock
  ]);

  describe("getMatchingOrgs", () => {
    it("calls the base controller search method", () => {
      const baseControllerSpy = jest.spyOn(ctrl, "getMatchingData");
      ctrl.getMatchingOrgs({ name: "MockOrg" });
      expect(baseControllerSpy).toBeCalled();
    });

    it("returns an array of Organization objects that match the search", () => {
      const orgs = ctrl.getMatchingOrgs({ name: "Mock" });
      expect(orgs).toEqual([new Organization(orgJsonMock)]);
    });
  });
});
