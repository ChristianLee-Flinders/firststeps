import Image from "next/image"

function Logo() {
  return (
    <div>
        <Image src={'/logos/logo.png'} alt={""} width={150} height={100} />
    </div>
  )
}

export default Logo