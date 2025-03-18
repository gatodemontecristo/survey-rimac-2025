import {
  AreaForm,
  InputForm,
  QuestionRimac,
  RadioCollection,
} from '../molecules';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, useWatch } from 'react-hook-form';
import * as yup from 'yup';
import { ButtonRimac } from '../atoms';
import { optionLast12 } from '../../constants';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { fnCalculateIMC } from '../../utils';
import { useStepProgress } from '../../store';

export const SlideInformation02 = () => {
  const [enableExtra, setEnableExtra] = useState<boolean>(false);
  const schema = yup.object().shape({
    heigh: yup.string().required('Debes ingresar tu talla (CM)'),
    weigh: yup.string().required('Debes ingresar tu peso (KG)'),
    las12months: yup.string().when([], {
      is: () => enableExtra,
      then: (schema) =>
        schema
          .required('Debes seleccionar una opción')
          .typeError('Debes seleccionar una opción'),
      otherwise: (schema) => schema.notRequired(),
    }),
    weightgain: yup.string().when([], {
      is: () => enableExtra,
      then: (schema) =>
        schema
          .required('Debes ingresar peso subido/perdido (KG)')
          .typeError('Debes ingresar peso subido/perdido (KG)'),
      otherwise: (schema) => schema.notRequired(),
    }),
    comment: yup.string().when([], {
      is: () => enableExtra,
      then: (schema) =>
        schema
          .required('Debes ingresar un motivo')
          .typeError('Debes ingresar un motivo'),
      otherwise: (schema) => schema.notRequired(),
    }),
  });
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

  const heigh = useWatch({
    control,
    name: 'heigh',
  });
  const weigh = useWatch({
    control,
    name: 'weigh',
  });

  useEffect(() => {
    if (heigh.length > 0 && weigh.length > 0) {
      const imc = fnCalculateIMC(Number(heigh), Number(weigh));
      console.log('imc', imc);
      if (imc < 18.5 || imc > 24.9) {
        setEnableExtra(true);
      } else {
        setEnableExtra(false);
      }
    } else {
      setEnableExtra(false);
    }
  }, [weigh, heigh]);
  const { nextQuestion } = useStepProgress();
  return (
    <div
      className={clsx(
        'flex flex-row justify-center w-4/5 gap-4 py-20 h-screen overflow-y-scroll custom-scrollbar',
        enableExtra ? 'items-start' : 'items-center',
      )}
    >
      <div className='flex flex-col items-start justify-start text-justify   gap-4 w-full'>
        <QuestionRimac className='mb-4 w-3/4'>
          <QuestionRimac.Label
            size='text-2xl'
            text='¿Cuál es tu talla y peso?'
          ></QuestionRimac.Label>
          <div className='flex flex-row items-start flex-wrap gap-4'>
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
        {enableExtra && (
          <>
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
          </>
        )}

        <div className='flex flex-row justify-end w-full mt-10 pe-10'>
          <ButtonRimac
            text='Siguiente'
            fnClick={handleSubmit(nextQuestion)}
          ></ButtonRimac>
        </div>
      </div>
    </div>
  );
};
