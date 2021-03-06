import jwt from "jsonwebtoken";
import { authModuleConfiguration } from "../configurations/AuthModuleConfiguration.js";
import { WrongAuthenticationTokenException } from "../exceptions/WrongAuthenticationTokenException.js";
import { SessionData } from "../types/auth.js";

/**
 * Create JWT access token
 * @param userId
 * @returns
 */
export const createAccessToken = (userId: string) => {
  const expiresIn = authModuleConfiguration.ACCESS_TOKEN_DURATION;
  const dataStoredInToken: SessionData = {
    userId: userId,
    tokenType: "ACCESS_TOKEN",
  };
  return jwt.sign(dataStoredInToken, authModuleConfiguration.JWT_SECRET, {
    expiresIn,
  });
};

/**
 * Create JWT refresh token
 * @param userId
 * @returns
 */
export const createRefreshToken = (userId: string) => {
  const expiresIn = authModuleConfiguration.REFRESH_TOKEN_DURATION;
  const dataStoredInToken: SessionData = {
    userId: userId,
    tokenType: "REFRESH_TOKEN",
  };
  return jwt.sign(dataStoredInToken, authModuleConfiguration.JWT_SECRET, {
    expiresIn,
  });
};

/**
 * Verify JWT token
 * @param token
 * @returns
 */
export const verifyToken = (token: string): SessionData => {
  try {
    return jwt.verify(token, authModuleConfiguration.JWT_SECRET) as SessionData;
  } catch (error) {
    throw new WrongAuthenticationTokenException();
  }
};

/**
 * Create generic token
 */
export const createGenericToken = (userId: string, expiresIn: number) => {
  const sessionData: SessionData = {
    userId: userId,
    tokenType: "GENERIC_TOKEN",
  };
  return jwt.sign(sessionData, authModuleConfiguration.JWT_SECRET, {
    expiresIn,
  });
};
