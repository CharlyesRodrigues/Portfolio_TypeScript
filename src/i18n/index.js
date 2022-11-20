

import {initReactI18next} from 'react-i18next';
import enJson from './translation/en.json';
import espJson from './translation/esp.json';
import  ptJson from './translation/pt.json';
import i18n from 'react-i18next';

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  interpolation: {
  
      escapeValue: false
   },
   resources:{
  
  en:enJson,
  esp:espJson,
  pt:ptJson
     
    },
  });
  
  export default i18n;


  
