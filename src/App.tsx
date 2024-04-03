import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme";

import Header from "./components/Header";
import About from "./components/Sections/About";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <About />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
