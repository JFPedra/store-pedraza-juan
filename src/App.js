import Head from "./Components/Header";
import Navbar from "./Components/Navbar";
import CardProduct from "./Components/ProductCard";
import { ThemeProvider } from "@material-ui/styles";
import theme from './MaterialUI/Theme'
import { Card } from "@material-ui/core";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Head />
        <Navbar />
        <CardProduct />
        <p>Aplicación React y se actualiza</p>
      </ThemeProvider>
    </div>
  );
}

export default App;
