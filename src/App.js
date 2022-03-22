import Home from "./pages/Home";
import GlobalStyle from "./styles/global";
import { Route, Routes } from "react-router-dom";
import Faq from "./pages/Faq";
function App() {
  return (
    <div className="App">
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route exact path="/Faq" element={<Faq />}></Route>
      </Routes>
    </div>
  );
}

export default App;
