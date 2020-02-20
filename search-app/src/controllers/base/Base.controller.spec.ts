import { BaseController } from "./Base.controller";
import { searchService } from "../../services/search/searchService";
import { orgJsonMock } from "../../../src/modules/organizations/Organization.mocks";

describe("BaseController", () => {
  const dataMockOne = { ...orgJsonMock };
  dataMockOne.name = "MockOrgOne";
  const dataMockTwo = { ...orgJsonMock };
  dataMockTwo.name = "MockOrgTwo";

  const orgData = [dataMockOne, dataMockTwo];
  const ctrl = new BaseController();

  describe("getMatchingData", () => {
    it("calls string search for string params", () => {
      const stringSearchSpy = jest.spyOn(searchService, "searchStringField");
      const query = { name: "orgName" };
      ctrl.getMatchingData(query, [orgJsonMock]);

      expect(stringSearchSpy).toBeCalled();
    });

    it("calls number search for number params", () => {
      const numberSearchSpy = jest.spyOn(searchService, "searchNumberField");
      const query = { _id: 123 };
      ctrl.getMatchingData(query, [orgJsonMock]);

      expect(numberSearchSpy).toBeCalled();
    });

    it("calls boolean search for boolean params", () => {
      const booleanSearchSpy = jest.spyOn(searchService, "searchBooleanField");
      const query = { shared_tickets: true };
      ctrl.getMatchingData(query, [orgJsonMock]);

      expect(booleanSearchSpy).toBeCalled();
    });

    it("calls array search for array params", () => {
      const arraySearchSpy = jest.spyOn(searchService, "searchStringArray");
      const query = { tags: "mockTag" };
      ctrl.getMatchingData(query, [orgJsonMock]);

      expect(arraySearchSpy).toBeCalled();
    });

    it("calls date search for date params", () => {
      const dateSearchSpy = jest.spyOn(searchService, "searchDateField");
      const query = { created_at: { date: "2000-01-01" } };
      ctrl.getMatchingData(query, [orgJsonMock]);

      expect(dateSearchSpy).toBeCalled();
    });

    it("returns an array containing only results that match", () => {
      const query = { name: "MockOrgOne" };
      const orgResult = ctrl.getMatchingData(query, orgData);

      expect(orgResult).toEqual([dataMockOne]);
    });

    it("returns an empty array when there are no matches", () => {
      const query = { name: "MockOrgThree" };
      const orgResult = ctrl.getMatchingData(query, orgData);

      expect(orgResult).toEqual([]);
    });

    it("returns no results when an undefined field is searched", () => {
      const query = { details: "some details" };
      const orgResult = ctrl.getMatchingData(query, orgData);

      expect(orgResult).toEqual([]);
    });

    it("returns results where a field is null or undefined if that's the search value", () => {
      const query = { details: undefined };
      const orgResult = ctrl.getMatchingData(query, orgData);

      expect(orgResult).toEqual([dataMockOne, dataMockTwo]);
    });
  });
});
