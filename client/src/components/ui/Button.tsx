"use client";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline" | "danger";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
  className?: string;
}

export default function Button({
  children,
  onClick,
  href,
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  fullWidth = false,
  loading = false,
  className = "",
}: ButtonProps) {
  const variants = {
    primary: { background: "var(--orange)", color: "white", border: "none" },
    secondary: { background: "var(--primary)", color: "white", border: "none" },
    outline: {
      background: "transparent",
      color: "var(--primary)",
      border: "1.5px solid var(--primary)",
    },
    danger: { background: "#DC2626", color: "white", border: "none" },
  };

  const sizes = {
    sm: { padding: "6px 14px", fontSize: "12px" },
    md: { padding: "12px 28px", fontSize: "14px" },
    lg: { padding: "16px 28px", fontSize: "15px" },
  };

  const styles = {
    ...variants[variant],
    ...sizes[size],
    width: fullWidth ? "100%" : "auto",
    borderRadius: "8px",
    fontWeight: "600",
    cursor: disabled || loading ? "not-allowed" : "pointer",

    textDecoration: "none",
    display: "inline-block",
  };

  // Agar href ho toh Link render karo
  if (href) {
    return (
      <Link
        href={href}
        style={styles}
        className={`hover:opacity-90 transition ${disabled || loading ? "opacity-70" : "opacity-100"} ${className}`}
      >
        {loading ? "Loading..." : children}
      </Link>
    );
  }

  // Warna Button render karo
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      style={styles}
      className={`hover:opacity-90 transition ${disabled || loading ? "opacity-70" : "opacity-100"} ${className}`}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
