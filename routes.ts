/**
 * An array of routes that are accessible to the public
 * these routes do nt require authentication
 * @type {string[]}
 */
export const publicRoutes = [
  "/"
];

/**
 * An array of routes that are used for authentication
 * these routes will redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes = [
  "/signin",
  "/signup",
  "/reset-password",
  "/request-reset-email",
  "/otp-auth/register",
  "/otp-auth/success",
  "/otp-auth/verification",
];


/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API
 * authentication purposes
 * @type {string[]}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after logging in
 * @type {string[]}
 */


export const DEFAULT_LOGIN_REDIRECT = "/dashboard";
export const DEFAULT_REGISTER_REDIRECT = "/opt-auth/verification"
export const DEFAULT_SUCCESS_REDIRECT = "/opt-auth/success"
