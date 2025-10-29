import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: "default" | "white";
  className?: string;
  width?: number;
  height?: number;
}

export function Logo({
  variant = "default",
  className = "w-36",
  width = 144,
  height = 32,
}: LogoProps) {
  const logoSrc =
    variant === "white" ? "/logos/logo-white.svg" : "/logos/logo.svg";

  return (
    <Link href="/" className="flex items-center gap-2 shrink-0">
      <Image
        src={logoSrc}
        alt="WellMum"
        width={width}
        height={height}
        className={className}
      />
    </Link>
  );
}
