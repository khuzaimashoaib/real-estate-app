import React from 'react'

interface HeroSubSecProps {
  breadcrumb: string;
  heading: string;
  subheading: string;
  rightContent?: React.ReactNode;
}

const HeroSubSec = ({ breadcrumb, heading, subheading, rightContent }: HeroSubSecProps) => {
  return (
 <div className="py-12 px-6 bg-(--primary-light)">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-2"
            style={{ color: "var(--gold)" }}
          >
            {breadcrumb}
          </p>

          <h1 className="text-4xl font-bold text-white mb-2">
            {heading}
          </h1>

          <p
            className="text-sm"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            {subheading}
          </p>
        </div>

        {/* RIGHT SIDE (OPTIONAL) */}
        {rightContent && <div>{rightContent}</div>}
      </div>
    </div>
  )
}

export default HeroSubSec