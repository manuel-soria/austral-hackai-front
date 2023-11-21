import React from 'react';
import {motion, MotionProps} from "framer-motion"
import Caption from "src/utils/typography/caption";

export interface MessageProps {
  message: string;
  isSender: boolean;
  id?: string;
}

const Message: React.FC<MessageProps> = (props: MessageProps) => {
  const {message, isSender, id} = props;
  const messageStyles = isSender ? {
    justify: 'justify-end',
    bg: 'bg-primary-500 text-white',
    border: 'rounded-br-none',
    caption: 'text-gray-200',
  } : {
    justify: 'justify-start',
    bg: 'bg-gray-200 text-black',
    border: 'rounded-bl-none',
    caption: 'text-gray-700',
  }

  const motionData: MotionProps = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    transition: {
      ease: "easeOut",
      duration: 1
    }
  };

  return (
      <motion.div
          {...motionData}
          className={`flex mb-4 ${messageStyles.justify}`}
      >
        <div
            className={`${messageStyles.bg} ${messageStyles.border} relative p-3 rounded-2xl min-w-xs overflow-ellipsis break-words max-w-[532px]`}
        >
          {message}
          {/*<div className={`flex justify-end mt-4`}>*/}
          {/*  <Caption className={messageStyles.caption}>*/}
          {/*    {date.getHours()}:{date.getMinutes()}*/}
          {/*  </Caption>*/}
          {/*</div>*/}
        </div>
        <div id={id}/>
      </motion.div>
  );
};

export default Message;
