import { WizardStepTypeEnum } from '@/entities/enums/WizardStepTypeEnum';
import { WizardStepsStructure } from '@/entities/structures/WizardStepStructure';

interface ObjData {
  whitePageSource?: string;
  whitePageLanguage?: string;
  whitePageZipPath?: string;
  whitePageThematic?: string;
}

interface WhitePageSelectItem {
  text: string;
  value: string;
}

const languagesList: WhitePageSelectItem[] = [
  {
    value: 'ru',
    text: 'Русский',
  }, {
    value: 'en',
    text: 'Английский',
  }, {
    value: 'ga',
    text: 'Ирландский',
  }, {
    value: 'it',
    text: 'Итальянский',
  }, {
    value: 'de',
    text: 'Немецкий',
  }, {
    value: 'bg',
    text: 'Болгарский',
  }, {
    value: 'hu',
    text: 'Венгерский',
  }, {
    value: 'es',
    text: 'Испанский',
  }, {
    value: 'pt',
    text: 'Португальский',
  }, {
    value: 'el',
    text: 'Греческий',
  }, {
    value: 'da',
    text: 'Датский',
  }, {
    value: 'lv',
    text: 'Латышский',
  }, {
    value: 'lt',
    text: 'Литовский',
  }, {
    value: 'mt',
    text: 'Мальтийский',
  }, {
    value: 'nl',
    text: 'Нидерландский',
  }, {
    value: 'pl',
    text: 'Польский',
  }, {
    value: 'ro',
    text: 'Румынский',
  }, {
    value: 'sk',
    text: 'Словацкий',
  }, {
    value: 'sl',
    text: 'Словенский',
  }, {
    value: 'fi',
    text: 'Финский',
  }, {
    value: 'fr',
    text: 'Французский',
  }, {
    value: 'hr',
    text: 'Хорватский',
  }, {
    value: 'cs',
    text: 'Чешский',
  }, {
    value: 'sv',
    text: 'Шведский',
  }, {
    value: 'et',
    text: 'Эстонский',
  }, {
    value: 'id',
    text: 'Индонезийский',
  }, {
    value: 'kk',
    text: 'Казахский',
  }, {
    value: 'sq',
    text: 'Албанский',
  }, {
    value: 'vi',
    text: 'Вьетнамский',
  }, {
    value: 'ja',
    text: 'Японский',
  }, {
    value: 'zh',
    text: 'Китайский',
  }, {
    value: 'th',
    text: 'Тайский',
  }, {
    value: 'ko',
    text: 'Корейский',
  }, {
    value: 'ar',
    text: 'Арабский',
  }, {
    value: 'hi',
    text: 'Хинди',
  }, {
    value: 'no',
    text: 'Норвежский',
  }, {
    value: 'ka',
    text: 'Грузинский',
  }, {
    value: 'tr',
    text: 'Турецкий',
  },
];

const thematicsList: WhitePageSelectItem[] = [
  {
    value: 'oil_ai',
    text: 'Авто',
  }, {
    value: 'psychology_ai',
    text: 'Психология',
  }, {
    value: 'cryptocurrency_ai',
    text: 'Криптовалюта',
  }, {
    value: 'e_gadgets_ai',
    text: 'Товары',
  }, {
    value: 'health_and_beauty_ai',
    text: 'Красота',
  }, {
    value: 'gifts_ai',
    text: 'Подарки',
  }, {
    value: 'varicose_ai',
    text: 'Варикоз',
  }, {
    value: 'mans_health_ai',
    text: 'Мужское',
  }, {
    value: 'marketing_ai',
    text: 'Маркетинг',
  }, {
    value: 'travel_ai',
    text: 'Путешествия'
  }, {
    value: 'fitnes_ai',
    text: 'Фитнес',
  }, {
    value: 'finance_ai',
    text: 'Финансы',
  }, {
    value: 'aligadgety_ai',
    text: 'Гаджеты',
  }, {
    value: 'apartment_ai',
    text: 'Недвижимость,'
  }, {
    value: 'perfume',
    text: 'Парфюмерия'
  }, {
    value: 'geology_ai',
    text: 'Геология',
  }, {
    value: 'agrobiologia_ai',
    text: 'Земледелие',
  },
];

export default {
  steps: [{
    fieldName: 'whitePageSource',
    type: WizardStepTypeEnum.Select,
    label: 'Откуда White Page',
    items: [
      {
        text: 'Архив с компьютера',
        value: 'zip',
      }, {
        text: 'Сгенерировать на pl.ad-red.ru',
        value: 'generated',
      }
    ],
    itemValue: 'value',
    itemLabel: 'text',
  }, {
    fieldName: 'whitePageLanguage',
    type: WizardStepTypeEnum.Select,
    label: 'Язык White Page',
    items: languagesList,
    itemValue: 'value',
    itemLabel: 'text',
    showIf: (obj: ObjData) => obj.whitePageSource === 'generated'
  }, {
    fieldName: 'whitePageThematic',
    type: WizardStepTypeEnum.Select,
    label: 'Тематика White Page',
    items: thematicsList,
    itemValue: 'value',
    itemLabel: 'text',
    showIf: (obj: ObjData) => obj.whitePageSource === 'generated'
  }, {
    fieldName: 'whitePageZipPath',
    type: WizardStepTypeEnum.File,
    label: 'Zip архив с White Page',
    fileAccept: 'application/zip, *.zip',
    showIf: (obj: ObjData) => obj.whitePageSource === 'zip'
  }],
  completeIf: (obj: ObjData) =>
    obj.whitePageSource && ['generated', 'zip'].includes(obj.whitePageSource) && ((obj.whitePageThematic && obj.whitePageLanguage) || obj.whitePageZipPath)
} as WizardStepsStructure;


