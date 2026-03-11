import api from "../services/api.jsx";
import { useState } from "react";

function isLoggedIn() {
    const token = localStorage.getItem("token");
    return !!token;
}

function useLogin() {
    const [error, setError] = useState(null);

    /*
    const login = async (username, password) => {
        try {
            const response = await api.post("/auth/login", { username, password });
            localStorage.setItem("token", response.data.token);
            setError(null);
        } catch (err) {
            setError(err.response?.data?.message || "An error occurred during Login.");
        }
    }; */

    // Mocked up version
    const login = async (username, password) => {
        if (username && password) {
            await localStorage.setItem("token", "mocked-token");
            setError(null);
        } else {
            setError("Invalid username or password.");
        }
    };

    return { login, error };
}

function logout() {
    localStorage.removeItem("token");
}

function useRegister() {
    const [error, setError] = useState(null);
    
    /*
    const register = async (username, password) => {
        try {
            await api.post("/auth/register", { username, password });
            setError(null);
        } catch (err) {
            setError(err.response?.data?.message || "An error occurred during Registration.");
        }
    }; */

    // Mocked up version
    const register = async (username, password) => {
        if (username && password) {
            setError(null);
        } else {
            setError("Username and password are required.");
        }
    };

    return { register, error };
}

export { isLoggedIn, useLogin, logout, useRegister };