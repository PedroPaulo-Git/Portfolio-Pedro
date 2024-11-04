
import "./App.css";
import Home from "./Home/Home";

import global_en from "./translations/en/global.json";
import global_pt_br from "./translations/pt-br/global.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

i18next.init({
  interpolation:{escapeValue:false},
  lng: "ptbr",
  resources: {
    ptbr: {
      global: global_pt_br,
    },
    en: {
      global: global_en,
    },
  },
});
function App() {
  return (
    <>
      <I18nextProvider i18n={i18next}>
      <Home />
      </I18nextProvider>
    </>
  );
}

export default App;
