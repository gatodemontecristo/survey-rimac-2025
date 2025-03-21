import { ButtomMobile, ButtonRimac } from '../atoms';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { QuestionRimac, RadioCollection } from '../molecules';
import { optionYN } from '../../constants';
import { useFormData, useStepProgress } from '../../store';
import { useMediaQuery } from 'react-responsive';

const schema = yup.object().shape({
  surgeon: yup.string().required('Debes seleccionar una opción'),
  device: yup.string().required('Debes seleccionar una opción'),
  condition: yup.string().required('Debes seleccionar una opción'),
});
export const SlideAdditional = () => {
  const { saveFormData, formData } = useFormData();
  const {
    control,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      surgeon: formData.surgeon || '',
      device: formData.device || '',
      condition: formData.condition || '',
    },
  });
  const { nextQuestion } = useStepProgress();
  const onSubmit = () => {
    saveFormData(getValues());
    nextQuestion();
  };
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const textLabel = isMobile ? 'text-xl' : 'text-2xl';
  return (
    <div className='flex flex-row items-start justify-center w-4/5 gap-4 md:py-15 py-20 md:pr-15 pr-0 h-screen overflow-y-scroll custom-scrollbar'>
      <div className='flex flex-col items-start justify-start md:text-justify text-start  gap-4 w-full'>
        <QuestionRimac className='mb-4 w-full'>
          <QuestionRimac.Label
            size={textLabel}
            text='¿Se ha sometido a una cirugía a raíz de esta condición/codiciones?'
          ></QuestionRimac.Label>
          <RadioCollection
            {...{ control }}
            name='surgeon'
            itemOptions={optionYN}
            message={
              typeof errors?.surgeon?.message === 'string'
                ? errors.surgeon.message
                : undefined
            }
          />
        </QuestionRimac>
        <QuestionRimac className='mb-4 w-full'>
          <QuestionRimac.Label
            size={textLabel}
            text='¿Cuenta con algún dispositivo médico o prótesis a raíz de esta operación?'
          ></QuestionRimac.Label>
          <QuestionRimac.Info text='Puede ser a nivel articular como hombro, rodilla o cadera, a nivel cardíaco como un marcapasos o stent coronario, o a nivel columna como una caja intersomática, clavos o tornillos.'></QuestionRimac.Info>
          <RadioCollection
            {...{ control }}
            name='device'
            itemOptions={optionYN}
            message={
              typeof errors?.device?.message === 'string'
                ? errors.device.message
                : undefined
            }
          />
        </QuestionRimac>

        <QuestionRimac className='mb-4 w-full'>
          <QuestionRimac.Label
            size={textLabel}
            text='¿Ha sido hospitalizado a raíz de esta condición/condiciones?'
          ></QuestionRimac.Label>
          <RadioCollection
            {...{ control }}
            name='condition'
            itemOptions={optionYN}
            message={
              typeof errors?.condition?.message === 'string'
                ? errors.condition.message
                : undefined
            }
          />
        </QuestionRimac>

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
