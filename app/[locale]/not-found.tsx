import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-[#0a0a0a]">
      <div className="text-center px-8">
        <p className="text-[8rem] md:text-[12rem] font-semibold leading-none tracking-[-0.04em] text-white/10 select-none">
          404
        </p>
        <h1 className="heading-display text-white text-[1.75rem] md:text-[2.5rem] leading-[1.1] -mt-6 mb-4">
          Page not found
        </h1>
        <p className="body-16 text-white/50 mb-10 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-medium hover:bg-[#e63b2e] hover:text-white transition-colors"
        >
          <span>←</span>
          Back to home
        </Link>
      </div>
    </section>
  );
}
