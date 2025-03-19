import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

class AuthService {
  constructor() {
    this.client = new Client()
      .setEndpoint(conf.appwriteUrl) // Your Appwrite API endpoint
      .setProject(conf.appwriteProjectId); // Your Appwrite project ID

    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(ID.unique(), email, password, name);
      if (userAccount) {
        // Automatically log in after account creation
        return this.login({ email, password });
      }
      return userAccount;
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      // Delete all active sessions before creating a new one
      await this.account.deleteSessions();
      console.log("All active sessions deleted.");

      // Create a new session
      const session = await this.account.createEmailPasswordSession(email, password);
      console.log("New session created:", session);
      return session;
    } catch (error) {
      console.error("Error during login:", error);
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.error("Error fetching current user:", error);
      return null;
    }
  }

  async logout() {
    try {
      // Delete all sessions for the current user
      await this.account.deleteSessions();
      console.log("Logged out successfully.");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  }
}

const authService = new AuthService();
export default authService;
