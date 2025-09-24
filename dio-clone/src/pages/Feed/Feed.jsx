import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button.jsx";
import { Header } from "../../components/Header/Header.jsx";
import { Card } from "../../components/Card/Card.jsx";
import { Container, Column, Title, TitleHighlight } from "./styles.js";
import { UserInfo } from "../../components/UserInfo/UserInfo.jsx";
const Feed = () => {
  return (
    <>
      <Header logado={true}/>
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <Title># RANKING 5 TOP DA SEMANA</Title>
          <UserInfo
            percentual={35}
            name="João Zanelato"
            img="https://avatars.githubusercontent.com/u/127459520?v=4"
          />
          <UserInfo
            percentual={2}
            name="João Zanelato"
            img="https://avatars.githubusercontent.com/u/127459520?v=4"
          />
          <UserInfo
            percentual={99}
            name="João Zanelato"
            img="https://avatars.githubusercontent.com/u/127459520?v=4"
          />
          <UserInfo
            percentual={76}
            name="João Zanelato"
            img="https://avatars.githubusercontent.com/u/127459520?v=4"
          />
        </Column>
      </Container>
    </>
  );
};
export default Feed;
