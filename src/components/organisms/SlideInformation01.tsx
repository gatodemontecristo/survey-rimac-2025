import { ButtonRimac } from '../atoms';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm, useWatch } from 'react-hook-form';

import { optionCompany, optionInsurance, optionYN } from '../../constants';
import { QuestionRimac, RadioCollection, SelectRimac } from '../molecules';
import { useFormData, useStepProgress } from '../../store';

const schema = yup.object().shape({
  haveInsurance: yup.string().required('Debes seleccionar una opción'),
  insurance: yup.string().when('haveInsurance', {
    is: (value: string) => value === 'Y',
    then: (schema) =>
      schema
        .required('Debes seleccionar un tipo de seguro')
        .typeError('Debes seleccionar un tipo de seguro'),
    otherwise: (schema) => schema.notRequired(),
  }),
  company: yup.object().when('haveInsurance', {
    is: (value: string) => value === 'Y',
    then: (schema) =>
      schema
        .required('Debes seleccionar una aseguradora')
        .typeError('Debes seleccionar una aseguradora'),
    otherwise: (schema) => schema.notRequired(),
  }),
});

export const SlideInformation01 = () => {
  const { saveFormData, formData } = useFormData();
  const {
    control,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      haveInsurance: formData.haveInsurance || '',
      insurance: formData.insurance || '',
      company: formData.company || undefined,
    },
  });

  const haveInsurance = useWatch({
    control,
    name: 'haveInsurance',
  });
  const { nextQuestion } = useStepProgress();
  const onSubmit = () => {
    saveFormData(getValues());
    nextQuestion();
  };
  return (
    <div className='flex flex-row items-center justify-start w-4/5 gap-4 py-10 h-screen overflow-y-scroll custom-scrollbar'>
      <div className='flex flex-col items-start justify-start text-justify   gap-4 w-full'>
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

        {haveInsurance === 'Y' && (
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
        )}
        <div className='flex flex-row justify-end w-full mt-10'>
          <ButtonRimac
            text='Siguiente'
            fnClick={handleSubmit(onSubmit)}
          ></ButtonRimac>
        </div>
      </div>
    </div>
  );
};
