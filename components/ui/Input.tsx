interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, className = "", ...props }: InputProps) {
  return (
    <div className="space-y-1.5">
      {label && (
        <label className="block text-sm font-medium text-charcoal-700">
          {label}
        </label>
      )}
      <input
        className={`w-full px-4 py-3 rounded-xl border border-charcoal-200 bg-white text-charcoal-800 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all ${className}`}
        {...props}
      />
    </div>
  );
}
