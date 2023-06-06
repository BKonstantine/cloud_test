import { FC, ReactNode } from "react";
import cn from "classnames";
import style from "./button.module.css";

type ButtonType = "button" | "submit";
type ButtonSize = "small" | "large";
type ButtonColor = "primary" | "secondary";

type Props = {
  type?: ButtonType;
  size?: ButtonSize;
  color?: ButtonColor;
  children: ReactNode;
};

const Button: FC<Props> = ({
  type = "button",
  size = "small",
  color = "primary",
  children,
}) => {
  return (
    <button
      type={type}
      className={cn(
        style.button,
        size === "small" ? style.button_size_small : style.button_size_large,
        color === "primary"
          ? style.button_color_primary
          : style.button_color_secondary
      )}
    >
      {children}
    </button>
  );
};

export default Button;
