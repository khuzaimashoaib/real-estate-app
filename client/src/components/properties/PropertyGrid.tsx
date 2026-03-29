import EmptyState from "../ui/EmptyState";
import PropertyGridSkeleton from "./PropertiesGridSkeleton";
import PropertyCard, { PropertyInterface } from "./PropertyCard";

interface PropertyGridProps {
  properties: PropertyInterface[];
  loading: boolean;
}
export default function PropertyGrid({
  properties,
  loading,
}: PropertyGridProps) {
  if (loading) {
    return <PropertyGridSkeleton />;
  }

  if (properties.length === 0) {
    return (
      <EmptyState
        title="No Properties Found"
        description="Try changing your filters"
      />
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property) => (
        <PropertyCard key={property._id} property={property} />
      ))}
    </div>
  );
}
