"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/src/context/AuthContext";
import { api } from "@/src/utils/api";
import PropertyCard, {
  PropertyInterface,
} from "@/src/components/properties/PropertyCard";
import PropertyGrid from "@/src/components/properties/PropertyGrid";
import PropertyForm from "@/src/components/properties/PropertyForm";
import EmptyState from "@/src/components/ui/EmptyState";
import Button from "@/src/components/ui/Button";
import HeroSubSec from "@/src/components/sections/HeroSubSec";

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
    <div className="bg-(--bg) min-h-screen">
      {/* Header */}
      <HeroSubSec
        breadcrumb="Dashboard"
        heading={` Welcome, ${user?.name.split(" ")[0]}! 👋`}
        subheading="Manage your property listings"
        rightContent={
          <Button
            variant="primary"
            size="md"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? "Cancel" : "+ Add Property"}
          </Button>
        }
      />

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Add Property Form */}
        {showForm && (
          <div className="bg-white rounded-2xl p-8 mb-8 shadow-[0_2px_20px_rgba(0,0,0,0.06)]">
            <h2 className="text-xl font-bold mb-6 text-(--primary)">
              Add New Property
            </h2>
            <PropertyForm onSuccess={handleFormSuccess} />
          </div>
        )}

        {/* My Properties */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-(--primary)">My Properties</h2>
          <p className="text-sm text-(--text-muted)">
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
                <div className="absolute top-3 right-3 z-10 flex gap-2">
                  <button
                    onClick={() => handleDelete(property._id)}
                    className="text-xs text-white bg-[#DC2626] border-none cursor-pointer font-medium px-3 py-1 rounded-lg hover:opacity-90 transition"
                  >
                    Delete
                  </button>
                </div>
                {/* Property Card */}
                <PropertyCard property={property} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
