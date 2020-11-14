import Head from "./Components/Header";
import Navbar from "./Components/Navbar";
import { ThemeProvider } from "@material-ui/styles";
import theme from './MaterialUI/Theme'

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Head />
        <Navbar />
        <p>Aplicación React y se actualiza</p>
      </ThemeProvider>
    </div>
  );
}

export default App;
