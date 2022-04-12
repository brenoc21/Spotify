import PlaylistNavbarLayout from "../../components/PlaylistNavbarLayout";
import Player from "../Player";
import { LayoutBG, Row, ChildrenContent } from "./styles";

export default function Layout({ children, bg }) {
    return (
        <LayoutBG>
            <Row>
                <PlaylistNavbarLayout />
            <ChildrenContent bg={bg}>
                {children}
            </ChildrenContent>
            </Row>
            <Player />
        </LayoutBG>
    );
}