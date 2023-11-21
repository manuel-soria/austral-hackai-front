"use client"
import {useChat} from "ai/react";
import Message from "src/components/messaging/message";
import SendMessage from "src/components/messaging/sendMessage";
import React, {useEffect} from "react";
import RoundedImage from "src/components/roundedImage";

const ChatsContainer = () => {
  const {messages, input, handleInputChange, handleSubmit} = useChat();
  const avatar = "/avatars/blue.png"

  useEffect(() => {
    if (messages?.length) {
      const lastMessage = document.getElementById("chat-messages-" + (messages.length - 1));
      lastMessage && lastMessage.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    }
  }, [messages]);

  return (
      <div className={"h-full flex flex-col"}>
        <div className={"flex-1 basis-0 p-8 overflow-y-auto w-full"}
             id={"chat-messages"}
        >
          {messages.map((message: { role: "user" | "system", content: string }, index: number) => (
              <div key={index}>
                {
                    message.role !== "user" && (
                        <RoundedImage src={avatar} className={"mb-4"} width={30} height={30}/>
                    )
                }
                <Message id={"chat-messages-" + index} message={message.content}
                         isSender={message.role === "user"}/>
              </div>
          ))}
        </div>
        <SendMessage value={input} onChange={handleInputChange} onSendMessage={handleSubmit}/>
      </div>
  )
}
export default ChatsContainer
