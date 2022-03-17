<script lang="tsx">
import Vue, { PropType } from 'vue';
import { WizardStepsStructure, WizardStepStructure } from '@/entities/structures/WizardStepStructure';
import { PropValidator } from 'vue/types/options';
import { WizardStepTypeEnum } from '@/entities/enums/WizardStepTypeEnum';
import { VBtn, VCheckbox, VFileInput, VSelect, VTextField } from 'vuetify/lib/components';

export default Vue.extend({
  components: {
    'v-select': VSelect,
    'v-file-input': VFileInput,
    'v-checkbox': VCheckbox,
    'v-text-field': VTextField,
    'v-btn': VBtn,
  },
  props: {
    structure: {
      required: true,
      type: Object as PropType<WizardStepsStructure>,
    } as PropValidator<WizardStepsStructure>,
    previousButton: {
      type: Boolean
    } as PropValidator<boolean>
  },
  data: () => ({
    data: {} as { [key: string]: unknown },
  }),
  render() {
    return (
        <v-card outlined>
          <v-container fluid>
            <v-row align="center">
              <v-col cols="12">
                {
                  this.structure.steps
                      .filter(step => step.showIf ? step.showIf(this.data) : true)
                      .map(step => this.renderInput(step))
                }
              </v-col>
            </v-row>
            <v-row align="center">
              <v-col cols="12">
                <v-btn color="primary"
                       onClick={() => this.$emit('save-button-click', this.data)}
                       props={{ disabled: !this.structure.completeIf(this.data) }}>
                  Дальше
                </v-btn>
                {
                    this.previousButton && (
                        <v-btn text onClick={() => this.onPreviousButtonClick()}>Назад</v-btn>
                    )
                }
              </v-col>
            </v-row>
          </v-container>
        </v-card>
    );
  },
  methods: {
    renderInput(wizardStep: WizardStepStructure) {
      switch (wizardStep.type) {
        case WizardStepTypeEnum.Select: {
          if (wizardStep.itemLabel) {
            return <v-select v-model={this.data[wizardStep.fieldName]}
                             items={wizardStep.items}
                             item-text={wizardStep.itemLabel}
                             item-value={wizardStep.itemValue}
                             label={wizardStep.label}
                             outlined
                             dense>
            </v-select>
          }

          return <v-select v-model={this.data[wizardStep.fieldName]}
                           items={wizardStep.items}
                           label={wizardStep.label}
                           outlined
                           dense>
          </v-select>
        }
        case WizardStepTypeEnum.InputNumber: {
          return <v-text-field v-model={this.data[wizardStep.fieldName]}
                               label={wizardStep.label}
                               rules={[(v: string) => v && v.length > 0 && /[0-9.]+/.test(v)]}
                               outlines
                               dense
                               clearable>
          </v-text-field>;
        }
        case WizardStepTypeEnum.InputString: {
          return <v-text-field v-model={this.data[wizardStep.fieldName]}
                               label={wizardStep.label}
                               outlines
                               dense
                               clearable>
          </v-text-field>;
        }
        case WizardStepTypeEnum.File: {
          return <v-file-input label={wizardStep.label}
                               accept={wizardStep.fileAccept}
                               v-model={this.data[wizardStep.fieldName]}
                               outlined
                               dense>
          </v-file-input>;
        }
        case WizardStepTypeEnum.Checkbox: {
          return <v-checkbox label={wizardStep.label}
                             v-model={this.data[wizardStep.fieldName]}
                             outlined
                             dense>
          </v-checkbox>;
        }
      }
    },
    onPreviousButtonClick() {
      this.data = {};
      this.$emit('previous-button-click');
    }
  }
})
</script>
