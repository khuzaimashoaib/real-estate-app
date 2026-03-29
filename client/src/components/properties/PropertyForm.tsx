"use client";

import { useState } from "react";
import Button from "../ui/Button";
import { api } from "@/src/utils/api";
interface PropertyFormProps {
  onSuccess: () => void;
}

export default function PropertyForm({ onSuccess }: PropertyFormProps) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    city: "",
    address: "",
    type: "sale",
    category: "house",
    area: "",
    bedrooms: "",
    bathrooms: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await api.post("/api/properties", {
        title: formData.title,
        description: formData.description,
        price: Number(formData.price),
        location: {
          city: formData.city,
          address: formData.address,
        },
        type: formData.type,
        category: formData.category,
        area: Number(formData.area),
        bedrooms: Number(formData.bedrooms),
        bathrooms: Number(formData.bathrooms),
        images: [],
      });

      if (!data.success) {
        setError(data.message);
        return;
      }

      onSuccess();
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    border: "1.5px solid var(--border)",
    color: "var(--text-dark)",
    borderRadius: "8px",
    padding: "10px 14px",
    fontSize: "14px",
    outline: "none",
    width: "100%",
  };

  const labelStyle = {
    fontSize: "13px",
    fontWeight: "500" as const,
    color: "var(--text-dark)",
    marginBottom: "6px",
    display: "block",
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {error && (
        <div
          className="text-sm px-4 py-3 rounded-lg"
          style={{ background: "#FEE2E2", color: "#DC2626" }}
        >
          {error}
        </div>
      )}

      {/* Title */}
      <div>
        <label style={labelStyle}>Property Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Modern Villa DHA"
          required
          style={inputStyle}
        />
      </div>

      {/* Description */}
      <div>
        <label style={labelStyle}>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Describe your property..."
          required
          rows={4}
          style={{ ...inputStyle, resize: "none" }}
        />
      </div>

      {/* Price + Area */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label style={labelStyle}>Price (PKR)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="25000000"
            required
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>Area (sqft)</label>
          <input
            type="number"
            name="area"
            value={formData.area}
            onChange={handleChange}
            placeholder="2400"
            required
            style={inputStyle}
          />
        </div>
      </div>

      {/* Type + Category */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label style={labelStyle}>Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="sale">For Sale</option>
            <option value="rent">For Rent</option>
          </select>
        </div>
        <div>
          <label style={labelStyle}>Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="plot">Plot</option>
            <option value="commercial">Commercial</option>
          </select>
        </div>
      </div>

      {/* Bedrooms + Bathrooms */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label style={labelStyle}>Bedrooms</label>
          <input
            type="number"
            name="bedrooms"
            value={formData.bedrooms}
            onChange={handleChange}
            placeholder="4"
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>Bathrooms</label>
          <input
            type="number"
            name="bathrooms"
            value={formData.bathrooms}
            onChange={handleChange}
            placeholder="3"
            style={inputStyle}
          />
        </div>
      </div>

      {/* City + Address */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label style={labelStyle}>City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Lahore"
            required
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="DHA Phase 6, Block D"
            required
            style={inputStyle}
          />
        </div>
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        fullWidth
        loading={loading}
      >
        Add Property
      </Button>
    </form>
  );
}
