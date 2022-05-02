import Home from "./pages/Home";
import GlobalStyle from "./styles/global";
import { Route, Routes } from "react-router-dom";
import Faq from "./pages/Faq";
import Playlist from "./pages/Playlist";
import PlaylistQueue from "./pages/PlaylistQueue";
import Signin from "./pages/Signin";
import Login from "./pages/Login";
function App() {
  const playlist = [
    {
      title: "Hide Your Heart",
      author: "Mineiro",
      src: "../../music/hide-your-heart.wav",
    },
    {
      title: "N.P.O",
      author: "Augusto",
      src: "../../music/npo.wav",
    },
  ];

  const playlist2 = [
    {
      title: "Starlight",
      author: "Pagodão Waifoso",
      src: "../../music/starlight.wav",
    },
  ];

  return (
    <div className="App">
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          exac
          path="/PlaylistQueue"
          element={<PlaylistQueue playlist={playlist} />}
        />
        <Route
          exac
          path="/PlaylistQueue2"
          element={<PlaylistQueue playlist={playlist2} />}
        />
        <Route exact path="/faq" element={<Faq />}></Route>
        <Route exac path="/playlist" element={<Playlist />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
