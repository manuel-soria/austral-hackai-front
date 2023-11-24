"use client";
import Message from "src/components/messaging/message";
import SendMessage from "src/components/messaging/sendMessage";
import React, {useEffect} from "react";
import RoundedImage from "src/components/common/roundedImage";
import {useChat} from "src/utils/hooks/useChat";
import LoadingDots from "src/components/messaging/loadingDots";
import {currentChats} from "src/app/student/[id]/homeChats";

const ChatsContainer = () => {
  const {messages, input, handleInputChange, handleSubmit, isLoading} =
      useChat();
  const avatar = currentChats.find((chat) => chat.id === "1")?.image;

  useEffect(() => {
    if (messages?.length) {
      const lastMessage = document.getElementById(
          "chat-messages-" + (messages.length - 1)
      );
      lastMessage &&
      lastMessage.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  }, [messages]);

  return (
      <div className={"h-full flex flex-col"}>
        <div
            className={"flex-1 basis-0 p-8 overflow-y-auto w-full"}
            id={"chat-messages"}
        >
          {messages?.length > 0 && messages.map(
              (
                  message: { role: "user" | "system"; content: string },
                  index: number
              ) => (
                  <div key={index}>
                    {message.role !== "user" && (
                        <div>
                          <RoundedImage
                              src={avatar ?? currentChats[0].image}
                              className={"mb-4"}
                              width={30}
                              height={30}
                          />
                        </div>
                    )}
                    <Message
                        id={"chat-messages-" + index}
                        message={message.content}
                        isSender={message.role === "user"}
                    />
                  </div>
              )
          )}
          {
              isLoading && (
                  <div>
                    <RoundedImage
                        src={avatar}
                        className={"mb-4"}
                        width={30}
                        height={30}
                    />
                    <div className={`w-fit justify-start bg-gray-200 rounded-bl-none rounded-xl text-gray-700 p-4`}>
                      <LoadingDots dotCount={3} animationDuration={1}/>
                    </div>
                  </div>
              )
          }
          {/*{*/}
          {/*    isLoading && (*/}
          {/*        <div>*/}
          {/*          <RoundedImage src={avatar} className={"mb-4"} width={30} height={30}/>*/}
          {/*          <Message id={"chat-messages-" + messages.length} loading={true} isSender={false}/>*/}
          {/*        </div>*/}
          {/*    )*/}
          {/*}*/}
        </div>
        <SendMessage
            value={input}
            onChange={(e) => handleInputChange(e)}
            onSendMessage={(e) => handleSubmit()}
        />
      </div>
  );
};
export default ChatsContainer;
