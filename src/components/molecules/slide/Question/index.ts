import { QuestionRimacHOCProps } from '../../../../types';
import { InfoRimac, LabelRimac, UrlRimac } from '../../../atoms';
import { QuestionRimac as QuestionRimacHOC } from './QuestionRimac';

export const QuestionRimac: QuestionRimacHOCProps = Object.assign(
  QuestionRimacHOC,
  {
    Label: LabelRimac,
    Info: InfoRimac,
    Url: UrlRimac,
  },
);
