import { create } from 'zustand';
import { StepCircleProps } from '../types';
import { persist } from 'zustand/middleware';

export interface useStepProgressState {
  stepProgress: StepCircleProps[];
  step: number;
  slides: { [key: number]: string };
  indexSlide: number;
}
const initialState: useStepProgressState = {
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
    0: 'SlideTermsConditions',
    1: 'SlideInformation01',
    2: 'SlideInformation02',
    3: 'SlideSuccess01',
    4: 'SlideInformation03',
    5: 'SlideInformation04',
    6: 'SlideInformation05',
    7: 'SlideSuccess02',
    8: 'SlideInformation06',
    9: 'SlideInformation07',
    10: 'SlideInformation08',
    11: 'SlideInformation09',
    12: 'SlideSuccess03',
    13: 'SlideInformation10',
    14: 'SlideFinish',
  },
  indexSlide: 0,
};
export interface useStepProgressAction {
  actionStep: (isMore: boolean) => void;
  setIndexSlide: (indexSlide: number) => void;
  nextQuestion: () => void;
  backQuestion: () => void;
  addSlide: () => void;
  removeSlide: () => void;
  resetStepProgress: () => void;
}

export const useStepProgress = create(
  persist<useStepProgressState & useStepProgressAction>(
    (set, get) => ({
      ...initialState,
      actionStep: (isMore) => {
        const { slides } = get();
        const sum = Object.keys(slides).length === 16 ? 1 : 0;
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
              state:
                valor >= 3 ? (valor < 7 ? 'active' : 'completed') : 'inactive',
              img: '../icons/svgexport-8.svg',
            },
            {
              title: 'Enfermedades',
              state:
                valor >= 7
                  ? valor < 12 + sum
                    ? 'active'
                    : 'completed'
                  : 'inactive',
              img: '../icons/svgexport-2.svg',
            },
            {
              title: 'Familiares',
              state:
                valor >= 12 + sum
                  ? valor < 14 + sum
                    ? 'active'
                    : 'completed'
                  : 'inactive',
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
        const {
          step,
          setIndexSlide,
          actionStep,
          slides,
          removeSlide,
          indexSlide,
        } = get();
        if (step > 0) {
          Object.keys(slides).length === 16 &&
            indexSlide === 10 &&
            removeSlide();
          actionStep(false);
          setIndexSlide(step - 1);
        }
      },
      // nextSlide: () => {
      //   return get().slides[get().step] || null;
      // },
      addSlide: () => {
        const { slides } = get();
        const updatedSlides = { ...slides };

        for (let i = Object.keys(updatedSlides).length - 1; i >= 10; i--) {
          updatedSlides[i + 1] = updatedSlides[i];
        }
        updatedSlides[10] = 'SlideAdditional';
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
      resetStepProgress: () => {
        set(initialState);
        localStorage.removeItem('step-progress');
      },
    }),
    {
      name: 'step-progress',
    },
  ),
);
