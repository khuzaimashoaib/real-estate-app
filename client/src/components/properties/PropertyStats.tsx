interface PropertyStatsProps {
  category: string;
  area: number;
  bedrooms: number;
  bathrooms: number;
}

export default function PropertyStats({
  category,
  area,
  bedrooms,
  bathrooms,
}: PropertyStatsProps) {
  const stats = [
    { label: "Category", value: category },
    { label: "Area", value: `${area} sqft` },
    { label: "Bedrooms", value: bedrooms || "N/A" },
    { label: "Bathrooms", value: bathrooms || "N/A" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white rounded-xl p-4 text-center"
          style={{ border: "1px solid var(--border)" }}
        >
          <p className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>
            {stat.label}
          </p>
          <p
            className="font-semibold text-sm capitalize"
            style={{ color: "var(--primary)" }}
          >
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  );
}