import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlideInformation03 } from '../components/organisms/SlideInformation03';
import {
  SlideInformation01,
  SlideTermsConditions,
  SlideInformation02,
} from '../components';

const questions = [
  '¿Cuál es tu comida favorita?',
  '¿Qué te motiva cada día?',
  '¿Prefieres gatos o perros?',
  '¿Prefieres gatos o perros?',
];

export const SurveyMain = () => {
  const [index, setIndex] = useState(0);

  const nextQuestion = () => {
    if (index < questions.length - 1) {
      setIndex(index + 1);
    }
  };

  const backQuestion = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const nextSlide = () => {
    if (index === 0) {
      // return (
      //   <div className='text-center'>
      //     <h1 className='text-2xl font-bold mb-4'>{questions[index]}</h1>
      //     <button
      //       onClick={nextQuestion}
      //       className='px-6 py-3 bg-rimac-red text-white rounded-lg'
      //     >
      //       Siguiente
      //     </button>
      //   </div>
      // );
      return (
        <SlideTermsConditions fnSubmit={nextQuestion}></SlideTermsConditions>
      );
    } else if (index === 1) {
      return (
        <SlideInformation01
          fnSubmit={nextQuestion}
          fnBack={backQuestion}
        ></SlideInformation01>
      );
    } else if (index === 2) {
      return (
        <SlideInformation02
          fnSubmit={nextQuestion}
          fnBack={backQuestion}
        ></SlideInformation02>
      );
    } else if (index === 3) {
      return (
        <SlideInformation03
          fnSubmit={nextQuestion}
          fnBack={backQuestion}
        ></SlideInformation03>
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
          className=' flex justify-center items-center w-full h-full bg-white'
        >
          {nextSlide()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
