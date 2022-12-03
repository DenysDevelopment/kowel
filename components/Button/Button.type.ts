import React, {  LinkHTMLAttributes } from "react";

export interface IButtonProps extends React.DetailedHTMLProps<LinkHTMLAttributes<HTMLLinkElement>,HTMLLinkElement> {
  href: string;
  children: React.ReactNode
  size?: 15 | 20;
}
