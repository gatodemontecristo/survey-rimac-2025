import { ButtonRimac } from '../atoms';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm, useWatch } from 'react-hook-form';
import { MultiCheckboxForm, QuestionRimac, SelectRimac } from '../molecules';
import { anotherOptions, optionBackground } from '../../constants';
import { useStepProgress } from '../../store';

const schema = yup.object().shape({
  checkValues: yup
    .array()
    .of(yup.string())
    .min(1, 'Debes seleccionar al menos una opción'),
  additional: yup.object().when('checkValues', {
    is: (value: string[]) => value.find((e) => e === '8'),
    then: (schema) =>
      schema
        .required('Debes seleccionar una opción')
        .typeError('Debes seleccionar una opción'),
    otherwise: (schema) => schema.notRequired(),
  }),
});
export const SlideInformation10 = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      checkValues: [],
    },
  });
  const { nextQuestion } = useStepProgress();
  const checkValues = useWatch({
    control,
    name: 'checkValues',
  });

  return (
    <div className='flex flex-row items-center justify-center w-4/5 gap-4 py-10 pr-15 h-screen overflow-y-scroll custom-scrollbar'>
      <div className='flex flex-col items-start justify-start text-justify   gap-4 w-full'>
        <QuestionRimac className='w-full'>
          <QuestionRimac.Label
            size='text-2xl'
            text='¿Tienes antecedentes familiares directos, como madre, padre, hermanos o hijos, con alguna de las siguientes afecciones?'
          ></QuestionRimac.Label>
          <QuestionRimac.Info text='Por favor seleccione todas las respuestas validas'></QuestionRimac.Info>

          <MultiCheckboxForm
            {...{ control }}
            name='checkValues'
            options={optionBackground}
            message={errors?.checkValues?.message}
          />
        </QuestionRimac>
        {checkValues && checkValues.includes('8') && (
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
