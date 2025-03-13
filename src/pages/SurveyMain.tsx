import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlideInformation03 } from '../components/organisms/SlideInformation03';
import {
  SlideInformation01,
  SlideTermsConditions,
  SlideInformation02,
  SlideInformation04,
  SlideInformation05,
} from '../components';
import { useStepProgress } from '../store';

export const SurveyMain = () => {
  const [index, setIndex] = useState(0);
  const { step, actionStep } = useStepProgress();

  const nextQuestion = () => {
    actionStep(true);
    setIndex(index + 1);
  };

  const backQuestion = () => {
    if (index > 0) {
      actionStep(false);
      setIndex(index - 1);
    }
  };

  const nextSlide = () => {
    if (step === 0) {
      return (
        <SlideTermsConditions fnSubmit={nextQuestion}></SlideTermsConditions>
      );
    } else if (step === 1) {
      return (
        <SlideInformation01
          fnSubmit={nextQuestion}
          fnBack={backQuestion}
        ></SlideInformation01>
      );
    } else if (step === 2) {
      return (
        <SlideInformation02
          fnSubmit={nextQuestion}
          fnBack={backQuestion}
        ></SlideInformation02>
      );
    } else if (step === 3) {
      return (
        <SlideInformation03
          fnSubmit={nextQuestion}
          fnBack={backQuestion}
        ></SlideInformation03>
      );
    } else if (step === 4) {
      return (
        <SlideInformation04
          fnSubmit={nextQuestion}
          fnBack={backQuestion}
        ></SlideInformation04>
      );
    } else if (step === 5) {
      return (
        <SlideInformation05
          fnSubmit={nextQuestion}
          fnBack={backQuestion}
        ></SlideInformation05>
      );
    }
  };
  return (
    <div className='h-screen w-3/4 flex justify-center items-center  bg-rimac-red'>
      <AnimatePresence mode='wait'>
        <motion.div
          key={index}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className=' flex relative justify-center items-center w-full h-full  bg-rimac-white'
        >
          <img
            src='../rimac-signature.svg'
            alt='logo'
            className='absolute top-5 right-5 w-20'
          ></img>
          {nextSlide()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
