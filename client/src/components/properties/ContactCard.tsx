interface Owner {
  name: string;
  email: string;
  phone: string;
}

interface ContactCardProps {
  owner: Owner;
  status: string;
}

export default function ContactCard({ owner, status }: ContactCardProps) {
  return (
    <div
      className="bg-white rounded-2xl p-6 sticky top-24"
      style={{ border: "1px solid var(--border)" }}
    >
      <h2
        className="text-lg font-semibold mb-4"
        style={{ color: "var(--primary)" }}
      >
        Contact Owner
      </h2>

      {/* Owner Info */}
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
          style={{ background: "var(--primary)" }}
        >
          {owner.name.charAt(0).toUpperCase()}
        </div>
        <div>
          <p
            className="font-semibold text-sm"
            style={{ color: "var(--primary)" }}
          >
            {owner.name}
          </p>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            Property Owner
          </p>
        </div>
      </div>

      {/* Contact Buttons */}
      <div className="flex flex-col gap-3 mb-6">
        <a
          href={`tel:${owner.phone}`}
          className="flex items-center gap-3 p-3 rounded-xl text-sm font-medium text-white hover:opacity-90 transition"
          style={{ background: "var(--orange)", textDecoration: "none" }}
        >
          📞 {owner.phone || "Not provided"}
        </a>
        <a
          href={`mailto:${owner.email}`}
          className="flex items-center gap-3 p-3 rounded-xl text-sm font-medium hover:opacity-90 transition"
          style={{
            background: "var(--bg)",
            border: "1.5px solid var(--border)",
            color: "var(--primary)",
            textDecoration: "none",
          }}
        >
          ✉️ {owner.email}
        </a>
      </div>

      {/* Status */}
      <div
        className="text-center text-xs font-medium py-2 rounded-lg capitalize"
        style={{
          background: status === "available" ? "#D1FAE5" : "#FEE2E2",
          color: status === "available" ? "#065F46" : "#DC2626",
        }}
      >
        {status}
      </div>
    </div>
  );
}
