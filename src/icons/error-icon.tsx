import { FC } from "react";

const ErrorIcon: FC = () => {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="80" height="80" rx="40" fill="#E84E58" fillOpacity="0.15" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39.9998 20.7998C29.4014 20.7998 20.7998 29.4014 20.7998 39.9998C20.7998 50.5982 29.4014 59.1998 39.9998 59.1998C50.5982 59.1998 59.1998 50.5982 59.1998 39.9998C59.1998 29.4014 50.5982 20.7998 39.9998 20.7998ZM32.4095 31.4835C32.7319 31.161 33.2548 31.161 33.5772 31.4835L40 37.9062L46.4225 31.4838C46.745 31.1613 47.2678 31.1613 47.5903 31.4838L48.758 32.6515C49.0805 32.974 49.0805 33.4968 48.758 33.8192L42.3355 40.2417L48.7579 46.6641C49.0804 46.9865 49.0804 47.5094 48.7579 47.8318L47.5902 48.9996C47.2677 49.322 46.7449 49.322 46.4224 48.9996L40 42.5772L33.5773 48.9998C33.2549 49.3223 32.7321 49.3223 32.4096 48.9998L31.2419 47.8321C30.9194 47.5096 30.9194 46.9868 31.2419 46.6643L37.6645 40.2417L31.2417 33.819C30.9193 33.4965 30.9193 32.9737 31.2417 32.6512L32.4095 31.4835Z"
        fill="#E84E58"
      />
    </svg>
  );
};

export default ErrorIcon;
