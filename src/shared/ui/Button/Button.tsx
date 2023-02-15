import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import s from "./Button.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const { className, theme, children, ...buttonProps } = props;
  return (
    <button
      className={classNames(s.button, {}, [className, s[theme]])}
      {...buttonProps}
    >
      {children}
    </button>
  );
};
