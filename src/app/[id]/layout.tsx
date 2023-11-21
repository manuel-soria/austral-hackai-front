import Image from 'next/image'
import HomeChats from "src/app/homeChats";

const HomeLayout = ({
                      children,
                    }: {
  children: React.ReactNode
}) => {
  return (
      <div className={"flex flex-row h-screen flex-1"}>
        <HomeChats/>
        {children}
      </div>
  )
}

export default HomeLayout
