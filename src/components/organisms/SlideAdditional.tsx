import { ButtonRimac } from '../atoms';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { QuestionRimac, RadioCollection } from '../molecules';
import { optionYN } from '../../constants';
import { useStepProgress } from '../../store';

const schema = yup.object().shape({
  surgeon: yup.string().required('Debes seleccionar una opción'),
  device: yup.string().required('Debes seleccionar una opción'),
  condition: yup.string().required('Debes seleccionar una opción'),
});
export const SlideAdditional = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      surgeon: '',
      device: '',
      condition: '',
    },
  });
  const { nextQuestion } = useStepProgress();
  return (
    <div className='flex flex-row items-start justify-center w-4/5 gap-4 py-15 pr-15 h-screen overflow-y-scroll custom-scrollbar'>
      <div className='flex flex-col items-start justify-start text-justify   gap-4 w-full'>
        <QuestionRimac className='mb-4 w-full'>
          <QuestionRimac.Label
            size='text-2xl'
            text='¿Se ha sometido a una cirugía a raíz de esta condición/codiciones?'
          ></QuestionRimac.Label>
          <RadioCollection
            {...{ control }}
            name='surgeon'
            itemOptions={optionYN}
            message={errors?.surgeon?.message}
          />
        </QuestionRimac>
        <QuestionRimac className='mb-4 w-full'>
          <QuestionRimac.Label
            size='text-2xl'
            text='¿Cuenta con algún dispositivo médico o prótesis a raíz de esta operación?'
          ></QuestionRimac.Label>
          <QuestionRimac.Info text='Puede ser a nivel articular como hombro, rodilla o cadera, a nivel cardíaco como un marcapasos o stent coronario, o a nivel columna como una caja intersomática, clavos o tornillos.'></QuestionRimac.Info>
          <RadioCollection
            {...{ control }}
            name='device'
            itemOptions={optionYN}
            message={errors?.device?.message}
          />
        </QuestionRimac>

        <QuestionRimac className='mb-4 w-full'>
          <QuestionRimac.Label
            size='text-2xl'
            text='¿Ha sido hospitalizado a raíz de esta condición/condiciones?'
          ></QuestionRimac.Label>
          <RadioCollection
            {...{ control }}
            name='condition'
            itemOptions={optionYN}
            message={errors?.condition?.message}
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
