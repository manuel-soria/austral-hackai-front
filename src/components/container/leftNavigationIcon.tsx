'use client'
import Image from "next/image";
import {usePathname} from "next/navigation";
import Link from "next/link";

type LeftNavigationIconProps = {
  url: string,
  icon: string,
}
const LeftNavigationIcon = (props: LeftNavigationIconProps) => {
  const {url, icon} = props

  const pathname = usePathname()
  const active = pathname.split("/")[0] === url
  const bgColour = active ? "bg-primary-500" : ""
    return (
        <Link href={`$/{url}`} className={"cursor-pointer flex flex-col items-center justify-center p-2.5 rounded-lg "+bgColour}>
          <Image src={icon} alt={url} width={24} height={24}/>
        </Link>
    )
}

export default LeftNavigationIcon
