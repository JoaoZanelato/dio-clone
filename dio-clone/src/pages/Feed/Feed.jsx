import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button.jsx";
import { Header } from "../../components/Header/Header.jsx";
import { Card } from "../../components/Card/Card.jsx";
import { Container, TextContent, Title, TitleHighlight } from "./styles.js";
import { UserInfo } from "../../components/UserInfo/UserInfo.jsx";
const Feed = () => {
  return (
    <>
      <Header />
      <Container>
        <Card />
        <UserInfo
          percentual={35}
          name="Pablo Henrique"
          img="https://avatars.githubusercontent.com/u/127459520?v=4"
        />
      </Container>
    </>
  );
};
export default Feed;
