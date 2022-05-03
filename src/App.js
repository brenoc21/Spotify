import Home from "./pages/Home";
import GlobalStyle from "./styles/global";
import { Route, Routes } from "react-router-dom";
import Faq from "./pages/Faq";
import Playlist from "./pages/Playlist";
import PlaylistQueue from "./pages/PlaylistQueue";
import Signin from "./pages/Signin";
import Login from "./pages/Login";
import Search from "./pages/Search";
function App() {
  document.addEventListener("contextmenu", (event) => {
    event.preventDefault()
  })
  return (
    <div className="App">
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          exac
          path="/PlaylistQueue"
          element={<PlaylistQueue
          name="playlist 1"
          author="RafinhaRafoso" />}
        />
        <Route
          exac
          path="/PlaylistQueue2"
          element={<PlaylistQueue
          name="playlist 2"
          author="RafinhaRafoso" />}
        />
        <Route exact path="/faq" element={<Faq />}></Route>
        <Route exac path="/playlist" element={<Playlist />}></Route>
        <Route exac path="/search" element={<Search/>}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
