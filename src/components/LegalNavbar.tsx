import Link from "next/link";
import { Logo } from "./Logo";

export function LegalNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link href="/" aria-label="Breezy home">
          <Logo />
        </Link>
        <Link
          href="/"
          className="text-sm font-medium text-black/60 transition-colors hover:text-black"
        >
          Back to home
        </Link>
      </nav>
    </header>
  );
}
