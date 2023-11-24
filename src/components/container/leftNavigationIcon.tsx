import Link from "next/link";
import {colorConfig} from "../../../tailwind.config";
import {studentIcons} from "src/components/container/navigationItems";

type LeftNavigationIconProps = {
  url: string,
  active?: boolean,
  icon: React.FC<{color: string}>
}
const LeftNavigationIcon = (props: LeftNavigationIconProps) => {
  const {url, active,icon: SelectedIcon} = props

  const bgColour = active ? "bg-secondary-100" : ""
  const color = active ? colorConfig.secondary["400"] : colorConfig.black

  if (!SelectedIcon) return (<></>)
  return (
      <Link href={`/${url}`}
            className={"cursor-pointer flex flex-col items-center justify-center p-2.5 rounded-lg " + bgColour}>
        <SelectedIcon color={color}/>
      </Link>
  )
}

export default LeftNavigationIcon
