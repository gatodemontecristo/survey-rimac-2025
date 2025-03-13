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
      number: 1,
      state: 'active',
    },
    {
      title: 'Hábitos',
      number: 2,
      state: 'inactive',
    },
    {
      title: 'Enfermedades',
      number: 3,
      state: 'inactive',
    },
    {
      title: 'Familiares',
      number: 4,
      state: 'inactive',
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
          number: 1,
          state: valor < 3 ? 'active' : 'completed',
        },
        {
          title: 'Hábitos',
          number: 2,
          state: valor >= 3 ? 'active' : 'inactive',
        },
        {
          title: 'Enfermedades',
          number: 3,
          state: 'inactive',
        },
        {
          title: 'Familiares',
          number: 4,
          state: 'inactive',
        },
      ],
    });
  },
}));
