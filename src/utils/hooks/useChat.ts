import {useState} from "react";

export const useChat = () => {

    const [messages, setMessages] = useState<{role: string, content: string}[]>([])
    const [input, setInput] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleInputChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = async () => {

        setIsLoading(true)

        const response = await fetch('http://127.0.0.1:5000/get-answer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: localStorage.getItem('id'),
                assistant_id: 'asst_id55v2BI9gfFKI1LuS6OVZ1z',
                content: input.toString()

            })
        }).then((r) => {
            setIsLoading(false)
            setMessages((prevMessages) => [...prevMessages, {role: 'user', content: input}]);
            setInput('')
            setMessages((prevMessages) => [...prevMessages, {role: 'system', content: r.last_message.message}])
        });
    }

    return {messages, input, handleInputChange, handleSubmit, isLoading}

}