// to use the language libraray i18next 
// step-1 : define language json files..
// step-2 : initialise this file and call them in the files where you want to use.
// step-3 : use the hook useTranslation(); in the components 
// step-4 : t is used as placeholder and i18n.changeLanguage() is used change lang with some trigger. 

import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import english from './english.json'
import hindi from './hindi.json'
import tamil from './tamil.json'


i18next.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: "en",
    resources: {
        en: english,
        hn: hindi,
        tm: tamil,
    },
    fallbackLng: "en",
    react: {useSuspense: false,},
});

export default i18next;