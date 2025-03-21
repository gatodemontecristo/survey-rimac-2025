import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { ButtonRimac } from '../atoms';
import { QuestionRimac, RadioCollection } from '../molecules';
import { optionAlcohol } from '../../constants';
import { useFormData, useStepProgress } from '../../store';

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
  return (
    <div className='flex flex-row items-center justify-center w-4/5 gap-4 py-10 pr-15 h-screen overflow-y-scroll custom-scrollbar'>
      <div className='flex flex-col items-start justify-start text-justify   gap-4 w-full'>
        <QuestionRimac className='mb-4 w-full'>
          <QuestionRimac.Label
            size='text-2xl'
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

        <div className='flex flex-row justify-end w-full mt-10 pe-10'>
          <ButtonRimac
            text='Siguiente'
            fnClick={handleSubmit(onSubmit)}
          ></ButtonRimac>
        </div>
      </div>
    </div>
  );
};
