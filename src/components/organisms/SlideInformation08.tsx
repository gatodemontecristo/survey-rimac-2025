import { ButtonRimac } from '../atoms';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import {
  MultiCheckboxForm,
  QuestionRimac,
  RadioCollection,
} from '../molecules';
import { optionDisability, optionYN } from '../../constants';
import { useStepProgress } from '../../store';

const schema = yup.object().shape({
  checkValues: yup
    .array()
    .of(yup.string())
    .min(1, 'Debes seleccionar al menos una opción'),
  disability: yup.string().required('Debes seleccionar una opción'),
});
export const SlideInformation08 = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      checkValues: [],
      disability: '',
    },
  });
  const { nextQuestion } = useStepProgress();
  return (
    <div className='flex flex-row items-center justify-center w-4/5 gap-4 py-10 pr-15 h-screen overflow-y-scroll custom-scrollbar'>
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
        <QuestionRimac className='mb-4 w-full'>
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
