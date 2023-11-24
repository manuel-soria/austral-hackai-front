import PdfFileIcon from "../../../../public/icons/pdf_file";
import {colorConfig} from "../../../../tailwind.config";
import P from "src/utils/typography/p";
import Caption from "src/utils/typography/caption";
import {formatDateToDDMMYYYY} from "src/utils/utils";
import {useState} from "react";
import TrashIcon from "../../../../public/icons/tash";

type AddSubjectFormFileProps = {
  file: File
  onDeleteClick: () => void
}
const AddSubjectFormFile = (props: AddSubjectFormFileProps) => {
  const {file} = props;
  const gray = colorConfig.gray["300"]
  const red = colorConfig.secondary["400"]
  const [color, setColor] = useState(gray);
  const date = new Date(file.lastModified);
  return (
      <div className="flex justify-between p-2 rounded-lg w-full ">
        <div className={"flex gap-2 items-center"}>
          <PdfFileIcon color={colorConfig.primary["500"]}/>
          <div className={"flex flex-col justify-center"}>
            <P>{file.name}</P>
            <Caption className={"font-xs"}>{formatDateToDDMMYYYY(date)}</Caption>
          </div>
        </div>
        <div onClick={() => props.onDeleteClick()} className={"cursor-pointer p-2"} onMouseLeave={() => setColor(gray)} onMouseEnter={() => setColor(red)}>
          <TrashIcon color={color}/>
        </div>
      </div>
  );
}

export default AddSubjectFormFile;
