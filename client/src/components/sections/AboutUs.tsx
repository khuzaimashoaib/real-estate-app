import Image from "next/image";
import React from "react";

const AboutUs = () => {
  const boxes = [
    {
      icon: "check",
      title: "Verified Listings",
      desc: "Every property is verified by our team before listing.",
    },
    {
      icon: "secure",
      title: "Secure Transactions",
      desc: "Your data and transactions are fully protected.",
    },
    {
      icon: "cup",
      title: "Top Agents",
      desc: "Connect with Pakistan's best real estate agents.",
    },
    {
      icon: "phone",
      title: "Easy to Use",
      desc: "Simple and intuitive platform for everyone.",
    },
  ];

  return (
    <section className="bg-white py-16 ">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 align-center">
          {boxes.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center p-8 rounded-2xl align-center"
              style={{ border: "1px solid var(--border)" }}
            >
              <Image
                src={`/svg-icons/${item.icon}.svg`}
                width={50}
                height={50}
                alt={item.title}
                className="mb-2"
              />
              {/* <div className="text-4xl mb-4">{item.icon}</div> */}
              <h3 className="font-semibold text-base mb-2 text-(--primary)">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-(--text-muted)">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
