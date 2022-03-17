import { WizardStepTypeEnum } from '@/entities/enums/WizardStepTypeEnum';
import { WizardStepsStructure } from '@/entities/structures/WizardStepStructure';

interface ObjData {
  cloak?: string;
}

export default {
  steps: [{
    fieldName: 'cloak',
    type: WizardStepTypeEnum.Select,
    label: 'Сервис для клоакинга',
    items: [
      {
        text: 'HideClick',
        value: 'hideclick',
      }, {
        text: 'Hoax',
        value: 'hoax',
      }
    ],
    itemValue: 'value',
    itemLabel: 'text',
  }],
  completeIf: (obj: ObjData) => !!obj.cloak
} as WizardStepsStructure;
