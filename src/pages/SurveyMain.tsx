import { motion, AnimatePresence } from 'framer-motion';

import { useStepProgress } from '../store';
import { ButtonRimac } from '../components';

export const SurveyMain = () => {
  const { step, backQuestion, nextSlide, indexSlide } = useStepProgress();

  return (
    <div className='h-screen w-3/4 flex justify-center items-center  bg-rimac-red'>
      <AnimatePresence mode='wait'>
        <motion.div
          key={indexSlide}
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
