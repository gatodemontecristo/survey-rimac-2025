import { ButtomMobile, ButtonRimac } from '../atoms';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm, useWatch } from 'react-hook-form';
import { InputForm, QuestionRimac, RadioCollection } from '../molecules';
import { optionCigars, optionTobacco } from '../../constants';
import clsx from 'clsx';
import { useFormData, useStepProgress } from '../../store';
import { useMediaQuery } from 'react-responsive';

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

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const textLabel = isMobile ? 'text-xl' : 'text-2xl';
  return (
    <div
      className={clsx(
        'flex flex-row  justify-center w-4/5 gap-4 md:py-15 py-20 md:pr-15 pr-0 h-screen overflow-y-scroll custom-scrollbar',
        tobacco === '4' ? 'items-start' : 'items-center',
      )}
    >
      <div className='flex flex-col items-start justify-start md:text-justify text-start    gap-4 w-full'>
        <QuestionRimac className='mb-4 w-full'>
          <QuestionRimac.Label
            size={textLabel}
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
              size={textLabel}
              text='¿En que año dejaste de consumir productos de tabaco?'
            ></QuestionRimac.Label>

            <InputForm
              {...{ control }}
              name='fullYear'
              message={errors?.fullYear?.message}
              placeholder='Año'
              className='w-3/4'
              type='number'
            />
          </QuestionRimac>
        )}
        {tobacco !== '5' && tobacco !== '' && (
          <QuestionRimac className='mb-4 w-full'>
            <QuestionRimac.Label
              size={textLabel}
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
