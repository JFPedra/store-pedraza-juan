import Head from "./Components/Header";
import Navbar from './Containers/NavBarContainer';
import Main from './Containers/MainContainer';
import { ThemeProvider } from "@material-ui/styles";
import { Provider } from "react-redux";
import store from "./Store";
import theme from "./MaterialUI/Theme";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Head />
          <Navbar />
          <Main />
        </Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
