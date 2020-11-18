import Head from "./Components/Header";
import Navbar from './Containers/NavBarContainer';
import CardProduct from "./Components/ProductCard";
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
          <CardProduct />
          <p>Aplicación React y se actualiza</p>
        </Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
