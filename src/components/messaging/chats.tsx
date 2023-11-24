"use client";
import Message from "src/components/messaging/message";
import SendMessage from "src/components/messaging/sendMessage";
import React, {useEffect, useState} from "react";
import RoundedImage from "src/components/common/roundedImage";
import {useChat} from "../../utils/hooks/useChat";

const ChatsContainer = () => {
	const { messages, input, handleInputChange, handleSubmit, isLoading } =
		useChat();
	const avatar = "/avatars/blue.png";

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
										src={avatar}
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
