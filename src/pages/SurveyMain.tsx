import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlideInformation03 } from '../components/organisms/SlideInformation03';
import {
  SlideInformation01,
  SlideTermsConditions,
  SlideInformation02,
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
  ButtonRimac,
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
      return <SlideInformation01 fnSubmit={nextQuestion}></SlideInformation01>;
    } else if (step === 2) {
      return <SlideInformation02 fnSubmit={nextQuestion}></SlideInformation02>;
    } else if (step === 3) {
      return <SlideSuccess01 fnSubmit={nextQuestion}></SlideSuccess01>;
    } else if (step === 4) {
      return <SlideInformation03 fnSubmit={nextQuestion}></SlideInformation03>;
    } else if (step === 5) {
      return <SlideInformation04 fnSubmit={nextQuestion}></SlideInformation04>;
    } else if (step === 6) {
      return <SlideInformation05 fnSubmit={nextQuestion}></SlideInformation05>;
    } else if (step === 7) {
      return <SlideSuccess02 fnSubmit={nextQuestion}></SlideSuccess02>;
    } else if (step === 8) {
      return <SlideInformation06 fnSubmit={nextQuestion}></SlideInformation06>;
    } else if (step === 9) {
      return <SlideInformation07 fnSubmit={nextQuestion}></SlideInformation07>;
    } else if (step === 10) {
      return <SlideInformation08 fnSubmit={nextQuestion}></SlideInformation08>;
    } else if (step === 11) {
      return <SlideInformation09 fnSubmit={nextQuestion}></SlideInformation09>;
    } else if (step === 12) {
      return <SlideSuccess03 fnSubmit={nextQuestion}></SlideSuccess03>;
    } else if (step === 13) {
      return <SlideInformation10 fnSubmit={nextQuestion}></SlideInformation10>;
    } else if (step === 14) {
      return <SlideFinish></SlideFinish>;
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
          className=' flex relative justify-center items-center w-full h-full  bg-rimac-white ps-10'
        >
          <img
            src='../rimac-signature.svg'
            alt='logo'
            className='absolute top-5 right-5 w-20'
          ></img>
          {step !== 0 && step !== 14 && (
            <div className='py-10 absolute top-0 left-20 w-auto'>
              <ButtonRimac isNav={true} fnClick={backQuestion}></ButtonRimac>
            </div>
          )}
          {nextSlide()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
