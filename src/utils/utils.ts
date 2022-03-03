import User from "../types/user";

/**
 * Create empty user function
 * @returns
 */
export default function createUser(): User {
  return {
    id: "",
    email: "",
    firstName: "",
    lastName: "",
    isActive: false,
    isOauth: false,
    password: "",
    roles: [],
    type: "",
  };
}