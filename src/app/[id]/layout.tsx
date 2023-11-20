import Image from 'next/image'
import HomeChats from "src/app/homeChats";

const HomeLayout = ({
                      children,
                    }: {
  children: React.ReactNode
}) => {
  return (
      <div className={"flex flex-row h-screen"}>
        <HomeChats/>
        {children}
      </div>
  )
}

export default HomeLayout
