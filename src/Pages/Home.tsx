import i18next from 'i18next';
import { useTranslation } from 'react-i18next';




export function Home() {

    const {t} = useTranslation();
    return (
  
      <h1>{t("welcome")}  </h1>
    )
  }
  
