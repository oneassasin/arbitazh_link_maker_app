import { WizardStepTypeEnum } from '@/entities/enums/WizardStepTypeEnum';
import { WizardStepsStructure } from '@/entities/structures/WizardStepStructure';

interface ObjData {
  domainRegistration?: string;
  domainRegistrationDisable?: boolean;
  domainName?: string;
  hosting?: string;
  domainRegister?: string;
}

export default {
  steps: [{
    fieldName: 'domainRegistration',
    type: WizardStepTypeEnum.Select,
    label: 'Доменное имя...',
    items: [{
      text: 'Случайное',
      value: 'random',
    }, {
      text: 'Задать вручную',
      value: 'manual',
    }],
    itemValue: 'value',
    itemLabel: 'text',
  }, {
    fieldName: 'domainName',
    type: WizardStepTypeEnum.InputString,
    label: 'Доменное имя',
    showIf: (obj: ObjData) => obj.domainRegistration === 'manual'
  }, {
    fieldName: 'domainRegistrationDisable',
    type: WizardStepTypeEnum.Checkbox,
    label: 'Не регистрировать доменное имя',
  }, {
    fieldName: 'hosting',
    type: WizardStepTypeEnum.Select,
    label: 'Хостинг',
    items: [{
      text: 'Beget',
      value: 'beget',
    }, {
      text: 'Jino',
      value: 'jino',
    }],
    itemValue: 'value',
    itemLabel: 'text',
    showIf: (obj: ObjData) => obj.domainRegistration === 'manual' && !obj.domainRegistrationDisable
  }, {
    fieldName: 'domainRegister',
    type: WizardStepTypeEnum.Select,
    label: 'Доменный регистратор',
    items: [{
      text: 'Beget',
      value: 'beget',
    }, {
      text: 'Jino',
      value: 'jino',
    }],
    itemValue: 'value',
    itemLabel: 'text',
    showIf: (obj: ObjData) => obj.domainRegistration === 'manual' && !obj.domainRegistrationDisable
  }],
  completeIf: (obj: ObjData) => obj.domainRegistration &&
      ((obj.domainRegistration === 'manual' && obj.domainName && obj.hosting && obj.domainRegister) || (obj.domainRegistration === 'random'))
} as WizardStepsStructure;


