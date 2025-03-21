import { ButtomMobile, ButtonRimac } from '../atoms';
import * as yup from 'yup';
import { QuestionRimac, SliderForm } from '../molecules';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useFormData, useStepProgress } from '../../store';
import { useMediaQuery } from 'react-responsive';

const schema = yup.object().shape({
  activity: yup.number().min(0).max(100).required('Este campo es requerido'),
  sleep: yup.number().min(0).max(100).required('Este campo es requerido'),
});
export const SlideInformation03 = () => {
  const { saveFormData, formData } = useFormData();
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      activity: Number(formData.activity) || 3,
      sleep: Number(formData.sleep) || 7,
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
    <div className='flex flex-row items-start justify-center w-4/5 gap-4 py-20 md:pr-15 pr-0 h-screen overflow-y-scroll custom-scrollbar'>
      <div className='flex flex-col items-start justify-start text-justify   gap-4 w-full'>
        <QuestionRimac className='mb-4 w-full'>
          <QuestionRimac.Label
            size={textLabel}
            text='¿Con qué frecuencia realizas actividad física?'
          ></QuestionRimac.Label>
          <QuestionRimac.Info text='Actividad física incluye caminar rápido, andar en bicicleta por al menos 60 minutos al día, o actividades intensas como correr, saltar la cuerda o jugar deportes.'></QuestionRimac.Info>
          <SliderForm
            control={control}
            name='activity'
            min={0}
            max={7}
            step={1}
            message={errors?.activity?.message}
            mainTitle='Cantidad de días que realiza actividad física'
            className='md:w-2/3 w-full'
          ></SliderForm>
        </QuestionRimac>
        <QuestionRimac className=' w-full'>
          <QuestionRimac.Label
            size={textLabel}
            text='En una noche común, ¿Cuántas horas duermes?'
          ></QuestionRimac.Label>
          <QuestionRimac.Info text='Recuerda que no hay respuestas correctas o incorrectas; queremos entender mejor tus hábitos de sueño para ayudarte a mejorar tu bienestar.'></QuestionRimac.Info>
          <SliderForm
            control={control}
            name='sleep'
            min={4}
            max={10}
            step={1}
            message={errors?.sleep?.message}
            mainTitle='Cantidad de horas de sueño'
            leftTitle='4h o menos'
            rightTitle='10h o más'
            className='md:w-2/3 w-full'
          ></SliderForm>
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
