import React from 'react';
import {motion, MotionProps} from "framer-motion"

export interface MessageProps {
  message?: string;
  isSender: boolean;
  id?: string;
  loading?: boolean;
}

const Message: React.FC<MessageProps> = (props: MessageProps) => {
  const {message, isSender, id, loading} = props;
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
          <div className={loading ? "dot-flashing" : ""}>{message}</div>
          <div id={id}/>
        </div>
      </motion.div>
  );
};

export default Message;
