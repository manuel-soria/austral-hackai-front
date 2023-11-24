import Subject from "../../../../../public/icons/subject";
import {colorConfig} from "../../../../../tailwind.config";

type SubjectLeftImageProps = {
  active: boolean
}
const SubjectLeftImage = (props: SubjectLeftImageProps) => {
  const {active} = props;
  return (
      <div className="p-2 rounded-lg">
        <Subject color={active ? colorConfig.green["500"] : "black"}/>
      </div>
  )
}

export default SubjectLeftImage
