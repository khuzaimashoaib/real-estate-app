"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/src/context/AuthContext";
import { api } from "@/src/utils/api";
import { PropertyInterface } from "@/src/components/properties/PropertyCard";
import PropertyGrid from "@/src/components/properties/PropertyGrid";
import EmptyState from "@/src/components/ui/EmptyState";
import HeroSubSec from "@/src/components/sections/HeroSubSec";

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

      <HeroSubSec
  breadcrumb="Favourites"
  heading="Saved Properties"
  subheading=" Properties you have saved for later"
/>
     
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