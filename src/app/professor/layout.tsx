import ProfessorSubjects from "src/app/professor/[id]/(leftBar)/professorSubjects";

const ProfessorLayout = ({
                      children,
                    }: {
  children: React.ReactNode
}) => {
  return (
      <div className={"flex flex-row h-screen flex-1"}>
        <ProfessorSubjects/>
        {children}
      </div>
  )
}

export default ProfessorLayout
