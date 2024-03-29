import { ButtonHTMLAttributes, FC, ReactNode, memo } from "react";
import cn from "classnames";
import style from "./button.module.css";

type ButtonSize = "small" | "middle" | "large";
type ButtonColor = "primary" | "secondary";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonSize?: ButtonSize;
  color?: ButtonColor;
  children: ReactNode;
  className?: string;
}

const Button: FC<Props> = memo(
  ({
    className,
    type = "button",
    buttonSize = "middle",
    color = "primary",
    children,
    ...rest
  }) => {
    return (
      <button
        type={type}
        className={cn(
          style.button,
          className,
          buttonSize === "small"
            ? style.button_size_small
            : buttonSize === "middle"
            ? style.button_size_middle
            : style.button_size_large,
          color === "primary"
            ? style.button_color_primary
            : style.button_color_secondary
        )}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

export default Button;
