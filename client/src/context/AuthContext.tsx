"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../utils/api";
import { useRouter } from "next/navigation";
interface User {
  _id: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  favourites: string[];
}
interface AuthContextType {
  user: User | null;
  loading: boolean;
  setUser: (user: User | null) => void;
  logout: () => Promise<void>;
  updateFavourites: (favourites: string[]) => void;
  
}
const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  setUser: () => {},
  logout: async () => {},
  updateFavourites: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await api.get("/api/auth/me");
        if (data.success) {
          setUser(data.user);
        } else {
          setUser(null);
        }
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const logout = async () => {
    try {
      await api.post("/api/auth/logout", {});
      setUser(null);
      router.push("/");
    } catch {
      console.error("Logout failed");
    }
  };
  const updateFavourites = (favourites: string[]) => {
  if (user) {
    setUser({ ...user, favourites });
  }
};

  return (
    <AuthContext.Provider value={{ user, loading, setUser, logout ,updateFavourites}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
