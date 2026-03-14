interface SectionLabelProps {
  children: React.ReactNode;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-2 justify-center mb-4">
      <span className="w-2 h-2 rounded-full bg-primary-400" />
      <span className="text-sm font-medium text-primary-400">{children}</span>
    </div>
  );
}
