import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button.jsx";
import { Header } from "../../components/Header/Header.jsx";
import bannerImage from "../../assets/banner.png";
import { Container, TextContent, Title, TitleHighlight } from "./styles.js";
const Home = () => {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate("/login");
  };
  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighlight>
              Implemente
              <br />
            </TitleHighlight>
            o seu futuro global agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas inovadoras do mundo
            e encare seu novo desafio profisisonal, evoluind em comunidade com
            os melhores experts.
          </TextContent>
          <Button
            title="Começar agora"
            variant="secondary"
            onClick={() => handleClickSignIn}
          />
        </div>
        <div>
          <img src={bannerImage} alt="banner" />
        </div>
      </Container>
    </>
  );
};
export default Home;
