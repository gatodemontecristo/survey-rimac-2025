import { LabelRimac, ToogleRimac } from '../../atoms';

export const SlideTermsConditions = () => {
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
      <ToogleRimac
        text='Declaro como verdadera la información brindada sobre mi estado de salud'
        className='mt-5'
      ></ToogleRimac>
    </div>
  );
};
