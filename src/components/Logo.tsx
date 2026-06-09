import Image from "next/image";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <Image
        src="/Breezy-logo-removebg-preview.png"
        alt="Breezy"
        width={40}
        height={40}
        className="h-9 w-9 object-contain"
        priority
      />
      <span className="text-lg font-semibold tracking-tight text-black">
        Breezy
      </span>
    </div>
  );
}
