"use client"
import Label from "src/components/common/label";
import {ChangeEvent, useRef, useState} from "react";
import P from "src/utils/typography/p";
import AddSubjectFormFile from "src/app/professor/[id]/addSubjectFormFile";
import Link from "next/link";
import AddIcon from "../../../../public/icons/add";
import {colorConfig} from "../../../../tailwind.config";
import {Button} from "src/components/common/button";

const AddSubjectForm = () => {
  const [subjectName, setSubjectName] = useState("");
  const [subjectDescription, setSubjectDescription] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDelete = (index: number) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  }

  const handleAddFiles = (e: ChangeEvent<HTMLInputElement>) => {
    const newFiles = [...files];
    const filesToAdd = e.target.files;
    if (filesToAdd) {
      for (let i = 0; i < filesToAdd.length; i++) {
        newFiles.push(filesToAdd[i]);
      }
    }
    setFiles(newFiles);
  }

  return (
      <div className={"mt-8"}>
        <div className={"flex flex-col gap-4"}>
          <Label value={subjectName} setValue={e => setSubjectName(e)} placeholder={"Diseño de interaccion"}
                 label={"Nombre de la materia"}/>
          <Label value={subjectDescription} setValue={e => setSubjectDescription(e)}
                 placeholder={"En esta materia se indagara..."} label={"Descripcion"}/>
        </div>
        <div className={"py-8 h-fit"}>
          <P className={"font-bold"}>Contenido</P>
          <div className={"flex flex-col gap-2 content-between h-fit"}>
            <div className={"flex-1 pt-1 min-h-[340px] max-h-[340px] overflow-y-auto"}>
              {
                files.map((file, index) => (
                    <div key={index} className={"flex flex-row gap-4 items-center"}>
                      <AddSubjectFormFile file={file} onDeleteClick={() => handleDelete(index)}/>
                    </div>
                ))
              }
            </div>
            <div>
              <input className={"hidden"} ref={inputRef} type={"file"} multiple={true} onChange={e => handleAddFiles(e)}
              />
              <div onClick={() => inputRef?.current?.click()}
                   className={"cursor-pointer border rounded-lg border-gray-300 flex gap-2 p-2  w-full items-center"}>
                <AddIcon color={colorConfig.gray["500"]}/>
                <P className={"text-gray-400 text-sm"}>Agregar nueva clase</P>
              </div>
            </div>
          </div>
        </div>
        <div className={"w-full flex justify-end"}>
          <Button variant={"filled"} size={"medium"}>Guardar</Button>
        </div>


      </div>
  )

}

export default AddSubjectForm;
