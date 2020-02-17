import { UserController } from "./User.controller";
import { userJsonMock } from "../../modules/users/User.mocks";
import { User } from "../../modules/users/User";

describe("UserController", () => {
  const ctrl: UserController = new UserController([userJsonMock]);

  describe("getMatchingUser", () => {
    it("calls the base controller search method", () => {
      const baseControllerSpy = jest.spyOn(ctrl, "getMatchingData");
      ctrl.getMatchingUsers({ name: "MockUser" });
      expect(baseControllerSpy).toBeCalled();
    });

    it("returns an array of User objects that match the search", () => {
      const users = ctrl.getMatchingUsers({ name: "Mock" });
      expect(users).toEqual([new User(userJsonMock)]);
    });
  });
});
