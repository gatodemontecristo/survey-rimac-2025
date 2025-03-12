import {
  AreaForm,
  InputForm,
  QuestionRimac,
  RadioCollection,
} from '../molecules';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { ButtonRimac } from '../atoms';
import { optionLast12 } from '../../constants';
interface SlideInformation02Props {
  fnSubmit: () => void;
}
const schema = yup.object().shape({
  heigh: yup.string().required('Debes ingresar tu talla (CM)'),
  weigh: yup.string().required('Debes ingresar tu peso (KG)'),
  las12months: yup.string().required('Debes seleccionar una opción'),
  weightgain: yup.string().required('Debes ingresar peso subido (KG)'),
  comment: yup.string().required('Debes ingresar un motivo'),
});
export const SlideInformation02 = ({ fnSubmit }: SlideInformation02Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      heigh: '',
      weigh: '',
      las12months: '',
      weightgain: '',
      comment: '',
    },
  });
  return (
    <div className='flex flex-col items-start justify-start text-justify h-screen py-10 gap-4 w-3/4  overflow-y-scroll custom-scrollbar '>
      <QuestionRimac className='mb-4 w-3/4'>
        <QuestionRimac.Label
          size='text-2xl'
          text='¿Cuál es tu talla y peso?'
        ></QuestionRimac.Label>
        <div className='flex flex-row flex-wrap gap-4'>
          <InputForm
            {...{ control }}
            name='heigh'
            message={errors?.heigh?.message}
            placeholder='Estatura (CM)'
            className='w-[40%]'
          />
          <InputForm
            {...{ control }}
            name='weigh'
            message={errors?.weigh?.message}
            placeholder='Peso (KG)'
            className='w-[40%]'
          />
        </div>
      </QuestionRimac>
      <QuestionRimac className='mb-4'>
        <QuestionRimac.Label
          size='text-2xl'
          text='¿Cómo ha cambiado su peso en los últimos 12 meses?'
        ></QuestionRimac.Label>

        <RadioCollection
          {...{ control }}
          name='las12months'
          itemOptions={optionLast12}
          message={errors?.las12months?.message}
        />
      </QuestionRimac>
      <QuestionRimac className='mb-4'>
        <QuestionRimac.Label
          size='text-2xl'
          text='Aproximadamente, ¿cuánto kilogramos subiste/perdiste?'
        ></QuestionRimac.Label>

        <InputForm
          {...{ control }}
          name='weightgain'
          message={errors?.weightgain?.message}
          placeholder='Peso subido (KG)'
          className='w-2/3'
        />
      </QuestionRimac>

      <QuestionRimac className='mb-4 w-3/4'>
        <QuestionRimac.Label
          size='text-2xl'
          text='Motivo del cambio de peso:'
        ></QuestionRimac.Label>

        <AreaForm
          {...{ control }}
          name='comment'
          maxLength={200}
          message={errors?.comment?.message}
          placeholder='Escribe tu comentario...'
          className='w-full'
        />
      </QuestionRimac>

      <div className='flex flex-row justify-end w-full mt-10 pe-10'>
        <ButtonRimac
          text='Siguiente'
          fnClick={handleSubmit(fnSubmit)}
        ></ButtonRimac>
      </div>
    </div>
  );
};
