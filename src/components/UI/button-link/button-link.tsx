import { FC, ReactNode, memo } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import style from "./button-link.module.css";

type ButtonSize = "small" | "large";
type ButtonColor = "primary" | "secondary";

type Props = {
  to: string;
  size?: ButtonSize;
  color?: ButtonColor;
  children: ReactNode;
};

const ButtonLink: FC<Props> = memo(
  ({ to, size = "small", color = "primary", children }) => {
    return (
      <Link
        to={to}
        className={cn(
          style.button,
          size === "small" ? style.button_size_small : style.button_size_large,
          color === "primary"
            ? style.button_color_primary
            : style.button_color_secondary
        )}
      >
        {children}
      </Link>
    );
  }
);

export default ButtonLink;
