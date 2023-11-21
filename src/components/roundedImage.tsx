import Image from "next/image";

type RoundedImageProps = {
  src: string
  borderColor?: string
  width?: number
  height?: number
  className?: string
}
const RoundedImage = (props: RoundedImageProps) => {
  const {
    src,
    borderColor,
    width,
    height,
    className = ""
  } = props
  const border = borderColor ? `border-${borderColor} ` : 'border-black '
  const w = width ? `w-${width}` : 'w-10 '
  const h = height ? `h-${height}` : 'h-10 '
  return (
      <div className={`w-fit border rounded-full ` + border + className}>
        <Image className={"rounded-full " + w + h} src={src}
               alt={'profile-picture'}
               width={width ?? 40}
               height={height ?? 40}/>
      </div>
  )
}
export default RoundedImage
