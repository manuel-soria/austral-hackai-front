"use client"
import {usePathname} from "next/navigation";
import RoundedImage from "src/components/common/roundedImage";
import Link from "next/link";

type HomeChatItemProps = {
  name: string
  id: string
  image: string
}
const HomeChatItem = (props: HomeChatItemProps) => {
  const { name, id ,image} = props;
  const pathName = usePathname()
  const isActive = pathName === `/student/${id}`
  const activeClass = isActive ? "bg-tertiary-400 border border-tertiary-500 text-700" : ""
  return (
    <Link href={`${id}`} className={`flex items-center font-medium gap-2 p-2 rounded-lg cursor-pointer ${activeClass} w-[270px]`}>
      <RoundedImage src={image} borderColor={isActive ? "tertiary-500" : "black"}/>
      {name}
    </Link>
  )
}

export default HomeChatItem
