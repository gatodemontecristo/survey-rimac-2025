import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { ButtonRimac } from '../atoms';
import { QuestionRimac, RadioCollection } from '../molecules';
import { optionAlcohol } from '../../constants';

interface SlideInformation05Props {
  fnBack: () => void;
  fnSubmit: () => void;
}
const schema = yup.object().shape({
  alcohol: yup.string().required('Debes seleccionar una opción'),
});
export const SlideInformation05 = ({
  fnBack,
  fnSubmit,
}: SlideInformation05Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      alcohol: '',
    },
  });
  return (
    <div className='flex flex-row items-center justify-center w-4/5 gap-4 py-10 pr-15 h-screen overflow-y-scroll custom-scrollbar'>
      <div className='w-auto flex flex-col items-start justify-start  pb-55'>
        <ButtonRimac isNav={true} fnClick={fnBack}></ButtonRimac>
      </div>
      <div className='flex flex-col items-start justify-start text-justify   gap-4 w-full'>
        <QuestionRimac className='mb-4 w-full'>
          <QuestionRimac.Label
            size='text-2xl'
            text='¿Con qué frecuencia bebes alcohol?'
          ></QuestionRimac.Label>
          <RadioCollection
            {...{ control }}
            name='alcohol'
            itemOptions={optionAlcohol}
            message={errors?.alcohol?.message}
            justifyOption='justify-start'
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
