import {ChangeEvent, SyntheticEvent, useRef, useState} from "react";
import Image from "next/image";
import SendIcon from "../../../public/icons/send";
import {colorConfig} from "../../../tailwind.config";
import message from "src/components/messaging/message";

interface SendMessageProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  onSendMessage: (e: any) => void;
}

const SendMessage = (props: SendMessageProps) => {
  const {value, onChange, disabled, onSendMessage} = props;
  const [active, setActive] = useState(false);
  const textRef = useRef<any>(null);


  const handleWrite = (e: SyntheticEvent) => {
    const target = e.target as HTMLTextAreaElement;
    if (target.scrollHeight < 100) {
      textRef.current.style.height = `${target.scrollHeight}px`;
    }
  };

  const handleSendMessage = (e: any) => {
    textRef.current.focus();
    onSendMessage(e);
  }
  return (
      <div
          className={`flex justify-between items-center rounded-lg border border-solid border-gray-200 bg-white pr-2 pl-4 h-fit gap-1`}>
         <textarea
             className="my-2 ml-1 w-full resize-none overflow-y-auto focus:outline-none"
             placeholder="Escriba su mensaje ..."
             rows={1}
             onChange={e => {
               handleWrite(e)
               onChange(e);
             }}
             value={value}
             ref={textRef}
         />
        <div className={"p-2 rounded-lg bg-gray-200 cursor-pointer"} onClick={handleSendMessage} onMouseEnter={() => value && setActive(true)}
             onMouseLeave={() => setActive(false)}>
          <SendIcon color={active ? colorConfig.primary["500"] : colorConfig.gray["500"]}/>
        </div>
      </div>
  );
}

export default SendMessage;
