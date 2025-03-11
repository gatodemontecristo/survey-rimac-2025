import { ReactElement } from 'react';
import { TailwindFontSize } from './type';

export interface ItemOption {
  label: string;
  value: string;
}

export interface LabelRimacProps {
  size?: TailwindFontSize;
  text: string;
  special?: string;
}
export interface UrlRimacProps extends UrlProps {
  className?: string;
  size?: TailwindFontSize;
}

export interface InfoRimacProps {
  text: string;
  className?: string;
}
export interface UrlProps {
  text: string;
  url?: string;
}

export interface QuestionRimacProps {
  children?: ReactElement | ReactElement[];
}

export interface QuestionRimacHOCProps {
  ({ children }: QuestionRimacProps): JSX.Element;
  Label: ({ size, text, special }: LabelRimacProps) => JSX.Element;
  Info: ({ text, className }: InfoRimacProps) => JSX.Element;
  Url: ({ className, size, text, url }: UrlRimacProps) => JSX.Element;
}
