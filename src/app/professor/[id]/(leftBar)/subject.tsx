"use client"
import {usePathname} from "next/navigation";
import Link from "next/link";
import SubjectLeftImage from "src/app/professor/[id]/(leftBar)/subjectLeftImage";

type SubjectProps = {
  name: string
  id: string
}
const Subject = (props: SubjectProps) => {
  const {name, id} = props;
  const pathName = usePathname()
  const isActive = pathName === `/professor/${id}`
  const activeClass = isActive ? "bg-green-400 border border-green-500 text-700 text-green-700" : ""
  return (
      <Link href={pathName.includes("professor") ? `/professor/${id}` : `${id}`}
            className={`flex items-center font-medium gap-2 p-2 rounded-lg cursor-pointer ${activeClass} w-[270px]`}>
        <SubjectLeftImage active={isActive}/>
        {name}
      </Link>
  )
}

export default Subject
