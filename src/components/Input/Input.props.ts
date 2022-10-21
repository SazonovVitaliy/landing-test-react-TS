import { ReactNode } from "react";
import { HTMLAttributes } from "react";
import { DetailedHTMLProps } from "react";
export interface IInputProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  children?: ReactNode;
  type: string;
  label?: string;
}
