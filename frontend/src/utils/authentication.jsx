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
            const response = await api.post("/auth/login", { username, password })
            localStorage.setItem("token", response.data.token)
            setError(null)
            return true
        } catch (err) {
            setError(err.response?.data?.message || "An error occurred during Login.")
            return false
        }
    };
    */

    // Mocked up version
    const login = async (username, password) => {
        if (username && password) {
            localStorage.setItem("token", "mocked-token")
            setError(null)
            return true
        } else {
            setError("Invalid username or password.")
            return false
        }
    };

    return { login, error };
}

function logout() {
    localStorage.removeItem("token")
}

function useRegister() {
    const [error, setError] = useState(null);
    
    /*
    const register = async (step, {data}) => {
        try {
            await api.post("/auth/register", {step, data})
            setError(null)
            return true
        } catch (err) {
            setError(err.response?.data?.message || "An error occurred during Registration.")
            return false
        }
    }; */

    // Mocked up version
    const register = async (step, {data}) => {
        switch (step) {
            case 1:
                if (data.firstName && data.lastName && data.id) {
                    setError(null)
                    return true
                } else {
                    setError("Step 1 error.")
                    return false
                }

            case 2:
                if (data.country && data.address && data.city && data.state && data.zipCode && data.email) {
                    setError(null)
                    return true
                } else {
                    setError("Step 2 error.")
                    return false
                }

            case 3:
                if (data.password) {
                    setError(null)
                    return true
                } else {
                    setError("Step 3 error.")
                    return false
                }
                
            default:
                setError("Invalid step.")
                return false
        }
    };

    return { register, error }
}

export { isLoggedIn, useLogin, logout, useRegister };