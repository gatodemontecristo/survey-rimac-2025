import { ReactElement } from 'react';
import { TailwindFontSize } from './type';
import { Control } from 'react-hook-form';

export interface ItemOption {
  label: string;
  value: string;
}

export interface LabelRimacProps {
  size?: TailwindFontSize;
  text: string;
  special?: string;
  reverse?: boolean;
}
export interface UrlRimacProps extends UrlProps {
  className?: string;
  size?: TailwindFontSize;
}

export interface InfoRimacProps {
  text: string;
  className?: string;
  size?: TailwindFontSize;
}
export interface UrlProps {
  text: string;
  url?: string;
}

export interface QuestionRimacProps {
  children?: ReactElement | ReactElement[];
  className?: string;
}

export interface QuestionRimacHOCProps {
  ({ children }: QuestionRimacProps): JSX.Element;
  Label: ({ size, text, special }: LabelRimacProps) => JSX.Element;
  Info: ({ text, className }: InfoRimacProps) => JSX.Element;
  Url: ({ className, size, text, url }: UrlRimacProps) => JSX.Element;
}

export interface ReactFormProps {
  name: string;
  control: Control<any>;
  message?: string;
}

export interface StepCircleProps {
  title: string;
  number: number;
  state: 'active' | 'inactive' | 'completed';
}

export interface SlideProps {
  fnSubmit: () => void;
}
