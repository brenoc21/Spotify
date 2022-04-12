import Home from "./pages/Home";
import GlobalStyle from "./styles/global";
import { Route, Routes } from "react-router-dom";
import Faq from "./pages/Faq";
import Playlist from "./pages/Playlist";
import PlaylistQueue from "./pages/PlaylistQueue";
function App() {
  return (
    <div className="App">
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route exact path="/Faq" element={<Faq />}></Route>
        <Route exac path="/Playlist" element={<Playlist />}></Route>
        <Route exac path="/PlaylistQueue" element={<PlaylistQueue />}></Route>
      </Routes>
    </div>
  );
}

export default App;
