import Theme from '../styles/theme';
import { IWheelsProvider } from '../context/IWheelsContext';

export default function App({ Component, pageProps }) {
  return (
    <Theme>
      <IWheelsProvider>
        <Component {...pageProps} />
      </IWheelsProvider>
    </Theme>
  );
}
