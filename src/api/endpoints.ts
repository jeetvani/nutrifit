// AUTH Endpoints
export const CHECK_EMAIL_ENDPOINT = "/api/users/check-email";
export const REGISTER_ENDPOINT = "/api/users";
export const LOGIN_ENDPOINT = "/api/users/login";
export const LOGOUT_ENDPOINT = "/api/users/logout";
export const REFRESH_TOKEN_ENDPOINT = "/api/users/refresh-token";
export const GET_ACCOUT_ENDPOINT = "/api/users/me";

// TRAININGS Endpoints
export const GET_DEFAULTS_TRAININGS_MOCKS_ENPOINTS =
  "/defaultTrainingGroup/mocks/all";
export const GET_DEFAULTS_TRAININGS_ENPOINTS = "/api/defaultTrainingGroup/all";
export const GET_USER_TRAININGS_ENPOINTS = "/api/userTraining/all";
export const CREATE_USER_TRAINING_ENPOINTS = "/api/userTraining/create";
export const DELETE_USER_TRAINING_ENPOINTS = "/api/userTraining/delete";
export const PLUS_COMPLETE_DAYS_ENPOINT = "/api/userTraining/completeDays/plus";

// PLANS Endpoints
export const PAYMENT_INTENT_ENPOINT = "/api/payments/plan";

// NUTRITION Endpints
export const GET_ALL_NUTRITION_ENPOINT = "/api/nutrition/all";

// FAVORITES Endpoint
export const GET_ALL_FAVORITES_ENPOINT = "/api/users/favorites";
export const ADD_FAVORITE_TRAINING_ENPOINT =
  "/api/users/favorites/training/add";
export const DELETE_FAVORITE_TRAINING_ENPOINT =
  "/api/users/favorites/training/delete";
export const ADD_FAVORITE_NUTRITION_ENPOINT =
  "/api/users/favorites/nutrition/add";
export const DELETE_FAVORITE_NUTRITION_ENPOINT =
  "/api/users/favorites/nutrition/delete";

// USER Endpoints
export const SET_USER_ENPOINT = "/api/users/set";
