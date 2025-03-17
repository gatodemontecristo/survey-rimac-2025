import { ButtonRimac } from '../atoms';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { InputForm, QuestionRimac, RadioCollection } from '../molecules';
import { optionCigars, optionTobacco } from '../../constants';
import { SlideProps } from '../../types';

const schema = yup.object().shape({
  tobacco: yup.string().required('Debes seleccionar una opción'),
  cigars: yup.string().required('Debes seleccionar una opción'),
  fullYear: yup.string().required('Este es un campo requerido'),
});
export const SlideInformation04 = ({ fnSubmit }: SlideProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      tobacco: '',
      cigars: '',
      fullYear: '',
    },
  });
  return (
    <div className='flex flex-row items-center justify-center w-4/5 gap-4 py-10 pr-15 h-screen overflow-y-scroll custom-scrollbar'>
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
        <QuestionRimac className='mb-4 w-full'>
          <QuestionRimac.Label
            size='text-2xl'
            text='¿En que año dejaste de consumir productos de tabaco'
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
        <div className='flex flex-row justify-end w-full mt-10 pe-10'>
          <ButtonRimac
            text='Siguiente'
            fnClick={handleSubmit(fnSubmit)}
          ></ButtonRimac>
        </div>
      </div>
    </div>
  );
};
