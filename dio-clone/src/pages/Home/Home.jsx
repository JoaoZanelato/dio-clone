import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Header } from "../../components/Header/Header";
import bannerImage from "../../assets/banner.png";
import { Container, TextContent, Title, TitleHighlight } from "./styles.js";
const Login = () => {
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
            onClick={() => null}
          />
        </div>
        <div>
          <img src={bannerImage} alt="banner" />
        </div>
      </Container>
    </>
  );
};
export default Login;
