interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "success";
  className?: string;
}

export function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  const variants = {
    default: "bg-charcoal-100 text-charcoal-600",
    primary: "bg-primary-50 text-primary-600",
    success: "bg-emerald-50 text-emerald-600",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
