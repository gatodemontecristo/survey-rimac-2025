import { ButtonRimac } from '../atoms';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { MultiCheckboxForm, QuestionRimac } from '../molecules';
import { optionBackground } from '../../constants';
import { SlideProps } from '../../types';

const schema = yup.object().shape({
  checkValues: yup
    .array()
    .of(yup.string())
    .min(1, 'Debes seleccionar al menos una opción'),
});
export const SlideInformation10 = ({ fnSubmit }: SlideProps) => {
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
  return (
    <div className='flex flex-row items-center justify-center w-4/5 gap-4 py-10 pr-15 h-screen overflow-y-scroll custom-scrollbar'>
      <div className='flex flex-col items-start justify-start text-justify   gap-4 w-full'>
        <QuestionRimac className='mb-4 w-full'>
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
