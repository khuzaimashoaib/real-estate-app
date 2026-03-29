export default function PropertyGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div
          key={i}
          className="bg-white rounded-2xl overflow-hidden animate-pulse"
          style={{ border: "1px solid var(--border)" }}
        >
          <div className="h-48" style={{ background: "#E5E7EB" }} />
          <div className="p-5">
            <div
              className="h-4 rounded mb-3"
              style={{ background: "#E5E7EB" }}
            />
            <div
              className="h-3 rounded mb-4 w-2/3"
              style={{ background: "#E5E7EB" }}
            />
            <div
              className="h-3 rounded w-1/2"
              style={{ background: "#E5E7EB" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
