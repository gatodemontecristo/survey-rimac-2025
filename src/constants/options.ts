import { ItemOption } from '../types';

export const optionYN: ItemOption[] = [
  { value: 'Y', label: 'Sí' },
  { value: 'N', label: 'No' },
];

export const optionInsurance: ItemOption[] = [
  { value: '1', label: 'Seguro Particular' },
  { value: '2', label: 'Seguro Colectivo' },
  { value: '3', label: 'EPS' },
];

export const optionCompany: ItemOption[] = [
  { value: '1', label: 'La Positiva' },
  { value: '2', label: 'Interseguro' },
  { value: '3', label: 'Pacífico' },
  { value: '4', label: 'MAPFRE' },
];

export const optionLast12: ItemOption[] = [
  { value: '1', label: 'Subí de peso' },
  { value: '2', label: 'Perdí peso' },
  { value: '3', label: 'Mi peso se mantuvo igual' },
];
