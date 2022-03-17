import { WizardStepTypeEnum } from '@/entities/enums/WizardStepTypeEnum';

export interface WizardStepsStructure {
  steps: WizardStepStructure[];
  completeIf: (obj: unknown) => boolean;
}

export interface WizardStepStructure {
  fieldName: string;
  type: WizardStepTypeEnum;
  label: string;
  items?: unknown[];
  itemLabel?: string;
  itemValue?: string;
  fileAccept?: string;
  showIf?: (obj: unknown) => boolean;
}
