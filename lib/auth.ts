import { LoginResponse } from "@/types/account";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";

export const authService = {
  async login(email: string, password: string): Promise<LoginResponse | null> {
    try {
      const response = await axios.post(`${API_URL}/account/login`, {
        email,
        password,
      });

      if (response.status === 201) {
        const { token } = response.data.account;
        localStorage.setItem("token", token);
        localStorage.setItem("account", response.data.account);
      }

      return response.data.account;
    } catch (error) {
      console.log("Login failed:", error);
      return null;
    }
  },
  getUser(): any | null {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No user token found");

      const payload = JSON.parse(atob(token.split(".")[1]));
      if (!payload) throw new Error("No user payload found");

      return payload;
    } catch (error) {
      console.log("Error retrieving user:", error);
      return null;
    }
  },

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("account");
    window.location.href = "/";
  },

  async validate() {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No token found");

      const response = await axios.post(`${API_URL}/account/checktoken`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data.account;
    } catch (error) {
      console.log("Error fetching protected data:", error);
      return null;
    }
  },
};