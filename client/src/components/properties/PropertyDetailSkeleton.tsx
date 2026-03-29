export default function PropertyDetailSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="animate-pulse">
        <div className="h-4 rounded mb-6 w-32" style={{ background: "#E5E7EB" }} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="h-80 rounded-2xl mb-6" style={{ background: "#E5E7EB" }} />
            <div className="h-8 rounded mb-3 w-2/3" style={{ background: "#E5E7EB" }} />
            <div className="h-4 rounded mb-4 w-1/3" style={{ background: "#E5E7EB" }} />
            <div className="h-6 rounded mb-6 w-1/4" style={{ background: "#E5E7EB" }} />
            <div className="grid grid-cols-4 gap-4 mb-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-20 rounded-xl" style={{ background: "#E5E7EB" }} />
              ))}
            </div>
            <div className="h-40 rounded-2xl" style={{ background: "#E5E7EB" }} />
          </div>
          <div className="lg:col-span-1">
            <div className="h-80 rounded-2xl" style={{ background: "#E5E7EB" }} />
          </div>
        </div>
      </div>
    </div>
  );
}