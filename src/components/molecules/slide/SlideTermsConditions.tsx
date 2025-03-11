import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ButtonRimac, LabelRimac, ToogleRimac } from '../../atoms';

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
    <div className='flex flex-col items-start justify-center text-justify gap-4 w-3/4'>
      <LabelRimac
        size='text-4xl'
        text='Comentanos'
        special='sobre ti'
      ></LabelRimac>
      <p className='text-rimac-grey font-br-sonoma text-xl leading-8'>
        En este formulario, te pediremos información sobre tu salud y confiamos
        en que responderas con honestidad para realizar el mejor análisis
        posible en tu beneficio. Tu información personal está protegida y será
        usada unicamente para evaluar las oberturas de su póliza.
      </p>
      <p className='text-rimac-grey font-br-sonoma text-xl leading-8'>
        Al igual que la mayoría de los participantes, confiamos en que
        responderás con sinceridad. Recuerda que porporcionar información
        incorrecta, esta podría afectar negativamente en la cobertura tu póliza.
      </p>
      <Controller
        name='isOn'
        control={control}
        render={({ field }) => (
          <ToogleRimac
            text='Declaro como verdadera la información brindada sobre mi estado de salud'
            className='mt-5'
            isOn={field.value ?? false}
            setIsOn={field.onChange}
          ></ToogleRimac>
        )}
      />
      {errors.isOn && <p className='text-red-500'>{errors.isOn.message}</p>}
      <div className='flex flex-row justify-end w-full mt-10'>
        <ButtonRimac
          text='Siguiente'
          fnClick={handleSubmit(fnSubmit)}
        ></ButtonRimac>
      </div>
    </div>
  );
};
