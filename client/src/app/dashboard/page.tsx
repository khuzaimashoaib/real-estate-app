"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/src/context/AuthContext";
import { api } from "@/src/utils/api";
import { PropertyInterface } from "@/src/components/properties/PropertyCard";
import PropertyGrid from "@/src/components/properties/PropertyGrid";
import PropertyForm from "@/src/components/properties/PropertyForm";
import EmptyState from "@/src/components/ui/EmptyState";
import Button from "@/src/components/ui/Button";

export default function DashboardPage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [properties, setProperties] = useState<PropertyInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  // Auth check
  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/login");
    }
  }, [user, authLoading]);

  // Fetch user properties
  const fetchMyProperties = async () => {
    setLoading(true);
    try {
      const data = await api.get("/api/properties/my");
      if (data.success) setProperties(data.properties);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) fetchMyProperties();
  }, [user]);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this property?")) return;
    const data = await api.delete(`/api/properties/${id}`);
    if (data.success) fetchMyProperties();
  };

  const handleFormSuccess = () => {
    setShowForm(false);
    fetchMyProperties();
  };

  if (authLoading) return null;

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ background: "var(--primary)" }} className="py-12 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--gold)" }}>
              Dashboard
            </p>
            <h1 className="text-4xl font-bold text-white mb-2">
              Welcome, {user?.name.split(" ")[0]}! 👋
            </h1>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
              Manage your property listings
            </p>
          </div>
          <Button
            variant="primary"
            size="md"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? "Cancel" : "+ Add Property"}
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* Add Property Form */}
        {showForm && (
          <div
            className="bg-white rounded-2xl p-8 mb-8"
            style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.06)" }}
          >
            <h2
              className="text-xl font-bold mb-6"
              style={{ color: "var(--primary)" }}
            >
              Add New Property
            </h2>
            <PropertyForm onSuccess={handleFormSuccess} />
          </div>
        )}

        {/* My Properties */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold" style={{ color: "var(--primary)" }}>
            My Properties
          </h2>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            {properties.length} listings
          </p>
        </div>

        {loading ? (
          <PropertyGrid properties={[]} loading={true} />
        ) : properties.length === 0 ? (
          <EmptyState
            title="No Properties Yet"
            description="Add your first property listing!"
            buttonText="+ Add Property"
            onButtonClick={() => setShowForm(true)}
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <div key={property._id} className="relative">
                <div
                  className="absolute top-3 right-3 z-10 flex gap-2"
                >
                  <button
                    onClick={() => handleDelete(property._id)}
                    className="text-xs font-medium px-3 py-1 rounded-lg hover:opacity-90 transition"
                    style={{
                      background: "#DC2626",
                      color: "white",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </div>
                {/* Property Card */}
                <div
                  className="bg-white rounded-2xl overflow-hidden"
                  style={{ border: "1px solid var(--border)" }}
                >
                  <div
                    className="relative h-48 flex items-center justify-center"
                    style={{ background: "var(--primary)" }}
                  >
                    {property.images && property.images.length > 0 ? (
                      <img
                        src={property.images[0]}
                        alt={property.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <svg width="60" height="60" viewBox="0 0 16 16" fill="rgba(255,255,255,0.15)">
                        <path d="M8 1L1 7h2v7h4v-4h2v4h4V7h2z" />
                      </svg>
                    )}
                    <span
                      className="absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-md"
                      style={{
                        background: property.type === "sale" ? "var(--orange)" : "var(--gold)",
                        color: property.type === "sale" ? "white" : "var(--primary)",
                      }}
                    >
                      {property.type === "sale" ? "For Sale" : "For Rent"}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-base mb-1" style={{ color: "var(--primary)" }}>
                      {property.title}
                    </h3>
                    <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
                      📍 {property.location.address}, {property.location.city}
                    </p>
                    <p className="text-base font-bold" style={{ color: "var(--orange)" }}>
                      PKR {property.price.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}