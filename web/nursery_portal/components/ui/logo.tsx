import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"
import Image from "next/image"

const logoStyle = cva("", {
  variants: {
    size: {
      sm: "w-24 h-auto",
      md: "w-36 h-auto",
      lg: "w-48 h-auto",
    },
  },
  defaultVariants: {
    size: "md",
  },
})

const iconStyle = cva("", {
  variants: {
    size: {
      sm: "w-8 h-8",
      md: "w-10 h-10",
      lg: "w-12 h-12",
    },
  },
  defaultVariants: {
    size: "md",
  },
})

interface LogoProps {
  className?: string
  variant?: "default" | "alt" | "icon"
  alt?: string
  width?: number
  height?: number
  size?: "sm" | "md" | "lg"
}

export default function Logo({
  className,
  variant = "default",
  alt,
  width = 150,
  height = 100,
  size = "md",
}: LogoProps) {
  if (variant === "icon") {
    return (
      <div className={cn(iconStyle({ size }), className)}>
        <Image src="/logos/logo_icon.png" alt={alt ?? "First Steps icon"} width={40} height={40} />
      </div>
    )
  }

  const src = variant === "alt" ? "/logos/logo_alt.png" : "/logos/logo.png"
  const altText = alt ?? (variant === "alt" ? "First Steps logo (alt)" : "First Steps logo")

  return (
    <div className={cn(logoStyle({ size }), className)}>
      <Image src={src} alt={altText} width={width} height={height} />
    </div>
  )
}