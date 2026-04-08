import Link from 'next/link'
import React from 'react'
import Button from '../ui/Button'

const HeroSection = () => {
  return (  <section
        className="relative overflow-hidden bg-(--primary-light)"
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

        <div className="max-w-7xl mx-auto  py-20 relative z-10">
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
  )
}

export default HeroSection