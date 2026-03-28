"use client";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import Button from "../components/ui/Button";

export default function Home() {
  const { user } = useAuth();
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative overflow-hidden"
        style={{ background: "var(--primary-light)" }}
      >
        {/* Background Circles */}
        <div
          className="absolute rounded-full opacity-10"
          style={{
            width: "400px",
            height: "400px",
            background: "var(--orange)",
            top: "-80px",
            right: "-80px",
          }}
        />
        <div
          className="absolute rounded-full opacity-10"
          style={{
            width: "300px",
            height: "300px",
            background: "var(--gold)",
            bottom: "-60px",
            left: "100px",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          {/* Badge */}
          <span
            className="inline-block text-white text-xs font-semibold px-4 py-2 rounded-full mb-6"
            style={{ background: "var(--orange)" }}
          >
            Pakistan No.1 Real Estate Platform
          </span>

          {/* Title */}
          <h1 className="text-5xl font-bold text-white leading-tight mb-6 max-w-2xl">
            Find Your <span style={{ color: "var(--gold)" }}>Dream Home</span>
            <br />
            in Pakistan
          </h1>

          {/* Subtitle */}
          <p
            className="text-base leading-relaxed mb-10 max-w-xl"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            Browse thousands of verified properties across Karachi, Lahore &
            Islamabad. Buy, sell or rent with ease.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap">
            <Button
              href="/properties"
              type="button"
              variant="primary"
              size="lg"
            
              
            >
              Browse Properties
            </Button>
            {/* <Link
              href="/properties"
              className="text-white font-semibold text-sm px-7 py-4 rounded-xl transition hover:opacity-90"
              style={{ background: "var(--orange)" }}
            >
              Browse Properties
            </Link> */}
            <Link
              href="/signup"
              className="text-white font-medium text-sm px-7 py-4 rounded-xl transition hover:bg-white/10"
              style={{ border: "1.5px solid rgba(255,255,255,0.3)" }}
            >
              List Your Property
            </Link>
          </div>

          {/* Stats */}
          <div
            className="flex gap-12 mt-16 pt-10 flex-wrap"
            style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
          >
            {[
              { num: "12K+", label: "Properties Listed" },
              { num: "8K+", label: "Happy Clients" },
              { num: "150+", label: "Cities Covered" },
              { num: "99%", label: "Verified Listings" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-3xl font-bold"
                  style={{ color: "var(--gold)" }}
                >
                  {stat.num}
                </div>
                <div
                  className="text-xs mt-1"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Search Section */}
      <section
        className="max-w-7xl mx-auto px-6 relative z-10"
        style={{ marginTop: "-30px" }}
      >
        <div
          className="bg-white rounded-2xl p-6 flex gap-3 flex-wrap items-center"
          style={{ boxShadow: "0 4px 40px rgba(0,0,0,0.1)" }}
        >
          <input
            type="text"
            placeholder="Search by city, area or property name..."
            className="flex-1 min-w-48 rounded-lg px-4 py-3 text-sm outline-none"
            style={{
              border: "1.5px solid var(--border)",
              color: "var(--text-dark)",
            }}
          />
          <select
            className="rounded-lg px-4 py-3 text-sm outline-none bg-white"
            style={{
              border: "1.5px solid var(--border)",
              color: "var(--text-dark)",
              minWidth: "130px",
            }}
          >
            <option>For Sale</option>
            <option>For Rent</option>
          </select>
          <select
            className="rounded-lg px-4 py-3 text-sm outline-none bg-white"
            style={{
              border: "1.5px solid var(--border)",
              color: "var(--text-dark)",
              minWidth: "130px",
            }}
          >
            <option>All Types</option>
            <option>House</option>
            <option>Apartment</option>
            <option>Plot</option>
            <option>Commercial</option>
          </select>
          <button
            className="text-white font-semibold text-sm px-7 py-3 rounded-lg cursor-pointer hover:opacity-90 transition"
            style={{ background: "var(--orange)", border: "none" }}
          >
            Search
          </button>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex justify-between items-center mb-8">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: "var(--orange)" }}
            >
              Featured
            </p>
            <h2
              className="text-3xl font-bold"
              style={{ color: "var(--primary)" }}
            >
              Latest Properties
            </h2>
          </div>
          <Link
            href="/properties"
            className="text-sm font-medium hover:opacity-70 transition"
            style={{ color: "var(--orange)" }}
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Modern Villa",
              location: "DHA Phase 6, Lahore",
              price: "PKR 2.5 Cr",
              type: "For Sale",
              beds: 4,
              baths: 3,
              area: "2400 sqft",
              color: "#0A2342",
            },
            {
              title: "Luxury Apartment",
              location: "Clifton, Karachi",
              price: "PKR 85K/mo",
              type: "For Rent",
              beds: 3,
              baths: 2,
              area: "1800 sqft",
              color: "#FF6B35",
            },
            {
              title: "Commercial Plot",
              location: "F-10, Islamabad",
              price: "PKR 45 Lac",
              type: "For Sale",
              beds: 0,
              baths: 0,
              area: "500 sqft",
              color: "#0F6E56",
            },
          ].map((property) => (
            <div
              key={property.title}
              className="bg-white rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg transition"
              style={{ border: "1px solid var(--border)" }}
            >
              {/* Image */}
              <div
                className="relative flex items-center justify-center h-48"
                style={{ background: property.color }}
              >
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 16 16"
                  fill="rgba(255,255,255,0.15)"
                >
                  <path d="M8 1L1 7h2v7h4v-4h2v4h4V7h2z" />
                </svg>
                <span
                  className="absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-md"
                  style={{
                    background:
                      property.type === "For Sale"
                        ? "var(--orange)"
                        : "var(--gold)",
                    color:
                      property.type === "For Sale" ? "white" : "var(--primary)",
                  }}
                >
                  {property.type}
                </span>
                <span className="absolute bottom-3 right-3 text-white font-bold text-base">
                  {property.price}
                </span>
              </div>

              {/* Body */}
              <div className="p-5">
                <h3
                  className="font-semibold text-base mb-1"
                  style={{ color: "var(--primary)" }}
                >
                  {property.title}
                </h3>
                <p
                  className="text-xs mb-4"
                  style={{ color: "var(--text-muted)" }}
                >
                  📍 {property.location}
                </p>
                <div
                  className="flex gap-4 pt-4"
                  style={{ borderTop: "1px solid var(--border)" }}
                >
                  {property.beds > 0 && (
                    <span
                      className="text-xs"
                      style={{ color: "var(--text-muted)" }}
                    >
                      🛏 {property.beds} Beds
                    </span>
                  )}
                  {property.baths > 0 && (
                    <span
                      className="text-xs"
                      style={{ color: "var(--text-muted)" }}
                    >
                      🚿 {property.baths} Baths
                    </span>
                  )}
                  <span
                    className="text-xs"
                    style={{ color: "var(--text-muted)" }}
                  >
                    📐 {property.area}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: "var(--orange)" }}
            >
              Why Us
            </p>
            <h2
              className="text-3xl font-bold"
              style={{ color: "var(--primary)" }}
            >
              Why Choose binAdim?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "✅",
                title: "Verified Listings",
                desc: "Every property is verified by our team before listing.",
              },
              {
                icon: "🔒",
                title: "Secure Transactions",
                desc: "Your data and transactions are fully protected.",
              },
              {
                icon: "🏆",
                title: "Top Agents",
                desc: "Connect with Pakistan's best real estate agents.",
              },
              {
                icon: "📱",
                title: "Easy to Use",
                desc: "Simple and intuitive platform for everyone.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="text-center p-8 rounded-2xl"
                style={{ border: "1px solid var(--border)" }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3
                  className="font-semibold text-base mb-2"
                  style={{ color: "var(--primary)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 px-6 text-center"
        style={{ background: "var(--primary-light)" }}
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Find Your{" "}
            <span style={{ color: "var(--gold)" }}>Dream Home?</span>
          </h2>
          <p
            className="text-sm leading-relaxed mb-8"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Join thousands of happy families who found their perfect home
            through binAdim.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href={user ? "/dashboard" : "/signup"}
              className="text-white font-semibold text-sm px-8 py-4 rounded-xl hover:opacity-90 transition"
              style={{ background: "var(--orange)" }}
            >
              Get Started Free
            </Link>
            <Link
              href="/properties"
              className="text-white font-medium text-sm px-8 py-4 rounded-xl hover:bg-white/10 transition"
              style={{ border: "1.5px solid rgba(255,255,255,0.3)" }}
            >
              Browse Properties
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
