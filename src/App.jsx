import "./App.css";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Top from "./pages/Top";
import NotFound from "./pages/NotFound";
import New from "./pages/New";
import Show from "./pages/Show";
import Ask from "./pages/Ask";
import Job from "./pages/Job";
import About from "./pages/About";
import Detail from "./pages/Detail";
import { GlobalStyle } from "./styles/globalStyles";
import { useDarkMode } from "./hooks/useDarkMode";
import { lightTheme, darkTheme } from "./utils/theme";

function App() {
  const [themeMode, toggleTheme] = useDarkMode();
  return (
    <BrowserRouter>
      <ThemeProvider theme={themeMode ? lightTheme : darkTheme}>
        <GlobalStyle />
        <div className="wrapper">
          <Header toggleTheme={toggleTheme} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/top" element={<Top />} />
            <Route path="/new" element={<New />} />
            <Route path="/show" element={<Show />} />
            <Route path="/ask" element={<Ask />} />
            <Route path="/job" element={<Job />} />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
