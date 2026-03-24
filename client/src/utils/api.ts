const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const api = {
  post: async (endpoint: string, body: object) => {
    const res = await fetch(`${API_URL}${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(body),
    });
    return res.json();
  },

  get: async (endpoint: string) => {
    const res = await fetch(`${API_URL}${endpoint}`, {
      credentials: "include",
    });
    return res.json();
  },

  delete: async (endpoint: string) => {
    const res = await fetch(`${API_URL}${endpoint}`, {
      method: "DELETE",
      credentials: "include",
    });
    return res.json();
  },
};