import { ButtomMobile, ButtonRimac } from '../atoms';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm, useWatch } from 'react-hook-form';
import { MultiCheckboxForm, QuestionRimac, SelectRimac } from '../molecules';
import { anotherOptions, optionBackground } from '../../constants';
import { useFormData, useStepProgress } from '../../store';
import { useMediaQuery } from 'react-responsive';

const schema = yup.object().shape({
  checkFamily: yup
    .array()
    .of(yup.string())
    .min(1, 'Debes seleccionar al menos una opción'),
  additionalFamily: yup.object().when('checkFamily', {
    is: (value: string[]) => value.find((e) => e === '8'),
    then: (schema) =>
      schema
        .required('Debes seleccionar una opción')
        .typeError('Debes seleccionar una opción'),
    otherwise: (schema) => schema.notRequired(),
  }),
});
export const SlideInformation10 = () => {
  const { saveFormData, formData } = useFormData();
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      checkFamily: formData.checkFamily || [],
      additionalFamily: formData.additionalFamily || undefined,
    },
  });
  const { nextQuestion } = useStepProgress();
  const checkValues = useWatch({
    control,
    name: 'checkFamily',
  });
  const onSubmit = () => {
    saveFormData(getValues());
    nextQuestion();
  };
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const textLabel = isMobile ? 'text-xl' : 'text-2xl';
  return (
    <div className='flex flex-row items-center justify-center w-4/5 gap-4 md:py-10 py-20 md:pr-15 pr-0 md:h-screen min-h-screen max-h-fit md:overflow-y-scroll custom-scrollbar'>
      <div className='flex flex-col items-start justify-start md:text-justify text-start    gap-4 w-full'>
        <QuestionRimac className='w-full'>
          <QuestionRimac.Label
            size={textLabel}
            text='¿Tienes antecedentes familiares directos, como madre, padre, hermanos o hijos, con alguna de las siguientes afecciones?'
          ></QuestionRimac.Label>
          <QuestionRimac.Info text='Por favor seleccione todas las respuestas validas'></QuestionRimac.Info>

          <MultiCheckboxForm
            {...{ control }}
            name='checkFamily'
            options={optionBackground}
            message={errors?.checkFamily?.message}
          />
        </QuestionRimac>
        {checkValues && checkValues.includes('8') && (
          <SelectRimac
            {...{ control }}
            name='additionalFamily'
            itemOptions={anotherOptions}
            message={errors?.additionalFamily?.message}
            placeholder='Selecciona un diagnóstico'
          ></SelectRimac>
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
