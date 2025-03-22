import { ButtomMobile, ButtonRimac } from '../atoms';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm, useWatch } from 'react-hook-form';

import { optionCompany, optionInsurance, optionYN } from '../../constants';
import { QuestionRimac, RadioCollection, SelectRimac } from '../molecules';
import { useFormData, useStepProgress } from '../../store';
import { useMediaQuery } from 'react-responsive';

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
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const textURL = isMobile ? 'text-base' : 'text-lg';
  const textLabel = isMobile ? 'text-xl' : 'text-2xl';
  return (
    <div className='flex flex-row items-center justify-start w-4/5 gap-4 py-20 md:py-10  md:h-screen min-h-screen max-h-fit md:overflow-y-scroll custom-scrollbar'>
      <div className='flex flex-col items-start justify-start md:text-justify text-start   gap-4 w-full'>
        <QuestionRimac className='mb-4'>
          <QuestionRimac.Label
            size={textLabel}
            text='¿Tienes o has tenido algún seguro médico?'
          ></QuestionRimac.Label>
          <QuestionRimac.Info
            text='Seguro médico que haya sido contratado por ti o tu empleador en los
        últimos 120 días, como una EPS, seguro colectivo o seguro particular con
        RIMAC u otra aseguradora'
          ></QuestionRimac.Info>
          <QuestionRimac.Url
            text=' Te explicamos por qué es importante tu respuesta'
            size={textURL}
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
              size={textLabel}
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
        <div className='md:flex hidden flex-row justify-end w-full md:mt-10 mt-5'>
          <ButtonRimac
            text='Siguiente'
            fnClick={handleSubmit(onSubmit)}
          ></ButtonRimac>
        </div>
        <div className='bottom-0 left-0 fixed flex md:hidden flex-row justify-center w-full'>
          <ButtomMobile
            text='Siguiente'
            fnClick={handleSubmit(onSubmit)}
          ></ButtomMobile>
        </div>
      </div>
    </div>
  );
};
