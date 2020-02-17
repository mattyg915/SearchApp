import { User } from "./User";
import { userJsonMock } from "./user.mocks";
import { userJson } from "./user.interfaces";

describe("User module", () => {
  let user: User;
  let userData: userJson = userJsonMock;

  beforeAll(() => {
    user = new User(userData);
  });

  describe("Constructor", () => {
    it("creates a new user from valid data", () => {
      expect(user._id).toEqual(userData._id);
      expect(user.url).toEqual(userData.url);
      expect(user.external_id).toEqual(userData.external_id);
      expect(user.name).toEqual(userData.name);
      expect(user.alias).toBe(userData.alias);
      expect(user.created_at).toEqual(new Date(userData.created_at));
      expect(user.active).toEqual(userData.active);
      expect(user.verified).toBe(userData.verified);
      expect(user.shared).toEqual(userData.shared);
      expect(user.locale).toEqual(userData.locale);
      expect(user.timezone).toEqual(userData.timezone);
      expect(user.last_login_at).toEqual(new Date(userData.last_login_at));
      expect(user.email).toEqual(userData.email);
      expect(user.phone).toEqual(userData.phone);
      expect(user.signature).toEqual(userData.signature);
      expect(user.organization_id).toEqual(userData.organization_id);
      expect(user.tags).toEqual(userData.tags);
      expect(user.suspended).toEqual(userData.suspended);
      expect(user.role).toEqual(userData.role);
    });
  });

  describe("getFieldValue", () => {
    it("returns value of provided field", () => {
      const name: string = user.getFieldValue("name");
      expect(name).toEqual(user.name);
    });
    it("throws an error when a field that doesn't exist is provided", () => {
      expect(() => {
        const lastName: string = user.getFieldValue("last_name");
      }).toThrowError("Field last_name does not exist on this collection");
    });
  });
});
