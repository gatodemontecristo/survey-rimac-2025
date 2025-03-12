import { ButtonRimac } from '../atoms';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';

import { optionCompany, optionInsurance, optionYN } from '../../constants';
import { QuestionRimac, RadioCollection, SelectRimac } from '../molecules';

interface SlideInformation01Props {
  fnSubmit: () => void;
}
const schema = yup.object().shape({
  haveInsurance: yup.string().required('Debes seleccionar una opción'),
  insurance: yup.string().required('Debes seleccionar un tipo de seguro'),
  company: yup
    .object()
    .typeError('Debes seleccionar una aseguradora')
    .required('Debes seleccionar una aseguradora'),
});

export const SlideInformation01 = ({ fnSubmit }: SlideInformation01Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      haveInsurance: '',
      insurance: '',
      company: undefined,
    },
  });

  return (
    <div className='flex flex-col items-start justify-center text-justify gap-4 w-3/4'>
      <QuestionRimac className='mb-4'>
        <QuestionRimac.Label
          size='text-2xl'
          text='¿Tienes o has tenido algún seguro médico?'
        ></QuestionRimac.Label>
        <QuestionRimac.Info
          text='Seguro médico que haya sido contratado por ti o tu empleador en los
        últimos 120 días, como una EPS, seguro colectivo o seguro particular con
        RIMAC u otra aseguradora'
        ></QuestionRimac.Info>
        <QuestionRimac.Url
          text=' Te explicamos por qué es importante tu respuesta'
          size='text-lg'
        ></QuestionRimac.Url>
        <RadioCollection
          {...{ control }}
          name='haveInsurance'
          itemOptions={optionYN}
          message={errors?.haveInsurance?.message}
        />
      </QuestionRimac>

      <QuestionRimac>
        <QuestionRimac.Label
          size='text-2xl'
          text='Selecciona el tipo de seguro y la aseguradora'
        ></QuestionRimac.Label>

        <RadioCollection
          {...{ control }}
          name='insurance'
          itemOptions={optionInsurance}
          message={errors?.insurance?.message}
        />
        <SelectRimac
          {...{ control }}
          name='company'
          itemOptions={optionCompany}
          message={errors?.company?.message}
          placeholder='Selecciona una aseguradora'
        ></SelectRimac>
      </QuestionRimac>

      <div className='flex flex-row justify-end w-full mt-10'>
        <ButtonRimac
          text='Siguiente'
          fnClick={handleSubmit(fnSubmit)}
        ></ButtonRimac>
      </div>
    </div>
  );
};
