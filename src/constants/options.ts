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

export const optionTobacco: ItemOption[] = [
  { value: '1', label: 'A diario' },
  { value: '2', label: 'Semanalmente' },
  { value: '3', label: 'Socialmente (menos de una vez por semana)' },
  { value: '4', label: 'He consumido en el pasado pero ya lo dejé' },
  { value: '5', label: 'No consumo' },
];
export const optionCigars: ItemOption[] = [
  { value: '1', label: 'Entre 1 y 5 cigarros' },
  { value: '2', label: 'Entre 6 y 10 cigarros' },
  { value: '3', label: 'Entre 11 y 20 cigarros' },
  { value: '4', label: 'Más de 20 cigarros' },
];
export const optionAlcohol: ItemOption[] = [
  { value: '1', label: 'Todos los días' },
  { value: '2', label: 'Cada fin de semana' },
  { value: '3', label: '1 a 3 veces por semana' },
  { value: '4', label: '1 a 3 veces por mes' },
  { value: '5', label: '1 a 3 veces por mes' },
  { value: '6', label: 'En ocasiones especiales (menos de 5 veces al año)' },
  { value: '7', label: 'Nunca' },
];

export const optionLastCheck: ItemOption[] = [
  { value: '1', label: 'En los últimos 6 meses' },
  { value: '2', label: 'Entre 6 meses y un año' },
  { value: '3', label: 'Entre 1 y 2 años' },
  { value: '4', label: 'Hace más de 2 años' },
  { value: '4', label: 'A la fecha no he pasado por ningún chequeo médico' },
  { value: '5', label: 'o recuerdo cuándo fue mi último chequeo médico' },
];

export const optionDiagnoses: ItemOption[] = [
  { value: '1', label: 'Hipertensión' },
  { value: '2', label: 'Diabetes' },
  { value: '3', label: 'Displidemia' },
  { value: '4', label: 'Asma' },
  { value: '5', label: 'Artrosis' },
  { value: '6', label: 'Otros (seleccionar)' },
  { value: '7', label: 'Ninguna' },
];
