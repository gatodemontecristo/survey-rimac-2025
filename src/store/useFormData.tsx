import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface useFormDataProps {
  formData: Record<any, any>;
  saveFormData: (data: Record<any, any>) => void;
}

export const useFormData = create(
  persist<useFormDataProps>(
    (set) => ({
      formData: {},
      saveFormData: (data) => {
        set((state) => {
          const updatedFormData = { ...state.formData, ...data };
          localStorage.setItem('formData', JSON.stringify(updatedFormData));
          console.log(updatedFormData);
          return { formData: updatedFormData };
        });
      },
    }),
    {
      name: 'form-survey',
    },
  ),
);
