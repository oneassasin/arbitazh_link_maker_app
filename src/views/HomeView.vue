<template>
  <div class="home">
    <v-stepper v-model="currentStep"
               flat
               vertical>
      <v-stepper-step :complete="currentStep > 1"
                      step="1">
        Настройки White Page
      </v-stepper-step>

      <v-stepper-content step="1">
        <v-row align="center">
          <v-col cols="12">
            <WizardStep :structure="whitePageStepsStructure"
                        @save-button-click="saveData">
            </WizardStep>
          </v-col>
        </v-row>
      </v-stepper-content>

      <v-stepper-step
          :complete="currentStep > 2"
          step="2">
        Настройки Black Page
      </v-stepper-step>

      <v-stepper-content step="2">
        <WizardStep :structure="blackPageStepsStructure"
                    previous-button
                    @save-button-click="saveData"
                    @previous-button-click="previousButtonClick">
        </WizardStep>
      </v-stepper-content>

      <v-stepper-step
          :complete="currentStep > 3"
          step="3">
        Настройки домена
      </v-stepper-step>

      <v-stepper-content step="3">
        <WizardStep :structure="domainStepsStructure"
                    previous-button
                    @save-button-click="saveData"
                    @previous-button-click="previousButtonClick">
        </WizardStep>
      </v-stepper-content>

      <v-stepper-step step="4"
                      :complete="currentStep > 4">
        Настройки клоаки
      </v-stepper-step>
      <v-stepper-content step="4">
        <WizardStep :structure="cloakStepsStructure"
                    previous-button
                    @save-button-click="saveData"
                    @previous-button-click="previousButtonClick">
        </WizardStep>
      </v-stepper-content>
    </v-stepper>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import WizardStep from '@/components/WizardStep.vue';
import WhitePageWizardSteps from '@/entities/structures/WhitePageWizardSteps';
import BlackPageWizardSteps from '@/entities/structures/BlackPageWizardSteps';
import DomainWizardSteps from '@/entities/structures/DomainWizardSteps';
import CloakWizardSteps from '@/entities/structures/CloakWizardSteps';

export default Vue.extend({
  name: 'HomeView',
  components: {
    WizardStep,
  },
  data: () => ({
    whitePageStepsStructure: WhitePageWizardSteps,
    blackPageStepsStructure: BlackPageWizardSteps,
    domainStepsStructure: DomainWizardSteps,
    cloakStepsStructure: CloakWizardSteps,

    currentStep: 1,

    whitePageSource: '',
    whitePageLanguage: '',
    whitePageThematic: '',
    whitePageZipPath: '',

    blackPageZipPath: '',

    domainRegistration: '',
    domainRegistrationDisable: false,
    domainName: '',
    hosting: '',
    domainRegister: '',

    cloak: '',
  }),
  methods: {
    saveData(data: { [x: string]: unknown; }) {
      Object.keys(data)
          .filter(key => data[key])
          .forEach(key => this.$data[key] = data[key]);

      this.currentStep++;
    },
    previousButtonClick() {
      this.currentStep--;
    }
  },
});
</script>
