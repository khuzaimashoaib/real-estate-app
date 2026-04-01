"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/src/context/AuthContext";
import { api } from "@/src/utils/api";
import { PropertyInterface } from "@/src/components/properties/PropertyCard";
import PropertyGrid from "@/src/components/properties/PropertyGrid";
import EmptyState from "@/src/components/ui/EmptyState";

export default function FavouritesPage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [properties, setProperties] = useState<PropertyInterface[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/login");
    }
  }, [user, authLoading]);

  useEffect(() => {
    const fetchFavourites = async () => {
      try {
        const data = await api.get("/api/properties/favourites");
        if (data.success) {
          setProperties(data.properties);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (user) fetchFavourites();
  }, [user]);

  if (authLoading) return null;

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ background: "var(--primary)" }} className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--gold)" }}>
            My Favourites
          </p>
          <h1 className="text-4xl font-bold text-white mb-2">
            Saved Properties
          </h1>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
            Properties you have saved for later
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {loading ? (
          <PropertyGrid properties={[]} loading={true} />
        ) : properties.length === 0 ? (
          <EmptyState
            title="No Favourites Yet"
            description="Save properties you like by clicking the heart icon!"
            buttonText="Browse Properties"
            onButtonClick={() => router.push("/properties")}
          />
        ) : (
          <PropertyGrid properties={properties} loading={false} />
        )}
      </div>
    </div>
  );
}