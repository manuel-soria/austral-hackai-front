const ChatIcon = (props: { color: string }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_14_9680)">
        <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" fill={props.color}/>
      </g>
      <defs>
        <clipPath id="clip0_14_9680">
          <rect width="24" height="24" fill="white"/>
        </clipPath>
      </defs>
    </svg>
)

export default ChatIcon
