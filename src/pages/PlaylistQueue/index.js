import {
  Container,
  PlaylistBG,
  PlaylistBody,
  PlaylistHeader,
  PlaylistPlayerDiv,
  Table,
} from "./styles";
import play from "../../assets/play.svg";
import Layout from "../../components/Layout";

export default function PlaylistQueue({ playlist }) {
  return (
    <Layout bg="var(--dark-third-color)">
      <PlaylistBG>
        <Container>
          <PlaylistHeader>
            <p className="title">PLAYLISTS</p>
            <h1>As melhores do Rafoso</h1>
            <div>
              <p>Rafinha Rafoso - 3 músicas</p>
            </div>
          </PlaylistHeader>
          <PlaylistPlayerDiv>
            <button className="play">
              <img src={play} />
            </button>
          </PlaylistPlayerDiv>
          <PlaylistBody>
            <Table>
              <table className="table">
                <thead>
                  <th>#</th>
                  <th>TÍTULO</th>
                  <th>ARTISTA</th>
                  <th>ÁLBUM</th>
                </thead>
                <tbody>
                  {playlist.map((music, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{music.title}</td>
                      <td>{music.author}</td>
                      <td>Álbum</td>
                      <td>
                        <audio controls>
                          <source src={music.src} type="audio/wav" />
                        </audio>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Table>
          </PlaylistBody>
        </Container>
      </PlaylistBG>
    </Layout>
  );
}
