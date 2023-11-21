import Image from "next/image";
import {usePathname} from "next/navigation";
import {icons} from "src/components/container/navigationItems";
import LeftNavigationIcon from "src/components/container/leftNavigationIcon";
import RoundedImage from "src/components/roundedImage";

const LeftNavigation = () => {
  const profileImage = "https://s3-alpha-sig.figma.com/img/266c/1ecc/481e60b5d9ac960eff46aefc5a66b55f?Expires=1701648000&Signature=mWixTfZ9IoGMFEzSLfN6r4CLMKVazkN3lCYaFshogZNuR2-HCaccZno6AGYxBgxJEFRz815kemNji4Yop-P~GQsBRsBVX8TkZOXBEbJHKvQwkoYPh6Uo5RXBR1e1ILuSOaIzsJhcqoYNanZ2Ew012bSLI~kF02-pSNYgY-4vaRWXjPuv-EkOQjU~CCsvWkfiWBA4NJgBrIkJsVC7eKoV--q~TcJtvbyagMvYCUBZT4k0lRFHOc939YnAIvEWAiHmmhmKiyoKIYS5oVr4TB5TPdU4TGTk0ttnTuFjtxhl9PcV6600b5-nWXevrIZ1KwydFcn1SBJpBooITzI3GDETxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
  return (
      <div className={"bg-white w-20 p-3.5 py-4 flex flex-col justify-between content-center"}>
        <div>
          <Image src={'logo.svg'} alt={'our-logo'} width={50} height={50}/>
          <div className={'mt-10 flex flex-col gap-2'}>
            {
              icons.map(({url, icon}, index) => (
                  <LeftNavigationIcon key={index} url={url} icon={icon}/>
              ))
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
