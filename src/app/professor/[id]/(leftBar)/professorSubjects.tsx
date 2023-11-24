import H4 from "src/utils/typography/h4";
import Subject from "src/app/professor/[id]/(leftBar)/subject";
import Link from "next/link";
import AddIcon from "../../../../../public/icons/add";
import {colorConfig} from "../../../../../tailwind.config";
import P from "src/utils/typography/p";

const subjects = [
  {
    name: "Inteligencia Artificial",
    id: "1",
  },
  {
    name: "Machine Learning",
    id: "2",
  }
]

const ProfessorSubjects = () => {
  return (
      <div className={"px-4 py-8 h-screen bg-gray-100 border-r-gray-300"}>
        <H4>Mis Materias</H4>
        <div className={"flex flex-col mt-6 gap-2"}>
          {
            subjects.map((chat, index) => (
                <Subject key={index} {...chat}/>
            ))
          }
          <Link href={"/professor"}
                className={"border rounded-lg border-gray-300 flex gap-2 p-2  w-[270px] items-center"}>
            <AddIcon color={colorConfig.gray["500"]}/>
            <P className={"text-gray-400 text-sm"}>Agregar nueva clase</P>
          </Link>
        </div>
      </div>
  )
}

export default ProfessorSubjects
