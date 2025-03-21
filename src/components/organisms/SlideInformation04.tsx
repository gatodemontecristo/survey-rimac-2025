import { ButtonRimac } from '../atoms';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm, useWatch } from 'react-hook-form';
import { InputForm, QuestionRimac, RadioCollection } from '../molecules';
import { optionCigars, optionTobacco } from '../../constants';
import clsx from 'clsx';
import { useFormData, useStepProgress } from '../../store';

const schema = yup.object().shape({
  tobacco: yup.string().required('Debes seleccionar una opción'),
  cigars: yup.string().when('tobacco', {
    is: (value: string) => value !== '5',
    then: (schema) =>
      schema
        .required('Debes seleccionar una opción')
        .typeError('Debes seleccionar una opción'),
    otherwise: (schema) => schema.notRequired(),
  }),
  fullYear: yup.string().when('tobacco', {
    is: (value: string) => value === '4',
    then: (schema) =>
      schema
        .required('Este es un campo requerido')
        .typeError('Este es un campo requerido')
        .matches(/^\d{4}$/, 'Debe ser un año válido'),
    otherwise: (schema) => schema.notRequired(),
  }),
});
export const SlideInformation04 = () => {
  const { saveFormData, formData } = useFormData();
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      tobacco: formData.tobacco || '',
      cigars: formData.cigars || '',
      fullYear: formData.fullYear || '',
    },
  });

  const tobacco = useWatch({
    control,
    name: 'tobacco',
  });
  const { nextQuestion } = useStepProgress();
  const onSubmit = () => {
    saveFormData(getValues());
    nextQuestion();
  };
  return (
    <div
      className={clsx(
        'flex flex-row  justify-center w-4/5 gap-4 py-15 pr-15 h-screen overflow-y-scroll custom-scrollbar',
        tobacco === '4' ? 'items-start' : 'items-center',
      )}
    >
      <div className='flex flex-col items-start justify-start text-justify   gap-4 w-full'>
        <QuestionRimac className='mb-4 w-full'>
          <QuestionRimac.Label
            size='text-2xl'
            text='¿Con qué frecuencia consumes productos de tabaco?'
          ></QuestionRimac.Label>
          <QuestionRimac.Info text='Elige la frase que mejor describa tu situación'></QuestionRimac.Info>
          <RadioCollection
            {...{ control }}
            name='tobacco'
            itemOptions={optionTobacco}
            message={errors?.tobacco?.message}
            justifyOption='justify-start'
          />
        </QuestionRimac>
        {tobacco === '4' && (
          <QuestionRimac className='mb-4 w-full'>
            <QuestionRimac.Label
              size='text-2xl'
              text='¿En que año dejaste de consumir productos de tabaco?'
            ></QuestionRimac.Label>

            <InputForm
              {...{ control }}
              name='fullYear'
              message={errors?.fullYear?.message}
              placeholder='Año'
              className='w-1/2'
              type='number'
            />
          </QuestionRimac>
        )}
        {tobacco !== '5' && tobacco !== '' && (
          <QuestionRimac className='mb-4 w-full'>
            <QuestionRimac.Label
              size='text-2xl'
              text='Aproximadamente, ¿cuántos cigarros consumes/consumías por ocasión?'
            ></QuestionRimac.Label>
            <RadioCollection
              {...{ control }}
              name='cigars'
              itemOptions={optionCigars}
              message={errors?.cigars?.message}
              justifyOption='justify-start'
            />
          </QuestionRimac>
        )}
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
