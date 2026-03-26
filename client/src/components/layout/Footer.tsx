import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{ background: "var(--primary)" }}
      className="text-white mt-auto"
    >
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
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
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Pakistan's most trusted real estate platform. Find your dream home
              today.
            </p>
          </div>

          {/* Properties */}
          <div>
            <h4
              style={{ color: "var(--gold)" }}
              className="font-medium text-sm mb-4"
            >
              Properties
            </h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/properties?type=sale"
                  className="text-white/60 hover:text-white text-sm transition"
                >
                  Buy Property
                </Link>
              </li>
              <li>
                <Link
                  href="/properties?type=rent"
                  className="text-white/60 hover:text-white text-sm transition"
                >
                  Rent Property
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-white/60 hover:text-white text-sm transition"
                >
                  List Property
                </Link>
              </li>
              <li>
                <Link
                  href="/properties"
                  className="text-white/60 hover:text-white text-sm transition"
                >
                  All Properties
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              style={{ color: "var(--gold)" }}
              className="font-medium text-sm mb-4"
            >
              Company
            </h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/about"
                  className="text-white/60 hover:text-white text-sm transition"
                >
                  About Us
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/contact"
                  className="text-white/60 hover:text-white text-sm transition"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-white/60 hover:text-white text-sm transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-white/60 hover:text-white text-sm transition"
                >
                  Terms of Service
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{ color: "var(--gold)" }}
              className="font-medium text-sm mb-4"
            >
              Contact Us
            </h4>
            <ul className="flex flex-col gap-2">
              <li className="text-white/60 text-sm">Karachi, Pakistan</li>
              <li className="text-white/60 text-sm">info@binadim.com</li>
              <li className="text-white/60 text-sm">+92 300 1234567</li>
            </ul>
            {/* Social Icons */}
            <div className="flex gap-3 mt-4">
              <div
                style={{ background: "var(--orange)" }}
                className="w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer hover:opacity-90 transition"
              >
                <svg width="14" height="14" fill="white" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <div
                style={{ background: "var(--orange)" }}
                className="w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer hover:opacity-90 transition"
              >
                <svg width="14" height="14" fill="white" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </div>
              <div
                style={{ background: "var(--orange)" }}
                className="w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer hover:opacity-90 transition"
              >
                <svg width="14" height="14" fill="white" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
          className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3"
        >
          <p className="text-white/40 text-sm">
            © 2026 binAdim. All rights reserved.
          </p>
          <p className="text-white/40 text-sm">Made by Khuzaima Shoaib 🤍</p>
        </div>
      </div>
    </footer>
  );
}
