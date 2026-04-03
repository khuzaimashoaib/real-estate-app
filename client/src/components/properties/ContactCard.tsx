import { useAuth } from "@/src/context/AuthContext";
import Link from "next/link";

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
  const { user } = useAuth();

  return (
    <div className="bg-white rounded-2xl p-6 sticky top-24 border border-(--border)">
      <h2 className="text-lg font-semibold mb-4 text-(--primary)">
        Contact Owner
      </h2>

      {/* Owner Info */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg bg-(--primary)">
          {owner.name.charAt(0).toUpperCase()}
        </div>
        <div>
          <p className="font-semibold text-sm text-(--primary)">{owner.name}</p>
          <p className="text-xs text-(--text-muted)">Property Owner</p>
        </div>
      </div>

      {/* Contact Buttons */}
      {user ? (
        <div className="flex flex-col gap-3 mb-6">
          <a
            href={`tel:${owner.phone}`}
            className="flex items-center gap-3 p-3 rounded-xl text-sm font-medium text-white hover:opacity-90 transition bg-(--orange)"
          >
            📞 {owner.phone || "Not provided"}
          </a>
          <a
            href={`mailto:${owner.email}`}
            className="flex items-center gap-3 p-3 rounded-xl text-sm font-medium hover:opacity-90 transition border border-gray-200 text-(--primary) bg-(--bg)"
          >
            ✉️ {owner.email}
          </a>
        </div>
      ) : (
        <div className="mb-6 p-4 rounded-xl bg-gray-50 border border-gray-200 text-center">
          <p className="text-sm text-gray-500 mb-3">
            Login to view contact details
          </p>
          <Link
            href="/login"
            className="text-sm font-semibold hover:opacity-80 transition text-(--orange)"
          >
            Login Now →
          </Link>
        </div>
      )}

      {/* Status */}
      <div
        className={`text-center text-xs font-medium py-2 rounded-lg capitalize ${status === "available" ? "bg-[#D1FAE5] text-[#065F46]" : "bg-[#FEE2E2] text-[#DC2626]"} `}
      >
        {status}
      </div>
    </div>
  );
}
