"use client";

import { useState } from "react";
import Link from "next/link";
import { api } from "@/src/utils/api";
import { useRouter } from "next/navigation";
import { useAuth } from "@/src/context/AuthContext";
import Button from "@/src/components/ui/Button";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { setUser } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await api.post("/api/auth/login", formData);

      if (!data.success) {
        setError(data.message);
        return;
      }
      setUser(data.user);

      router.push("/");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-12"
      style={{ background: "var(--bg)" }}
    >
      <div className="w-full max-w-md">
        {/* Card */}
        <div
          className="bg-white rounded-2xl p-8"
          style={{ boxShadow: "0 4px 40px rgba(0,0,0,0.08)" }}
        >
          {/* Logo */}
          <div className="flex items-center gap-2 mb-8">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center"
              style={{ background: "var(--orange)" }}
            >
              <svg width="18" height="18" viewBox="0 0 16 16" fill="white">
                <path d="M8 1L1 7h2v7h4v-4h2v4h4V7h2z" />
              </svg>
            </div>
            <span
              className="font-bold text-xl"
              style={{ color: "var(--primary)" }}
            >
              bin<span style={{ color: "var(--orange)" }}>Adim</span>
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-2xl font-bold mb-1"
            style={{ color: "var(--primary)" }}
          >
            Welcome Back!
          </h1>
          <p className="text-sm mb-8" style={{ color: "var(--text-muted)" }}>
            Login to your account to continue
          </p>

          {/* Error */}
          {error && (
            <div
              className="text-sm px-4 py-3 rounded-lg mb-6"
              style={{ background: "#FEE2E2", color: "#DC2626" }}
            >
              {error}
            </div>
          )}

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            method="POST"
            className="flex flex-col gap-5"
          >
            {/* Email */}
            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-medium"
                style={{ color: "var(--text-dark)" }}
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="abc@gmail.com"
                required
                className="w-full rounded-lg px-4 py-3 text-sm outline-none transition"
                style={{
                  border: "1.5px solid var(--border)",
                  color: "var(--text-dark)",
                }}
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-medium"
                style={{ color: "var(--text-dark)" }}
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
                className="w-full rounded-lg px-4 py-3 text-sm outline-none transition"
                style={{
                  border: "1.5px solid var(--border)",
                  color: "var(--text-dark)",
                }}
              />
            </div>

            {/* Submit */}

            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              loading={loading}
              className="mt-2"
            >
              Login
            </Button>
            {/* <button
              type="submit"
              disabled={loading}
              className="w-full text-white font-semibold py-3 rounded-lg transition hover:opacity-90 mt-2"
              style={{
                background: loading ? "var(--text-muted)" : "var(--orange)",
                border: "none",
                cursor: loading ? "not-allowed" : "pointer",
              }}
            >
              {loading ? "Logging in..." : "Login"}
            </button> */}
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div
              className="flex-1 h-px"
              style={{ background: "var(--border)" }}
            />
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>
              or
            </span>
            <div
              className="flex-1 h-px"
              style={{ background: "var(--border)" }}
            />
          </div>

          {/* Signup Link */}
          <p
            className="text-center text-sm"
            style={{ color: "var(--text-muted)" }}
          >
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="font-semibold hover:opacity-70 transition"
              style={{ color: "var(--orange)" }}
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
