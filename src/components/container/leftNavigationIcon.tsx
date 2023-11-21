'use client'
import {usePathname} from "next/navigation";
import Link from "next/link";
import {colorConfig} from "../../../tailwind.config";
import {ReactNode} from "react";
import {icons} from "src/components/container/navigationItems";

type LeftNavigationIconProps = {
  url: string,
}
const LeftNavigationIcon = (props: LeftNavigationIconProps) => {
  const {url} = props
  const SelectedIcon = icons.find(({url: iconUrl}) => iconUrl === url)?.Icon

  const pathname = usePathname()
  const active = pathname.split("/")[0] === url
  const bgColour = active ? "bg-secondary-100" : ""
  const color = active ? colorConfig.secondary["400"] : colorConfig.black

  if(!SelectedIcon) return (<></>)
  return (
      <Link href={`$/{url}`}
            className={"cursor-pointer flex flex-col items-center justify-center p-2.5 rounded-lg " + bgColour}>
        <SelectedIcon color={color}/>
      </Link>
  )
}

export default LeftNavigationIcon
