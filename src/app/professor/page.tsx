import ChatsContainer from "src/components/messaging/chats";
import H2 from "src/utils/typography/h2";
import Label from "src/components/common/label";
import AddSubjectForm from "src/app/professor/[id]/addSubjectForm";

const AddSubjectPage = () => {
  return(
      <div className={"bg-white flex justify-center items-center w-full h-screen pt-16 pb-32"}>
        <div className={"max-w-[846px] w-8/12 h-full"}>
          <H2>Añadir nueva materia</H2>
          <AddSubjectForm/>
        </div>
      </div>
  )
}

export default AddSubjectPage
