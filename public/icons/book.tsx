const BookIcon = (props: { color: string }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Icon" clipPath="url(#clip0_204_582)">
        <path id="Vector"
              d="M18 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM6 4H11V12L8.5 10.5L6 12V4Z"
              fill={props.color}/>
      </g>
      <defs>
        <clipPath id="clip0_204_582">
          <rect width="24" height="24" fill="white"/>
        </clipPath>
      </defs>
    </svg>
)

export default BookIcon
