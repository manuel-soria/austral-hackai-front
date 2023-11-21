import LeftNavigation from "src/components/container/leftNavigation";

type AppContainerProps = {
  children: React.ReactNode
}
const AppContainer = (props: AppContainerProps) => {
  return (
      <div className={"flex h-screen border-r-gray-300"}>
        <LeftNavigation/>
        {props.children}
      </div>
  )
}

export default AppContainer
