import { WizardStepTypeEnum } from '@/entities/enums/WizardStepTypeEnum';
import { WizardStepsStructure } from '@/entities/structures/WizardStepStructure';

export default {
  steps: [{
    fieldName: 'blackPageZipPath',
    type: WizardStepTypeEnum.File,
    label: 'Zip архив с Black Page',
    fileAccept: 'application/zip, *.zip',
  }],
  completeIf: (obj: { blackPageZipPath?: string }) => !!obj.blackPageZipPath
} as WizardStepsStructure;


