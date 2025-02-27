import axios from "axios";
import { authService } from "./auth";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";
export const apiService = {

  async createProfile(name: string, email: string, password: string): Promise<string> {
    try {
      const response = await axios.post(`${API_URL}/account/signup`, {
        name, email, password
      });

      if (response.status === 201) {
        authService.login(email, password);
      }

      const token = localStorage.getItem("token");
      if (!token) throw new Error("No token found");

      return token;

    } catch (error) {
      console.error("Error fetching protected data:", error);
      return "Error fetching protected data";
    }
  },
};
