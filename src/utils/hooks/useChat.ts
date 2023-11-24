import {ChangeEvent, useState} from "react";

type Role = "user" | "system"
export const useChat = () => {

  const [messages, setMessages] = useState<{ role: Role, content: string }[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e: any) => {
    setInput(e.target.value)
  }

  const handleSubmit = async () => {
    if (input) {
      setIsLoading(true)
      setMessages((prevMessages) => [...prevMessages, {role: 'user', content: input}]);
      setInput('')


      await fetch('http://127.0.0.1:5000/get-answer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user_id: localStorage.getItem('id') ?? "1",
          assistant_id: 'asst_id55v2BI9gfFKI1LuS6OVZ1z',
          content: input.toString()

        })
        //@ts-ignore
      }).then(async(r) => {
        setIsLoading(false)
        const response = await r.json()
        const lastMessage = response?.last_message
        setMessages((prevMessages) => [...prevMessages, {role: lastMessage?.role, content: lastMessage?.message}])
      });
    }
  }

  return {messages, input, handleInputChange, handleSubmit, isLoading}

}
