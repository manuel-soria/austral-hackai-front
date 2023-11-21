const CertificateIcon = (props: { color: string }) =>
    (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_14_9686)">
        <path
            d="M9.68 13.69L12 11.93L14.31 13.69L13.43 10.84L15.75 9H12.91L12 6.19L11.09 9H8.25L10.56 10.84L9.68 13.69ZM20 10C20 5.58 16.42 2 12 2C7.58 2 4 5.58 4 10C4 12.03 4.76 13.87 6 15.28V23L12 21L18 23V15.28C19.24 13.87 20 12.03 20 10ZM12 4C15.31 4 18 6.69 18 10C18 13.31 15.31 16 12 16C8.69 16 6 13.31 6 10C6 6.69 8.69 4 12 4Z"
            fill={props.color}/>
      </g>
      <defs>
        <clipPath id="clip0_14_9686">
          <rect width="24" height="24" fill="white"/>
        </clipPath>
      </defs>
    </svg>)

export default CertificateIcon
