'use client'
import Image from "next/image";
import {usePathname} from "next/navigation";

type LeftNavigationIconProps = {
  url: string,
  icon: string,
}
const LeftNavigationIcon = (props: LeftNavigationIconProps) => {
  const {url, icon} = props

  const pathname = usePathname()
  const active = pathname === url
  const bgColour = active ? "bg-primary-600" : ""
    return (
        <div className={"flex flex-col items-center justify-center p-2.5 rounded-lg "+bgColour}>
          <Image src={icon} alt={url} width={24} height={24}/>
        </div>
    )
}

export default LeftNavigationIcon
