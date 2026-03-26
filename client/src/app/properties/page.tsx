"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { api } from "@/src/utils/api";

interface Property {
  _id: string;
  title: string;
  description: string;
  price: number;
  location: {
    city: string;
    address: string;
  };
  type: string;
  category: string;
  area: number;
  bedrooms: number;
  bathrooms: number;
  images: string[];
  owner: {
    name: string;
    email: string;
    phone: string;
  };
  status: string;
  createdAt: string;
}

import React from "react";

export default function PropertiesPage() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    type: "",
    category: "",
    city: "",
    minPrice: "",
    maxPrice: "",
  });

  const fetchProperties = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (filters.type) params.append("type", filters.type);
      if (filters.category) params.append("category", filters.category);
      if (filters.city) params.append("city", filters.city);
      if (filters.minPrice) params.append("minPrice", filters.minPrice);
      if (filters.maxPrice) params.append("maxPrice", filters.maxPrice);

      const data = await api.get(`/api/properties?${params.toString()}`);
      if (data.success) {
        setProperties(data.properties);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProperties();
  }, []);
  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    fetchProperties();
  };

    const formatPrice = (price: number) => {
    if (price >= 10000000) return `PKR ${(price / 10000000).toFixed(1)} Cr`;
    if (price >= 100000) return `PKR ${(price / 100000).toFixed(1)} Lac`;
    return `PKR ${price.toLocaleString()}`;
  };

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ background: "var(--primary-light)" }} className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--gold)" }}>
            Browse
          </p>
          <h1 className="text-4xl font-bold text-white mb-2">All Properties</h1>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
            Find your perfect property from our verified listings
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Filters */}
        <div className="bg-white rounded-2xl p-6 mb-8" style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.06)" }}>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <input
              type="text"
              name="city"
              placeholder="City..."
              value={filters.city}
              onChange={handleFilterChange}
              className="rounded-lg px-4 py-3 text-sm outline-none"
              style={{ border: "1.5px solid var(--border)", color: "var(--text-dark)" }}
            />
            <select
              name="type"
              value={filters.type}
              onChange={handleFilterChange}
              className="rounded-lg px-4 py-3 text-sm outline-none bg-white"
              style={{ border: "1.5px solid var(--border)", color: "var(--text-dark)" }}
            >
              <option value="">All Types</option>
              <option value="sale">For Sale</option>
              <option value="rent">For Rent</option>
            </select>
            <select
              name="category"
              value={filters.category}
              onChange={handleFilterChange}
              className="rounded-lg px-4 py-3 text-sm outline-none bg-white"
              style={{ border: "1.5px solid var(--border)", color: "var(--text-dark)" }}
            >
              <option value="">All Categories</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="plot">Plot</option>
              <option value="commercial">Commercial</option>
            </select>
            <input
              type="number"
              name="minPrice"
              placeholder="Min Price..."
              value={filters.minPrice}
              onChange={handleFilterChange}
              className="rounded-lg px-4 py-3 text-sm outline-none"
              style={{ border: "1.5px solid var(--border)", color: "var(--text-dark)" }}
            />
            <input
              type="number"
              name="maxPrice"
              placeholder="Max Price..."
              value={filters.maxPrice}
              onChange={handleFilterChange}
              className="rounded-lg px-4 py-3 text-sm outline-none"
              style={{ border: "1.5px solid var(--border)", color: "var(--text-dark)" }}
            />
            <button
              onClick={handleSearch}
              className="text-white font-semibold text-sm py-3 rounded-lg hover:opacity-90 transition"
              style={{ background: "var(--orange)", border: "none", cursor: "pointer" }}
            >
              Search
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-sm font-medium" style={{ color: "var(--text-muted)" }}>
            {loading ? "Loading..." : `${properties.length} properties found`}
          </p>
        </div>

        {/* Properties Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden animate-pulse" style={{ border: "1px solid var(--border)" }}>
                <div className="h-48" style={{ background: "#E5E7EB" }} />
                <div className="p-5">
                  <div className="h-4 rounded mb-3" style={{ background: "#E5E7EB" }} />
                  <div className="h-3 rounded mb-4 w-2/3" style={{ background: "#E5E7EB" }} />
                  <div className="h-3 rounded w-1/2" style={{ background: "#E5E7EB" }} />
                </div>
              </div>
            ))}
          </div>
        ) : properties.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🏠</div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: "var(--primary)" }}>No Properties Found</h3>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>Try changing your filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <Link
                key={property._id}
                href={`/properties/${property._id}`}
                style={{ textDecoration: "none" }}
              >
                <div className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition cursor-pointer" style={{ border: "1px solid var(--border)" }}>
                  {/* Image */}
                  <div className="relative h-48 flex items-center justify-center" style={{ background: "var(--primary)" }}>
                    {property.images && property.images.length > 0 ? (
                      <img src={property.images[0]} alt={property.title} className="w-full h-full object-cover" />
                    ) : (
                      <svg width="60" height="60" viewBox="0 0 16 16" fill="rgba(255,255,255,0.15)">
                        <path d="M8 1L1 7h2v7h4v-4h2v4h4V7h2z" />
                      </svg>
                    )}
                    {/* Type Badge */}
                    <span
                      className="absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-md"
                      style={{
                        background: property.type === "sale" ? "var(--orange)" : "var(--gold)",
                        color: property.type === "sale" ? "white" : "var(--primary)",
                      }}
                    >
                      {property.type === "sale" ? "For Sale" : "For Rent"}
                    </span>
                    {/* Price */}
                    <span className="absolute bottom-3 right-3 text-white font-bold text-base">
                      {formatPrice(property.price)}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-5">
                    <h3 className="font-semibold text-base mb-1" style={{ color: "var(--primary)" }}>
                      {property.title}
                    </h3>
                    <p className="text-xs mb-4" style={{ color: "var(--text-muted)" }}>
                      📍 {property.location.address}, {property.location.city}
                    </p>
                    <div className="flex gap-4 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                      {property.bedrooms > 0 && (
                        <span className="text-xs" style={{ color: "var(--text-muted)" }}>🛏 {property.bedrooms} Beds</span>
                      )}
                      {property.bathrooms > 0 && (
                        <span className="text-xs" style={{ color: "var(--text-muted)" }}>🚿 {property.bathrooms} Baths</span>
                      )}
                      <span className="text-xs" style={{ color: "var(--text-muted)" }}>📐 {property.area} sqft</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
