"use client";
import Link from "next/link";
import HeroSection from "../components/sections/HeroSection";
import AboutUs from "../components/sections/AboutUs";
import CtaSec from "../components/sections/CtaSec";
import { useEffect, useState } from "react";
import PropertyCard, {
  PropertyInterface,
} from "../components/properties/PropertyCard";
import { api } from "../utils/api";
import PropertyGridSkeleton from "../components/properties/PropertiesGridSkeleton";

export default function Home() {
  const [properties, setProperties] = useState<PropertyInterface[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const data = await api.get("/api/properties");
        if (data.success) {
          setProperties(data.properties.slice(0, 3)); // sirf 3 properties
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      {/* Search Section */}
      {/* <HomeSearchSec /> */}
      {/* Featured Properties */}
      <section className="max-w-7xl mx-auto  py-16">
        <div className="flex justify-between items-center mb-8">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-2 "
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
        {loading ? (
          <PropertyGridSkeleton />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        )}
      </section>
      {/* Why Choose Us */}
      <AboutUs />
      {/* CTA Section */}
      <CtaSec />{" "}
    </>
  );
}
