import { ButtonRimac } from '../atoms';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm, useWatch } from 'react-hook-form';
import { MultiCheckboxForm, QuestionRimac, SelectRimac } from '../molecules';
import { anotherOptions, optionDiagnoses } from '../../constants';
import { useStepProgress } from '../../store';
import { useEffect } from 'react';

const schema = yup.object().shape({
  checkValues: yup
    .array()
    .of(yup.string())
    .min(1, 'Debes seleccionar al menos una opción'),
  additional: yup.object().when('checkValues', {
    is: (value: string[]) => value.find((e) => e === '6'),
    then: (schema) =>
      schema
        .required('Debes seleccionar una opción')
        .typeError('Debes seleccionar una opción'),
    otherwise: (schema) => schema.notRequired(),
  }),
});
export const SlideInformation07 = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      checkValues: [],
      additional: undefined,
    },
  });
  const { addSlide, nextQuestion } = useStepProgress();

  const checkValues = useWatch({
    control,
    name: 'checkValues',
  });
  const handleAddSlide = () => {
    checkValues && !checkValues.includes('7') && addSlide();
    nextQuestion();
  };
  useEffect(() => {
    if (checkValues && checkValues?.length > 1) {
      if (checkValues[checkValues.length - 1] === '7') {
        setValue('checkValues', ['7']);
        return;
      } else if (
        checkValues[checkValues.length - 1] !== '7' &&
        checkValues.includes('7')
      ) {
        setValue(
          'checkValues',
          checkValues.filter((item) => item !== '7'),
        );
        return;
      }
    }
  }, [checkValues]);

  return (
    <div className='flex flex-row items-center justify-center w-4/5 gap-4 py-10 pr-15 h-screen overflow-y-scroll custom-scrollbar'>
      <div className='flex flex-col items-start justify-start text-justify   gap-4 w-full'>
        <QuestionRimac className='mb-4 w-full'>
          <QuestionRimac.Label
            size='text-2xl'
            text='En los últimos 10 años, ¿para cuáles de estas afecciones le ha diagnosticado o tratado un profesional médico autorizado?'
          ></QuestionRimac.Label>
          <QuestionRimac.Info text='Por favor sellecione todas las respuestas válidas.'></QuestionRimac.Info>
          <MultiCheckboxForm
            {...{ control }}
            name='checkValues'
            options={optionDiagnoses}
            message={errors?.checkValues?.message}
          />
        </QuestionRimac>

        {checkValues && checkValues.includes('6') && (
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
            fnClick={handleSubmit(handleAddSlide)}
          ></ButtonRimac>
        </div>
      </div>
    </div>
  );
};
