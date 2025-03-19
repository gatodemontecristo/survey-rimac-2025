import { ButtonRimac } from '../atoms';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm, useWatch } from 'react-hook-form';
import {
  MultiCheckboxForm,
  QuestionRimac,
  RadioCollection,
  SelectRimac,
} from '../molecules';
import { anotherOptions, optionDisability, optionYN } from '../../constants';
import { useStepProgress } from '../../store';
import { useEffect } from 'react';

const schema = yup.object().shape({
  checkValues: yup
    .array()
    .of(yup.string())
    .min(1, 'Debes seleccionar al menos una opción'),
  disability: yup.string().required('Debes seleccionar una opción'),
  additional: yup.object().when('checkValues', {
    is: (value: string[]) => value.find((e) => e === '5'),
    then: (schema) =>
      schema
        .required('Debes seleccionar una opción')
        .typeError('Debes seleccionar una opción'),
    otherwise: (schema) => schema.notRequired(),
  }),
});
export const SlideInformation08 = () => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      checkValues: [],
      disability: '',
      additional: '',
    },
  });
  const { nextQuestion } = useStepProgress();
  const checkValues = useWatch({
    control,
    name: 'checkValues',
  });
  useEffect(() => {
    if (checkValues && checkValues?.length > 1) {
      if (checkValues[checkValues.length - 1] === '6') {
        setValue('checkValues', ['6']);
        return;
      } else if (
        checkValues[checkValues.length - 1] !== '6' &&
        checkValues.includes('6')
      ) {
        setValue(
          'checkValues',
          checkValues.filter((item) => item !== '6'),
        );
        return;
      }
    }
  }, [checkValues]);
  return (
    <div className='flex flex-row items-start justify-center w-4/5 gap-4 py-10 pr-15 h-screen overflow-y-scroll custom-scrollbar'>
      <div className='flex flex-col items-start justify-start text-justify   gap-4 w-full'>
        <QuestionRimac className='mb-4 w-full'>
          <QuestionRimac.Label
            size='text-2xl'
            text='¿Tienes alguna discapacidad física o mental que podría afectar tu facultad para realizar actividades diarias?'
          ></QuestionRimac.Label>
          <QuestionRimac.Info text='Entendemos que el tema puede ser delicado, queremos asegurarle que solo buscamos comprenderlo mejor. Calquier informaciòn que nos proporcione será estrictamente confidencial.'></QuestionRimac.Info>
          <RadioCollection
            {...{ control }}
            name='disability'
            itemOptions={optionYN}
            message={errors?.disability?.message}
          />
        </QuestionRimac>
        <QuestionRimac className=' w-full'>
          <QuestionRimac.Label
            size='text-2xl'
            text='En los últimos 10 años, ¿para cuáles de estas afecciones le ha diagnosticado, tratado o asesorado un profesional médico autorizado?'
          ></QuestionRimac.Label>
          <MultiCheckboxForm
            {...{ control }}
            name='checkValues'
            options={optionDisability}
            message={errors?.checkValues?.message}
          />
        </QuestionRimac>
        {checkValues && checkValues.includes('5') && (
          <SelectRimac
            {...{ control }}
            name='additional'
            itemOptions={anotherOptions}
            message={errors?.additional?.message}
            placeholder='Selecciona un diagnóstico'
          ></SelectRimac>
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
