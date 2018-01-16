import { get, put, remove } from "./storage";

const SESSION_TOKEN = "SESSION_TOKEN";
// Getters
export const getSessionToken = () => get(SESSION_TOKEN);

// Setters
export const setSessionId = sessionToken => put(SESSION_ID, sessionToken);

// Deleters
export const removeSessionToken = () => remove(SESSION_ID);
