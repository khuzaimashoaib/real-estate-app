"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/src/context/AuthContext";
import Button from "../ui/Button";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, loading, logout } = useAuth();

  return (
    <nav
      className="w-full z-50 sticky top-0"
      style={{ background: "var(--primary)" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 no-underline">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: "var(--orange)" }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
              <path d="M8 1L1 7h2v7h4v-4h2v4h4V7h2z" />
            </svg>
          </div>
          <span className="text-white font-bold text-lg">
            bin<span style={{ color: "var(--gold)" }}>Adim</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          
          <Link
            href="/properties"
            className="text-white/60 hover:text-white text-sm transition"
          >
            Properties
          </Link>
          <Link
            href="/properties?type=sale"
            className="text-white/60 hover:text-white text-sm transition"
          >
            Buy
          </Link>
          <Link
            href="/properties?type=rent"
            className="text-white/60 hover:text-white text-sm transition"
          >
            Rent
          </Link>
          <Link
            href="/about"
            className="text-white/60 hover:text-white text-sm transition"
          >
            About
          </Link>
        </div>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center gap-3">
          {loading ? (
            <div
              className="w-20 h-8 rounded-lg animate-pulse"
              style={{ background: "rgba(255,255,255,0.1)" }}
            />
          ) : user ? (
            <>
              <Link
                href="/dashboard"
                className="text-sm no-underline"
                style={{ color: "rgba(255,255,255,0.8)" }}
                
              >
                👋 {user.name.split(" ")[0]}
              </Link>
              
              <button
                onClick={logout}
                className="text-sm px-4 py-2 rounded-lg cursor-pointer hover:opacity-80 transition"
                style={{
                  background: "transparent",
                  color: "rgba(255,255,255,0.7)",
                  border: "1.5px solid rgba(255,255,255,0.3)",
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-sm no-underline text-white/70 hover:text-white transition"
                // style={{ color: "rgba(255,255,255,0.8)" }}
              >
                Login
              </Link>
              <Button variant="primary" size="md" fullWidth children="List Property" href="/signup"/>  
              {/* <Link
                href="/signup"
                className="text-sm font-medium px-4 py-2 rounded-lg text-white hover:opacity-90 transition no-underline"
                style={{ background: "var(--orange)" }}
              >
                List Property
              </Link> */}
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white bg-transparent border-none cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-5 flex flex-col gap-3"
          style={{ background: "var(--primary-light)" }}
        >
          <Link
            href="/properties"
            className="text-sm py-2 no-underline"
            style={{
              color: "rgba(255,255,255,0.8)",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            Properties
          </Link>
          <Link
            href="/properties?type=sale"
            className="text-sm py-2 no-underline"
            style={{
              color: "rgba(255,255,255,0.8)",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            Buy
          </Link>
          <Link
            href="/properties?type=rent"
            className="text-sm py-2 no-underline"
            style={{
              color: "rgba(255,255,255,0.8)",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            Rent
          </Link>
          <Link
            href="/about"
            className="text-sm py-2 no-underline"
            style={{
              color: "rgba(255,255,255,0.8)",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            About
          </Link>
          <div className="flex gap-3 mt-2">
            {user ? (
              <>
                <Link
                  href="/dashboard"
                  className="text-sm no-underline"
                  style={{ color: "rgba(255,255,255,0.8)" }}
                >
                  👋 {user.name.split(" ")[0]}
                </Link>
                <button
                  onClick={logout}
                  className="text-sm px-4 py-2 rounded-lg cursor-pointer"
                  style={{
                    background: "transparent",
                    color: "white",
                    border: "1.5px solid rgba(255,255,255,0.3)",
                  }}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-sm no-underline"
                  style={{ color: "rgba(255,255,255,0.8)" }}
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="text-sm font-medium px-4 py-2 rounded-lg text-white no-underline"
                  style={{ background: "var(--orange)" }}
                >
                  List Property
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
