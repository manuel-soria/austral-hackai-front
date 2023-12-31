import HomeChatItem from "src/app/student/[id]/homeChatItem";
import H4 from "src/utils/typography/h4";

export const currentChats = [
  {
    name: "Inteligencia Artificial",
    id: "1",
    image: "/avatars/purple.png"
  },
  {
    name: "Diseño de interaccion",
    id: "2",
    image: "/avatars/green.png"
  },
  {
    name: "Introduccion a ingenieria",
    id: "3",
    image: "/avatars/blue.png"
  },
  {
    name: "Marketing Digital",
    id: "4",
    image: "/avatars/red.png"
  },
  {
    name: "Logica y circuitos digitales",
    id: "5",
    image: "/avatars/yellow.png"
  }
]

const HomeChats = () => {
  return (
      <div className={"px-4 py-8 h-screen bg-gray-100 border-r-gray-300"}>
        <H4>Mis Tutores</H4>
        <div className={"flex flex-col mt-6 gap-2"}>
          {
            currentChats.map((chat, index) => (
              <HomeChatItem key={index} {...chat}/>
            ))
          }
        </div>
      </div>
  )
}

export default HomeChats
