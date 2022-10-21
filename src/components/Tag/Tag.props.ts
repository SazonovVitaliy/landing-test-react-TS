import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ITagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  appearance?: "small" | "medium" | "large";
  color?: "white" | "blue" | "grey" | "green" | "primary" | "black";
  href?: string;
  ellipse?: ReactNode;
}
