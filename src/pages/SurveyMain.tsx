import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

  return (
    <div className='h-screen w-full flex justify-center items-center overflow-hidden bg-rimac-red'>
      <AnimatePresence mode='wait'>
        <motion.div
          key={index}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className='absolute flex justify-center items-center w-full h-full bg-white'
        >
          <div className='text-center'>
            <h1 className='text-2xl font-bold mb-4'>{questions[index]}</h1>
            <button
              onClick={nextQuestion}
              className='px-6 py-3 bg-rimac-red text-white rounded-lg'
            >
              Siguiente
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
