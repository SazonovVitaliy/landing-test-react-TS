import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ILogoProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: ReactNode | string;
  appearance: "small" | "large";
  color: "black" | "white";
}
