import { create } from 'zustand';
import { StepCircleProps } from '../types';
import {
  SlideInformation01,
  SlideTermsConditions,
  SlideInformation02,
  SlideInformation03,
  SlideInformation04,
  SlideInformation05,
  SlideSuccess01,
  SlideSuccess02,
  SlideInformation06,
  SlideInformation07,
  SlideInformation08,
  SlideInformation09,
  SlideSuccess03,
  SlideInformation10,
  SlideFinish,
  SlideAdditional,
} from '../components';

export interface useStepProgressProps {
  stepProgress: StepCircleProps[];
  step: number;
  slides: { [key: number]: JSX.Element };
  indexSlide: number;
  actionStep: (isMore: boolean) => void;
  setIndexSlide: (indexSlide: number) => void;
  nextQuestion: () => void;
  backQuestion: () => void;
  nextSlide: () => JSX.Element | null;
  addSlide: () => void;
  removeSlide: () => void;
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
  slides: {
    0: <SlideTermsConditions />,
    1: <SlideInformation01 />,
    2: <SlideInformation02 />,
    3: <SlideSuccess01 />,
    4: <SlideInformation03 />,
    5: <SlideInformation04 />,
    6: <SlideInformation05 />,
    7: <SlideSuccess02 />,
    8: <SlideInformation06 />,
    9: <SlideInformation07 />,
    10: <SlideInformation08 />,
    11: <SlideInformation09 />,
    12: <SlideSuccess03 />,
    13: <SlideInformation10 />,
    14: <SlideFinish />,
  },
  indexSlide: 0,
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
  setIndexSlide: (indexSlide) => {
    set({ indexSlide });
  },
  nextQuestion: () => {
    const { step, setIndexSlide, actionStep } = get();
    actionStep(true);
    setIndexSlide(step + 1);
  },
  backQuestion: () => {
    const { step, setIndexSlide, actionStep, slides, removeSlide, indexSlide } =
      get();
    if (step > 0) {
      console.log('slides', Object.keys(slides).length);
      console.log('indexSlide', indexSlide);
      Object.keys(slides).length === 16 && indexSlide === 10 && removeSlide();
      actionStep(false);
      setIndexSlide(step - 1);
    }
  },
  nextSlide: () => {
    return get().slides[get().step] || null;
  },
  addSlide: () => {
    const { slides } = get();
    const updatedSlides = { ...slides };

    for (let i = Object.keys(updatedSlides).length - 1; i >= 10; i--) {
      updatedSlides[i + 1] = updatedSlides[i];
    }
    updatedSlides[10] = <SlideAdditional></SlideAdditional>;
    set({ slides: updatedSlides });
  },
  removeSlide: () => {
    const { slides } = get();
    const updatedSlides = { ...slides };
    delete updatedSlides[10];
    for (let i = 11; i < Object.keys(updatedSlides).length; i++) {
      updatedSlides[i - 1] = updatedSlides[i];
    }
    delete updatedSlides[Object.keys(updatedSlides).length - 1];

    set({ slides: updatedSlides });
  },
}));
