"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { api } from "@/src/utils/api";
import { useAuth } from "@/src/context/AuthContext";
import { PropertyInterface, formatPrice } from "@/src/components/properties/PropertyCard";
import ContactCard from "@/src/components/properties/ContactCard";
import PropertyDetailSkeleton from "@/src/components/properties/PropertyDetailSkeleton";
import PropertyStats from "@/src/components/properties/PropertyStats";
import PropertyDescription from "@/src/components/properties/PropertyDescription";
import Button from "@/src/components/ui/Button";
import EmptyState from "@/src/components/ui/EmptyState";

export default function PropertyDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const { user } = useAuth();
  const [property, setProperty] = useState<PropertyInterface | null>(null);
  const [loading, setLoading] = useState(true);
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const data = await api.get(`/api/properties/${id}`);
        if (data.success) {
          setProperty(data.property);
          if (user) {
            setIsFavourite(user.favourites.includes(data.property._id));
          }
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchProperty();
  }, [id, user]);

  const handleFavourite = async () => {
    if (!user) {
      router.push("/login");
      return;
    }
    const data = await api.post(`/api/properties/${id}/favourite`, {});
    if (data.success) setIsFavourite(!isFavourite);
  };

  if (loading) return <PropertyDetailSkeleton />;

  if (!property) {
    return (
       <EmptyState
      title="Property Not Found"
      buttonText="Back to Properties"
      onButtonClick={() => router.push("/properties")}
    />
    );
  }

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-sm mb-6 hover:opacity-70 transition"
          style={{ color: "var(--primary)", background: "none", border: "none", cursor: "pointer" }}
        >
          ← Back to Properties
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left */}
          <div className="lg:col-span-2">

            {/* Image */}
            <div
              className="w-full h-80 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden"
              style={{ background: "var(--primary)" }}
            >
              {property.images && property.images.length > 0 ? (
                <img src={property.images[0]} alt={property.title} className="w-full h-full object-cover" />
              ) : (
                <svg width="80" height="80" viewBox="0 0 16 16" fill="rgba(255,255,255,0.15)">
                  <path d="M8 1L1 7h2v7h4v-4h2v4h4V7h2z" />
                </svg>
              )}
              <span
                className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-md"
                style={{
                  background: property.type === "sale" ? "var(--orange)" : "var(--gold)",
                  color: property.type === "sale" ? "white" : "var(--primary)",
                }}
              >
                {property.type === "sale" ? "For Sale" : "For Rent"}
              </span>
            </div>

            {/* Title + Favourite */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-3xl font-bold mb-2" style={{ color: "var(--primary)" }}>
                  {property.title}
                </h1>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                  📍 {property.location.address}, {property.location.city}
                </p>
              </div>
              <button
                onClick={handleFavourite}
                className="text-3xl cursor-pointer hover:scale-110 transition"
                style={{ background: "none", border: "none" }}
              >
                {isFavourite ? "❤️" : "🤍"}
              </button>
            </div>

            {/* Price */}
            <div className="text-3xl font-bold mb-6" style={{ color: "var(--orange)" }}>
              {formatPrice(property.price)}
            </div>

            {/* Stats Component */}
            <PropertyStats
              category={property.category}
              area={property.area}
              bedrooms={property.bedrooms}
              bathrooms={property.bathrooms}
            />

            {/* Description Component */}
            <PropertyDescription description={property.description} />

          </div>

          {/* Right — Contact Card */}
          <div className="lg:col-span-1">
            <ContactCard owner={property.owner} status={property.status} />
          </div>

        </div>
      </div>
    </div>
  );
}