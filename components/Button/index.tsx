import cn from "classnames";
import React from "react";
import { IButtonProps } from "./Button.type";

const Button = (props: IButtonProps): JSX.Element => {
  const { href, size = 15, children, className, ...otherProps } = props;

  return (
    <a
      href={href}
      className={cn(
        "button",
        {
          ["button15"]: size === 15,
          ["button20"]: size === 20,
        },
        className
      )}
      {...otherProps}
    >
      {children}
    </a>
  );
};

export default Button;
