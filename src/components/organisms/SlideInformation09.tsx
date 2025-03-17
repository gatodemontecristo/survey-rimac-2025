import { ButtonRimac } from '../atoms';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { QuestionRimac, RadioCollection } from '../molecules';
import { optionYN } from '../../constants';
import { SlideProps } from '../../types';

const schema = yup.object().shape({
  pregnancy: yup.string().required('Debes seleccionar una opción'),
  complications: yup.string().required('Debes seleccionar una opción'),
});
export const SlideInformation09 = ({ fnSubmit }: SlideProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      pregnancy: '',
      complications: '',
    },
  });
  return (
    <div className='flex flex-row items-center justify-center w-4/5 gap-4 py-10 pr-15 h-screen overflow-y-scroll custom-scrollbar'>
      <div className='flex flex-col items-start justify-start text-justify   gap-4 w-full'>
        <QuestionRimac className='mb-4 w-full'>
          <QuestionRimac.Label
            size='text-2xl'
            text='¿Estás embarazada en este momento?'
          ></QuestionRimac.Label>
          <RadioCollection
            {...{ control }}
            name='pregnancy'
            itemOptions={optionYN}
            message={errors?.pregnancy?.message}
          />
        </QuestionRimac>
        <QuestionRimac className='mb-4 w-full'>
          <QuestionRimac.Label
            size='text-2xl'
            text='¿Se presentaron complicaciones en el parto o padece de alguna condiciòn congénita?'
          ></QuestionRimac.Label>
          <RadioCollection
            {...{ control }}
            name='complications'
            itemOptions={optionYN}
            message={errors?.complications?.message}
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
