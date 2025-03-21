import { ButtomMobile, ButtonRimac } from '../atoms';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { QuestionRimac, RadioCollection } from '../molecules';
import { optionYN } from '../../constants';
import { useFormData, useStepProgress } from '../../store';
import { useMediaQuery } from 'react-responsive';

const schema = yup.object().shape({
  pregnancy: yup.string().required('Debes seleccionar una opción'),
  complications: yup.string().required('Debes seleccionar una opción'),
});
export const SlideInformation09 = () => {
  const { saveFormData, formData } = useFormData();
  const {
    control,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      pregnancy: formData.pregnancy || '',
      complications: formData.complications || '',
    },
  });
  const { nextQuestion } = useStepProgress();
  const onSubmit = () => {
    saveFormData(getValues());
    nextQuestion();
  };
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const textLabel = isMobile ? 'text-xl' : 'text-2xl';
  return (
    <div className='flex flex-row items-center justify-center w-4/5 gap-4 md:py-10 py-20 md:pr-15 pr-0 h-screen overflow-y-scroll custom-scrollbar'>
      <div className='flex flex-col items-start justify-start md:text-justify text-start   gap-4 w-full'>
        <QuestionRimac className='mb-4 w-full'>
          <QuestionRimac.Label
            size={textLabel}
            text='¿Estás embarazada en este momento?'
          ></QuestionRimac.Label>
          <RadioCollection
            {...{ control }}
            name='pregnancy'
            itemOptions={optionYN}
            message={
              typeof errors?.pregnancy?.message === 'string'
                ? errors.pregnancy.message
                : undefined
            }
          />
        </QuestionRimac>
        <QuestionRimac className='mb-4 w-full'>
          <QuestionRimac.Label
            size={textLabel}
            text='¿Se presentaron complicaciones en el parto o padece de alguna condiciòn congénita?'
          ></QuestionRimac.Label>
          <RadioCollection
            {...{ control }}
            name='complications'
            itemOptions={optionYN}
            message={
              typeof errors?.complications?.message === 'string'
                ? errors.complications.message
                : undefined
            }
          />
        </QuestionRimac>

        <div className='md:flex hidden flex-row justify-end w-full md:mt-10 mt-5'>
          <ButtonRimac
            text='Siguiente'
            fnClick={handleSubmit(onSubmit)}
          ></ButtonRimac>
        </div>
        <div className='bottom-0 left-0 fixed flex md:hidden flex-row justify-center w-full'>
          <ButtomMobile
            text='Siguiente'
            fnClick={handleSubmit(onSubmit)}
          ></ButtomMobile>
        </div>
      </div>
    </div>
  );
};
