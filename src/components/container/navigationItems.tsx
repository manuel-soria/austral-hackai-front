import UserIcon from "../../../public/icons/user";
import NotesIcon from "../../../public/icons/notes";
import CertificateIcon from "../../../public/icons/certificate";
import ChatIcon from "../../../public/icons/chat";
import BookIcon from "../../../public/icons/book";

export const studentIcons = [
  {
    url: "student",
    Icon: ({color}: {color: string}) => <ChatIcon color={color}/>,
  },
  {
    url: "student/notes",
    Icon: ({color}: {color: string}) => <NotesIcon color={color}/>,
  },
  {
    url: "student/spaces",
    Icon: ({color}: {color: string}) => <UserIcon color={color}/>,
  },
  {
    url: "student/certificates",
    Icon: ({color}: {color: string}) => <CertificateIcon color={color}/>,
  },
]

export const professorIcons = [
  {
    url: "professor",
    Icon: ({color}: {color: string}) => <BookIcon color={color}/>,
  },
  {
    url: "professor/spaces",
    Icon: ({color}: {color: string}) => <UserIcon color={color}/>,
  },
  {
    url: "professor/charts",
    Icon: ({color}: {color: string}) => <ChatIcon color={color}/>,
  },
]
