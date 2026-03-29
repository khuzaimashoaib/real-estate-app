interface EmptyStateProps {
  icon?: string;
  title: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export default function EmptyState({
  icon = "🏠",
  title,
  description,
  buttonText,
  onButtonClick,
}: EmptyStateProps) {
  return (
    <div className="text-center py-20">
      <div className="text-6xl mb-4">{icon}</div>
      <h3
        className="text-xl font-semibold mb-2"
        style={{ color: "var(--primary)" }}
      >
        {title}
      </h3>
      {description && (
        <p className="text-sm" style={{ color: "var(--text-muted)" }}>
          {description}
        </p>
      )}
      {buttonText && onButtonClick && (
        <button
          onClick={onButtonClick}
          className="text-sm font-medium px-6 py-3 rounded-lg text-white mt-4 hover:opacity-90 transition"
          style={{ background: "var(--orange)", border: "none", cursor: "pointer" }}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
}