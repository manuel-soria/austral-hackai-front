"use client"
import Image from "next/image";
import {usePathname} from "next/navigation";
import {studentIcons, professorIcons} from "src/components/container/navigationItems";
import LeftNavigationIcon from "src/components/container/leftNavigationIcon";
import RoundedImage from "src/components/common/roundedImage";

const user1ProfileImage = "https://s3-alpha-sig.figma.com/img/266c/1ecc/481e60b5d9ac960eff46aefc5a66b55f?Expires=1701648000&Signature=mWixTfZ9IoGMFEzSLfN6r4CLMKVazkN3lCYaFshogZNuR2-HCaccZno6AGYxBgxJEFRz815kemNji4Yop-P~GQsBRsBVX8TkZOXBEbJHKvQwkoYPh6Uo5RXBR1e1ILuSOaIzsJhcqoYNanZ2Ew012bSLI~kF02-pSNYgY-4vaRWXjPuv-EkOQjU~CCsvWkfiWBA4NJgBrIkJsVC7eKoV--q~TcJtvbyagMvYCUBZT4k0lRFHOc939YnAIvEWAiHmmhmKiyoKIYS5oVr4TB5TPdU4TGTk0ttnTuFjtxhl9PcV6600b5-nWXevrIZ1KwydFcn1SBJpBooITzI3GDETxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
const professorProfileImage = "/avatars/blue.png"

const LeftNavigation = () => {
  const pathname = usePathname()
  const activePath = pathname.split("/")
  const isProfessor = activePath[1] === "professor"
  const icons = isProfessor ? professorIcons : studentIcons
  const activeIcon = icons.find(({url}) => `/${url}` === pathname) ?? icons[0]
  const profileImage = !isProfessor ? user1ProfileImage : professorProfileImage
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
