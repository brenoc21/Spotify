import { Container, PlaylistBG, PlaylistBody, PlaylistHeader, PlaylistPlayerDiv, Table } from "./styles";
import play from "../../assets/play.svg";
import Layout from "../../components/Layout";
import { useEffect, useState } from "react";
import { useSong } from "../../context/songContext";

export default function PlaylistQueue() {

    

    const [song, setSong] = useState(
        ['../../music/hide-your-heart.wav', '../../music/npo.wav','../../music/starlight.wav', ]
    );

    let music = '../../music/starlight.wav';

    useEffect(() => {
        console.log(song);
    }, [song]
    )

    return (
        <Layout bg='var(--dark-third-color)'>
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
                                    <tr onClick={() => music = '../../music/hide-your-heart.wav'}>
                                        <td>1</td>
                                        <td>Hide Your Heart</td>
                                        <td>Mineiro</td>
                                        <td>Álbum</td>
                                        <td>
                                            <audio controls>
                                                <source src='../../music/hide-your-heart.wav' type="audio/wav" />
                                            </audio>
                                        </td>
                                    </tr>
                                    <tr onClick={() => music = '../../music/npo.wav'}>
                                        <td>2</td>
                                        <td>N.P.O</td>
                                        <td>Augusto</td>
                                        <td>Álbum</td>
                                        <td>
                                            <audio controls>
                                                <source src='../../music/npo.wav' type="audio/wav" />
                                            </audio>
                                        </td>
                                    </tr>
                                    <tr onClick={() => setSong('../../music/starlight.wav')}>
                                        <td>3</td>
                                        <td>Starlight</td>
                                        <td>Pagodão Waifoso</td>
                                        <td>Álbum</td>
                                        <td>
                                            <audio controls>
                                                <source src='../../music/starlight.wav' type="audio/wav" />
                                            </audio>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </Table>
                    </PlaylistBody>
                </Container>
            </PlaylistBG>
        </Layout>
    );
}