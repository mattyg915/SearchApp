import { User } from "./modules/users/User";

const users: Array<User> = User.getMatchingUsers({
  tags: "Spring"
});

console.log(users);
