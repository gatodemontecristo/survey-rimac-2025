import { create } from 'zustand';
import { StepCircleProps } from '../types';

export interface useStepProgressProps {
  stepProgress: StepCircleProps[];
  step: number;
  actionStep: (isMore: boolean) => void;
}

export const useStepProgress = create<useStepProgressProps>((set, get) => ({
  stepProgress: [
    {
      title: 'Sobre ti',
      state: 'active',
      img: '../icons/svgexport-118.svg',
    },
    {
      title: 'Hábitos',
      state: 'inactive',
      img: '../icons/svgexport-8.svg',
    },
    {
      title: 'Enfermedades',
      state: 'inactive',
      img: '../icons/svgexport-2.svg',
    },
    {
      title: 'Familiares',
      state: 'inactive',
      img: '../icons/svgexport-247.svg',
    },
  ],
  step: 0,
  actionStep: (isMore) => {
    const valor = isMore ? get().step + 1 : get().step - 1;
    set({ step: valor });
    set({
      stepProgress: [
        {
          title: 'Sobre ti',
          state: valor < 3 ? 'active' : 'completed',
          img: '../icons/svgexport-118.svg',
        },
        {
          title: 'Hábitos',
          state: valor >= 3 ? (valor < 7 ? 'active' : 'completed') : 'inactive',
          img: '../icons/svgexport-8.svg',
        },
        {
          title: 'Enfermedades',
          state:
            valor >= 7 ? (valor < 12 ? 'active' : 'completed') : 'inactive',
          img: '../icons/svgexport-2.svg',
        },
        {
          title: 'Familiares',
          state:
            valor >= 12 ? (valor < 14 ? 'active' : 'completed') : 'inactive',
          img: '../icons/svgexport-247.svg',
        },
      ],
    });
  },
}));
