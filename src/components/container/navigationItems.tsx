import UserIcon from "../../../public/icons/user";
import NotesIcon from "../../../public/icons/notes";
import CertificateIcon from "../../../public/icons/certificate";
import ChatIcon from "../../../public/icons/chat";

export const icons = [
  {
    url: "",
    Icon: ({color}: {color: string}) => <ChatIcon color={color}/>,
  },
  {
    url: "notes",
    Icon: ({color}: {color: string}) => <NotesIcon color={color}/>,
  },
  {
    url: "spaces",
    Icon: ({color}: {color: string}) => <UserIcon color={color}/>,
  },
  {
    url: "certificates",
    Icon: ({color}: {color: string}) => <CertificateIcon color={color}/>,
  },
]
