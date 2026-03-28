"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { api } from "@/src/utils/api";

import React from "react";
import PropertyGrid from "@/src/components/properties/PropertyGrid";
import {  PropertyInterface } from "@/src/components/properties/PropertyCard";

export default function PropertiesPage() {
  const [properties, setProperties] = useState<PropertyInterface[]>([]);
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

 

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      {/* Header */}
      <div
        style={{ background: "var(--primary-light)" }}
        className="py-12 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-2"
            style={{ color: "var(--gold)" }}
          >
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
        <div
          className="bg-white rounded-2xl p-6 mb-8"
          style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.06)" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <input
              type="text"
              name="city"
              placeholder="City..."
              value={filters.city}
              onChange={handleFilterChange}
              className="rounded-lg px-4 py-3 text-sm outline-none"
              style={{
                border: "1.5px solid var(--border)",
                color: "var(--text-dark)",
              }}
            />
            <select
              name="type"
              value={filters.type}
              onChange={handleFilterChange}
              className="rounded-lg px-4 py-3 text-sm outline-none bg-white"
              style={{
                border: "1.5px solid var(--border)",
                color: "var(--text-dark)",
              }}
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
              style={{
                border: "1.5px solid var(--border)",
                color: "var(--text-dark)",
              }}
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
              style={{
                border: "1.5px solid var(--border)",
                color: "var(--text-dark)",
              }}
            />
            <input
              type="number"
              name="maxPrice"
              placeholder="Max Price..."
              value={filters.maxPrice}
              onChange={handleFilterChange}
              className="rounded-lg px-4 py-3 text-sm outline-none"
              style={{
                border: "1.5px solid var(--border)",
                color: "var(--text-dark)",
              }}
            />
            <button
              onClick={handleSearch}
              className="text-white font-semibold text-sm py-3 rounded-lg hover:opacity-90 transition"
              style={{
                background: "var(--orange)",
                border: "none",
                cursor: "pointer",
              }}
            >
              Search
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <p
            className="text-sm font-medium"
            style={{ color: "var(--text-muted)" }}
          >
            {loading ? "Loading..." : `${properties.length} properties found`}
          </p>
        </div>

        {/* Properties Grid */}
        <PropertyGrid properties={properties} loading={loading} />
      </div>
    </div>
  );
}
