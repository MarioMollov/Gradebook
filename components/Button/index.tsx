import { PropsWithChildren } from "react";
import classes from "./Button.module.scss";
import clsx from "clsx";

export enum ButtonStyle {
  SUCCESS = "success",
  ERROR = "error",
  DEFAULT = "default",
}
type Props = {
  className?: string;
  onClick: () => void;
  style?: ButtonStyle;
} & PropsWithChildren;

const Button = ({
  children,
  className,
  onClick,
  style = ButtonStyle.DEFAULT,
}: Props) => {
  return (
    <button
      onClick={onClick}
      className={clsx(classes.button, classes[style], className)}
    >
      {children}
    </button>
  );
};

export default Button;
