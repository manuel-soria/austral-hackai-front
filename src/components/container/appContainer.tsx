import LeftNavigation from "src/components/container/leftNavigation";

type AppContainerProps = {
  children: React.ReactNode
}
const AppContainer = (props: AppContainerProps) => {
  return (
      <div className={"flex h-full"}>
        <LeftNavigation/>
      </div>
  )
}

export default AppContainer
