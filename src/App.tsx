import "./App.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme";

import Header from "./components/Header";
import section1 from "./components/Sections/section1";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
}

export default App;
