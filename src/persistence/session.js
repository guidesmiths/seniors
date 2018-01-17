import { get, put, remove } from "./storage";

const SESSION_TOKEN = "SESSION_TOKEN";
// Getters
export const getSessionToken = () => get(SESSION_TOKEN);

// Setters
export const setSessionToken = sessionToken => put(SESSION_TOKEN, sessionToken);

// Deleters
export const removeSessionToken = () => remove(SESSION_TOKEN);

export const isAuthenticated = () => {
	const token = getSessionToken();
	return token !== null ? true : false;
};