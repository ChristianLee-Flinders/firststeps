import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"
import Image from "next/image"

interface LogoProps {
  className? :string,
}


function Logo({className}: LogoProps) {
  return (
    <div>
        <Image src={'/logos/logo.png'} alt={""} width={150} height={100} className={cn("",className)} />
    </div>
  )
}

export default Logo