import Image from "next/image";

type RoundedImageProps = {
  src: string
  borderColor?: string
}
const RoundedImage = ({src, borderColor = "black"}: RoundedImageProps) => (
    <Image className={`border rounded-full border-${borderColor} w-10 h-10`} src={src} alt={'profile-picture'} width={40}
           height={40}/>
)

export default RoundedImage
