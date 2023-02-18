import { createContext } from "react";

function noop() {}

export const AuthContext = createContext({
    tokem: null,
    userId: null,
    login: noop,
    logout: noop,
    isAuthenticated: false
})