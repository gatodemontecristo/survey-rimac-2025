import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ButtonRimac } from '../atoms';
import { QuestionRimac, ToogleCollection } from '../molecules';

interface SlideTermsConditionsProps {
  fnSubmit: () => void;
  onState?: boolean;
}
const schema = yup.object().shape({
  isOn: yup.boolean().oneOf([true], 'Debes aceptar los términos y condiciones'),
});
export const SlideTermsConditions = ({
  fnSubmit,
  onState = false,
}: SlideTermsConditionsProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      isOn: onState,
    },
  });
  return (
    <div className='flex flex-col items-start justify-center text-justify gap-4 w-4/5 py-10 overflow-y-scroll custom-scrollbar'>
      <QuestionRimac className='mb-4'>
        <QuestionRimac.Label
          size='text-4xl'
          text='Comentanos'
          special='sobre ti'
        ></QuestionRimac.Label>
        <QuestionRimac.Info
          text='En este formulario, te pediremos información sobre tu salud y confiamos
        en que responderas con honestidad para realizar el mejor análisis
        posible en tu beneficio. Tu información personal está protegida y será
        usada unicamente para evaluar las oberturas de su póliza.<br>Al igual que la mayoría de los participantes, confiamos en que
        responderás con sinceridad. Recuerda que porporcionar información
        incorrecta, esta podría afectar negativamente en la cobertura tu póliza.'
        ></QuestionRimac.Info>

        <ToogleCollection
          {...{ control }}
          name='isOn'
          message={errors?.isOn?.message}
          text='Declaro como verdadera la información brindada sobre mi estado de salud'
          className='mt-5'
        />
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
