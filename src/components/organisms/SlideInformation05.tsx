import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { ButtomMobile, ButtonRimac } from '../atoms';
import { QuestionRimac, RadioCollection } from '../molecules';
import { optionAlcohol } from '../../constants';
import { useFormData, useStepProgress } from '../../store';
import { useMediaQuery } from 'react-responsive';

const schema = yup.object().shape({
  alcohol: yup.string().required('Debes seleccionar una opción'),
});
export const SlideInformation05 = () => {
  const { saveFormData, formData } = useFormData();
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      alcohol: formData.alcohol || '',
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
    <div className='flex flex-row items-center justify-center w-4/5 gap-4 md:py-10 py-15 pr-15 h-screen overflow-y-scroll custom-scrollbar'>
      <div className='flex flex-col items-start justify-start md:text-justify text-start   gap-4 w-full'>
        <QuestionRimac className='mb-4 w-full'>
          <QuestionRimac.Label
            size={textLabel}
            text='¿Con qué frecuencia bebes alcohol?'
          ></QuestionRimac.Label>
          <RadioCollection
            {...{ control }}
            name='alcohol'
            itemOptions={optionAlcohol}
            message={
              typeof errors?.alcohol?.message === 'string'
                ? errors.alcohol.message
                : undefined
            }
            justifyOption='justify-start'
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
