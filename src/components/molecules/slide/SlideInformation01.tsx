import { ButtonRimac, LabelRimac, RadioRimac } from '../../atoms';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ItemOption } from '../../../types';
import { Controller, useForm } from 'react-hook-form';

interface SlideInformation01Props {
  fnSubmit: () => void;
  itemOptions: ItemOption[];
}
const schema = yup.object().shape({
  haveInsurance: yup.string().required('Debes seleccionar una opción'),
  insurance: yup.string().required('Debes seleccionar una aseguradora'),
});
export const SlideInformation01 = ({
  fnSubmit,
  itemOptions,
}: SlideInformation01Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      haveInsurance: '',
      insurance: '',
    },
  });

  return (
    <div className='flex flex-col items-start justify-center text-justify gap-4 w-3/4'>
      <LabelRimac
        size='text-2xl'
        text='¿Tienes o has tenido algún seguro médico?'
      ></LabelRimac>
      <p className='text-rimac-grey font-br-sonoma text-xl leading-8'>
        Seguro médico que haya sido contratado por ti o tu empleador en los
        últimos 120 días, como una EPS, seguro colectivo o seguro particular con
        RIMAC u otra aseguradora
      </p>
      <div className='flex flex-row flex-wrap gap-5'>
        {itemOptions.map((itemOption) => (
          <Controller
            key={itemOption.value}
            name='haveInsurance'
            control={control}
            render={({ field }) => (
              <RadioRimac
                {...field}
                value={itemOption.value}
                label={itemOption.label}
                checked={field.value === itemOption.value}
                onChange={() => field.onChange(itemOption.value)}
              />
            )}
          />
        ))}
      </div>
      {errors.haveInsurance && (
        <p className='text-red-500'>{errors.haveInsurance.message}</p>
      )}
      <LabelRimac
        size='text-2xl'
        text='Selecciona el tipo de seguro y la aseguradora'
      ></LabelRimac>
      <div className='flex flex-row flex-wrap gap-5'>
        {itemOptions.map((itemOption) => (
          <Controller
            key={itemOption.value}
            name='insurance'
            control={control}
            render={({ field }) => (
              <RadioRimac
                {...field}
                value={itemOption.value}
                label={itemOption.label}
                checked={field.value === itemOption.value}
                onChange={() => field.onChange(itemOption.value)}
              />
            )}
          />
        ))}
      </div>
      {errors.insurance && (
        <p className='text-red-500'>{errors.insurance.message}</p>
      )}

      <div className='flex flex-row justify-end w-full mt-10'>
        <ButtonRimac
          text='Siguiente'
          fnClick={handleSubmit(fnSubmit)}
        ></ButtonRimac>
      </div>
    </div>
  );
};
