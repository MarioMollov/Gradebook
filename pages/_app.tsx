import app from "../firebase";
import AppProvider from "../redux/provider";
import "../styles/global.scss";

const App = ({ Component, pageProps }) => {
  app;
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
};

export default App;
