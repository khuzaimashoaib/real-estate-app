// "use client";

// import { useState } from "react";
// import Link from "next/link";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav
//       style={{ background: "var(--primary)" }}
//       className="z-50 sticky top-0 w-full"
//     >
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
//         {/* Logo */}
//         <Link href="/" className="flex items-center gap-2">
//           <div
//             style={{ background: "var(--orange)" }}
//             className="w-8 h-8 rounded-lg flex items-center justify-center"
//           >
//             <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
//               <path d="M8 1L1 7h2v7h4v-4h2v4h4V7h2z" />
//             </svg>
//           </div>
//           <span className="text-white font-semibold text-lg">
//             Estate<span style={{ color: "var(--gold)" }}>Hub</span>
//           </span>
//         </Link>

//         {/* Desktop Links */}
//         <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
//           <Link
//             href="/properties"
//             style={{
//               color: "rgba(255,255,255,0.7)",
//               fontSize: "14px",
//               textDecoration: "none",
//             }}
//           >
//             Properties
//           </Link>
//           <Link
//             href="/properties?type=sale"
//             style={{
//               color: "rgba(255,255,255,0.7)",
//               fontSize: "14px",
//               textDecoration: "none",
//             }}
//           >
//             Buy
//           </Link>
//           <Link
//             href="/properties?type=rent"
//             style={{
//               color: "rgba(255,255,255,0.7)",
//               fontSize: "14px",
//               textDecoration: "none",
//             }}
//           >
//             Rent
//           </Link>
//           <Link
//             href="/about"
//             style={{
//               color: "rgba(255,255,255,0.7)",
//               fontSize: "14px",
//               textDecoration: "none",
//             }}
//           >
//             About
//           </Link>
//         </div>

//         {/* Desktop Buttons */}
//         <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
//           {" "}
//           <Link
//             href="/login"
//             style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px" }}
//           >
//             Login
//           </Link>
//           <Link
//             href="/signup"
//             style={{
//               background: "var(--orange)",
//               color: "white",
//               fontSize: "14px",
//               fontWeight: "500",
//               padding: "8px 16px",
//               borderRadius: "8px",
//               textDecoration: "none",
//             }}
//           >
//             List Property
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           style={{ display: "none" }}
//           className="text-white"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? (
//             <svg
//               width="22"
//               height="22"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               viewBox="0 0 24 24"
//             >
//               <path d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           ) : (
//             <svg
//               width="22"
//               height="22"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               viewBox="0 0 24 24"
//             >
//               <path d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           )}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div
//           style={{ background: "var(--primary-light)" }}
//           className="md:hidden px-4 pb-4 flex flex-col gap-3"
//         >
//           <Link
//             href="/properties"
//             className="text-white/80 text-sm py-2 border-b border-white/10"
//           >
//             Properties
//           </Link>
//           <Link
//             href="/properties?type=sale"
//             className="text-white/80 text-sm py-2 border-b border-white/10"
//           >
//             Buy
//           </Link>
//           <Link
//             href="/properties?type=rent"
//             className="text-white/80 text-sm py-2 border-b border-white/10"
//           >
//             Rent
//           </Link>
//           <Link
//             href="/about"
//             className="text-white/80 text-sm py-2 border-b border-white/10"
//           >
//             About
//           </Link>
//           <div className="flex gap-3 mt-2">
//             <Link href="/login" className="text-white/80 text-sm">
//               Login
//             </Link>
//             <Link
//               href="/signup"
//               style={{ background: "var(--orange)" }}
//               className="text-white text-sm font-medium px-4 py-2 rounded-lg"
//             >
//               List Property
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{ background: "var(--primary)" }} className="w-full z-50 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div
            style={{ background: "var(--orange)" }}
            className="w-8 h-8 rounded-lg flex items-center justify-center"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
              <path d="M8 1L1 7h2v7h4v-4h2v4h4V7h2z" />
            </svg>
          </div>
          <span className="text-white font-semibold text-lg">
            bin<span style={{ color: "var(--gold)" }}>Adim</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/properties" className="text-white/70 hover:text-white text-sm transition">
            Properties
          </Link>
          <Link href="/properties?type=sale" className="text-white/70 hover:text-white text-sm transition">
            Buy
          </Link>
          <Link href="/properties?type=rent" className="text-white/70 hover:text-white text-sm transition">
            Rent
          </Link>
          <Link href="/about" className="text-white/70 hover:text-white text-sm transition">
            About
          </Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="text-white/80 hover:text-white text-sm transition"
          >
            Login
          </Link>
          <Link
            href="/signup"
            style={{ background: "var(--orange)" }}
            className="text-white text-sm font-medium px-4 py-2 rounded-lg hover:opacity-90 transition"
          >
            List Property
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ background: "var(--primary-light)" }} className="md:hidden px-4 pb-4 flex flex-col gap-3">
          <Link href="/properties" className="text-white/80 text-sm py-2 border-b border-white/10">
            Properties
          </Link>
          <Link href="/properties?type=sale" className="text-white/80 text-sm py-2 border-b border-white/10">
            Buy
          </Link>
          <Link href="/properties?type=rent" className="text-white/80 text-sm py-2 border-b border-white/10">
            Rent
          </Link>
          <Link href="/about" className="text-white/80 text-sm py-2 border-b border-white/10">
            About
          </Link>
          <div className="flex gap-3 mt-2">
            <Link href="/login" className="text-white/80 text-sm">
              Login
            </Link>
            <Link
              href="/signup"
              style={{ background: "var(--orange)" }}
              className="text-white text-sm font-medium px-4 py-2 rounded-lg"
            >
              List Property
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}