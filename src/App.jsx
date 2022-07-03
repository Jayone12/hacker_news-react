import "./App.css";
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

function App() {
  return (
    <BrowserRouter>
      <Header />
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
    </BrowserRouter>
  );
}

export default App;
