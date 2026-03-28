import Link from "next/link";

export interface PropertyInterface {
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

export const formatPrice = (price: number) => {
  if (price >= 10000000) return `PKR ${(price / 10000000).toFixed(1)} Cr`;
  if (price >= 100000) return `PKR ${(price / 100000).toFixed(1)} Lac`;
  return `PKR ${price.toLocaleString()}`;
};

export default function PropertyCard({ property }: { property: PropertyInterface }) {
  return (
    <Link
      key={property._id}
      href={`/properties/${property._id}`}
      style={{ textDecoration: "none" }}
    >
      <div
        className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition cursor-pointer"
        style={{ border: "1px solid var(--border)" }}
      >
        {/* Image */}
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
            <svg
              width="60"
              height="60"
              viewBox="0 0 16 16"
              fill="rgba(255,255,255,0.15)"
            >
              <path d="M8 1L1 7h2v7h4v-4h2v4h4V7h2z" />
            </svg>
          )}
          {/* Type Badge */}
          <span
            className="absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-md"
            style={{
              background:
                property.type === "sale" ? "var(--orange)" : "var(--gold)",
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
          <h3
            className="font-semibold text-base mb-1"
            style={{ color: "var(--primary)" }}
          >
            {property.title}
          </h3>
          <p className="text-xs mb-4" style={{ color: "var(--text-muted)" }}>
            📍 {property.location.address}, {property.location.city}
          </p>
          <div
            className="flex gap-4 pt-4"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            {property.bedrooms > 0 && (
              <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                🛏 {property.bedrooms} Beds
              </span>
            )}
            {property.bathrooms > 0 && (
              <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                🚿 {property.bathrooms} Baths
              </span>
            )}
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>
              📐 {property.area} sqft
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
