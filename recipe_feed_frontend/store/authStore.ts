import create from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";
import { IUser } from "../types";
import { BASE_URL } from "../utils";

type AuthStore = {
    userProfile: IUser | null,
    allUsers: IUser [],
    addUser: (user: IUser) => void;
    removeUser: VoidFunction;
    fetchAllUsers: () => Promise<void>
}

const authStore = (set: any): AuthStore => ({
  userProfile: null,
  allUsers: [],

  addUser: (user: any) => set({ userProfile: user }),
  removeUser: () => set({ userProfile: null }),
  fetchAllUsers: async () => {
    const response = await axios.get(`${BASE_URL}/api/users`);

    set({ allUsers: response.data });
  },
});

const useAuthStore = create(
  persist(authStore, {
    name: "auth",
  })
);

export default useAuthStore;
