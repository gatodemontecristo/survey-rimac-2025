import { ButtonRimac } from '../atoms';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { QuestionRimac, RadioCollection } from '../molecules';
import { optionYN } from '../../constants';
import { useFormData, useStepProgress } from '../../store';

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
  return (
    <div className='flex flex-row items-center justify-center w-4/5 gap-4 py-10 pr-15 h-screen overflow-y-scroll custom-scrollbar'>
      <div className='flex flex-col items-start justify-start text-justify   gap-4 w-full'>
        <QuestionRimac className='mb-4 w-full'>
          <QuestionRimac.Label
            size='text-2xl'
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
            size='text-2xl'
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
