import i18n from 'i18next';
import { NativeModules, Platform } from 'react-native';

import * as enUs from '@/locales/en-US';

const locale =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
    : NativeModules.I18nManager.localeIdentifier;

i18n.init({
  fallbackLng: 'en-US',
  interpolation: {
    escapeValue: false,
  },
  lng: locale,
  resources: {
    'en-US': enUs,
  },
});

export default i18n;
