export const navCategories = [
  {
    name: "Plants",
    route: "/store/?pageNum=1&pageSize=6&category=Plants",
  },
  {
    name: "Pots",
    route: "/store/?pageNum=1&pageSize=6&category=Pots%20and%20Vases",
  },
  {
    name: "Gardening Tools",
    route: "/store/?pageNum=1&pageSize=6&category=Gardening%20Tools",
  },
];

export const SITE_NAME = "The Garden Hub";

export const SERVER_ERROR_MSG = "Oops! Something went wrong";
export const SIGN_IN_MSG = "You've been logged out. Sign in to procede";
export const OUT_OF_STOCK_MSG =
  "Oops, looks like some of your basket items are unavailable!";
export const NONE_AVAILABLE_MSG =
  "We're very sorry, it looks like all products were unavailable";
export const SUCCESSFUL_REG_MSG =
  "Registration successful! You may now log in.";
export const REG_ERROR_MSG = "Registration failed. Please check credentials";
export const USER_EXISTS_ERROR_MSG =
  "Email already registered. Log in or create a new account";
export const PASSWORD_HINT = {
  heading: "Password must contain:",
  criteria: [
    "At least 8 characters",
    "At least 1 uppercase letter",
    "At least 1 lowercase letter",
    "At least 1 number",
    "At least 1 special character (@$!%*?&)",
  ],
};
