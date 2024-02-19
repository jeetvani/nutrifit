import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { useEffect } from "react";
import Manager from "./src/Manager";
import { loadFonts } from "./src/utils/fonts";
import { I18nextProvider } from "react-i18next";
import translate from "./src/translate/translate";

export default function App() {
  useEffect(() => {
    async function loadApp() {
      await loadFonts();
    }

    loadApp();
  }, []);

  return (
    <Provider store={store}>
      <I18nextProvider i18n={translate}>
        <StatusBar style="light" />
        {/* Smartphone status bar */}
        <Manager />
        {/* Authenticated Section Handler */}
      </I18nextProvider>
    </Provider>
  );
}
