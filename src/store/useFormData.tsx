import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface useFormDataState {
  formData: Record<any, any>;
}
const initialState: useFormDataState = {
  formData: {},
};
interface useFormDataAction {
  saveFormData: (data: Record<any, any>) => void;
  resetForm: () => void;
}

export const useFormData = create(
  persist<useFormDataState & useFormDataAction>(
    (set) => ({
      ...initialState,
      saveFormData: (data) => {
        set((state) => {
          const updatedFormData = { ...state.formData, ...data };
          localStorage.setItem('formData', JSON.stringify(updatedFormData));
          console.log(updatedFormData);
          return { formData: updatedFormData };
        });
      },
      resetForm: () => {
        set(initialState);
        localStorage.removeItem('form-survey');
      },
    }),
    {
      name: 'form-survey',
    },
  ),
);
