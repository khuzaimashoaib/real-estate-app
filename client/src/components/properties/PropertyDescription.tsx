interface PropertyDescriptionProps {
  description: string;
}

export default function PropertyDescription({
  description,
}: PropertyDescriptionProps) {
  return (
    <div
      className="bg-white rounded-2xl p-6"
      style={{ border: "1px solid var(--border)" }}
    >
      <h2
        className="text-lg font-semibold mb-3"
        style={{ color: "var(--primary)" }}
      >
        Description
      </h2>
      <p
        className="text-sm leading-relaxed"
        style={{ color: "var(--text-muted)" }}
      >
        {description}
      </p>
    </div>
  );
}