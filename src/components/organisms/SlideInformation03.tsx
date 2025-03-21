import { ButtonRimac } from '../atoms';
import * as yup from 'yup';
import { QuestionRimac, SliderForm } from '../molecules';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useFormData, useStepProgress } from '../../store';

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
  return (
    <div className='flex flex-row items-start justify-center w-4/5 gap-4 py-20 pr-15 h-screen overflow-y-scroll custom-scrollbar'>
      <div className='flex flex-col items-start justify-start text-justify   gap-4 w-full'>
        <QuestionRimac className='mb-4 w-full'>
          <QuestionRimac.Label
            size='text-2xl'
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
            className='w-2/3'
          ></SliderForm>
        </QuestionRimac>
        <QuestionRimac className=' w-full'>
          <QuestionRimac.Label
            size='text-2xl'
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
            className='w-2/3'
          ></SliderForm>
        </QuestionRimac>
        <div className='flex flex-row justify-end w-full mt-10 pe-10'>
          <ButtonRimac
            text='Siguiente'
            fnClick={handleSubmit(onSubmit)}
          ></ButtonRimac>
        </div>
      </div>
    </div>
  );
};
