import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlideInformation01, SlideTermsConditions } from '../components';

const questions = [
  '¿Cuál es tu comida favorita?',
  '¿Qué te motiva cada día?',
  '¿Prefieres gatos o perros?',
];

export const SurveyMain = () => {
  const [index, setIndex] = useState(0);

  const nextQuestion = () => {
    if (index < questions.length - 1) {
      setIndex(index + 1);
    }
  };

  const nextSlide = () => {
    if (index === 0) {
      return (
        <div className='text-center'>
          <h1 className='text-2xl font-bold mb-4'>{questions[index]}</h1>
          <button
            onClick={nextQuestion}
            className='px-6 py-3 bg-rimac-red text-white rounded-lg'
          >
            Siguiente
          </button>
        </div>
      );
    } else if (index === 1) {
      return (
        <SlideTermsConditions fnSubmit={nextQuestion}></SlideTermsConditions>
      );
    } else if (index === 2) {
      return (
        <SlideInformation01
          fnSubmit={nextQuestion}
          itemOptions={[
            { label: 'Seguro Particular', value: 'particular' },
            { label: 'Seguro Colectivo', value: 'colectivo' },
            { label: 'EPS', value: 'eps' },
          ]}
        ></SlideInformation01>
      );
    }
  };
  return (
    <div className='h-screen w-3/4 flex justify-center items-center overflow-hidden bg-green-500'>
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
