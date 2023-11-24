"use client"
import Image from "next/image";
import {usePathname} from "next/navigation";
import {studentIcons, professorIcons} from "src/components/container/navigationItems";
import LeftNavigationIcon from "src/components/container/leftNavigationIcon";
import RoundedImage from "src/components/common/roundedImage";

const user1ProfileImage = "/students/cook.png"
const user2ProfileImage = "/students/runner.png"
const professorProfileImage = "/avatars/purple.png"

const LeftNavigation = () => {
  const pathname = usePathname()
  const activePath = pathname.split("/")
  const isProfessor = activePath[1] === "professor"
  const icons = isProfessor ? professorIcons : studentIcons
  const activeIcon = icons.find(({url}) => `/${url}` === pathname) ?? icons[0]

  const id = localStorage.getItem("id")
  const profileImage = !isProfessor ? id === "1" ? user1ProfileImage : user2ProfileImage : professorProfileImage
  return (
      <div className={"bg-white w-20 p-3.5 py-4 flex flex-col justify-between content-center"}>
        <div>
          <Image src={'/logo.svg'} alt={'our-logo'} width={40} height={40}/>
          <div className={'mt-10 flex flex-col gap-2'}>
            {
              icons.map((icon, index) => (
                  <LeftNavigationIcon key={index} url={icon.url}
                                      active={activeIcon.url == icon.url} icon={icon.Icon}/>)
              )
            }
          </div>
        </div>
        <div className={'flex items-center justify-center'}>
          <RoundedImage src={profileImage}/>
        </div>
      </div>
  )
}

export default LeftNavigation
