import { Address, Phone } from "./general.js";

/**
 * User
 */
export type User = {
  /** Id */
  id: string;
  /** IsActive */
  isActive: boolean;
  /** Email (username) */
  email: string;
  /** Password  */
  password: string;
  /** First name */
  firstName: string;
  /** Last name */
  lastName: string;
  /** Type */
  type: string;
  /** Role */
  roles: string[];
  /** Is oauth user ? */
  isOauth: boolean;
  /** address */
  address: Address;
  /** Phone */
  phone: Phone;
  /** Picture url */
  picture: string;
};
