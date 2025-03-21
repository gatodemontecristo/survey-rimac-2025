import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ButtomMobile, ButtonRimac } from '../atoms';
import { QuestionRimac, ToogleCollection } from '../molecules';
import { useFormData, useStepProgress } from '../../store';
import { useMediaQuery } from 'react-responsive';

const schema = yup.object().shape({
  isOn: yup.boolean().oneOf([true], 'Debes aceptar los términos y condiciones'),
});
export const SlideTermsConditions = () => {
  const { saveFormData, formData } = useFormData();
  const {
    control,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      isOn: formData.isOn || false,
    },
  });
  const { nextQuestion } = useStepProgress();
  const onSubmit = () => {
    saveFormData(getValues());
    nextQuestion();
  };
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const textSize = isMobile ? 'text-2xl' : 'text-4xl';
  const textParagraph = isMobile ? 'text-lg' : 'text-xl';
  return (
    <div
      className='flex flex-col items-start z-1 justify-center text-justify gap-4 w-4/5 py-18 md:py-10 overflow-y-scroll custom-scrollbar
   '
    >
      <QuestionRimac className='mb-4'>
        <QuestionRimac.Label
          size={textSize}
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
          size={textParagraph}
        ></QuestionRimac.Info>

        <ToogleCollection
          {...{ control }}
          name='isOn'
          message={errors?.isOn?.message}
          text='Declaro como verdadera la información brindada sobre mi estado de salud'
          className='mt-5'
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
  );
};
