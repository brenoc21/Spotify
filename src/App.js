import Home from "./pages/Home";
import GlobalStyle from "./styles/global";
import { Route, Routes } from "react-router-dom";
import Faq from "./pages/Faq";
import Playlist from "./pages/Playlist";
import Signin from "./pages/Signin";
import Login from "./pages/Login";
function App() {
  return (
    <div className="App">
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route exact path="/faq" element={<Faq />}></Route>
        <Route exac path="/playlist" element={<Playlist />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
