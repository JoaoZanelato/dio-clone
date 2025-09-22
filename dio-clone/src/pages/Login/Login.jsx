import { Button } from "../../components/Button/Button.jsx";
import { Header } from "../../components/Header/Header.jsx";
import {
  Container,
  Column,
  CriarText,
  EsqueciText,
  Row,
  SubTitleLogin,
  Title,
  TitleLogin,
  Wrapper,
} from "./styles.js";
import { Input } from "../../components/Input/Input.jsx";
import {MdEmail, MdLock} from 'react-icons/md'
const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts dominar as principais
            tecnologias e entrar mais rapido nas empresas mais desejadas.
          </Title>
          <Button
            title="Começar agora"
            variant="secondary"
            onClick={() => null}
          />
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubTitleLogin>Faça seu login e make the change</SubTitleLogin>
            <form action="">
              <Input placeholder="E-mail" leftIcon={<MdEmail/>}/>
              <Input placeholder="Senha" type="password" leftIcon={<MdLock/>} />
              <Button title="Entrar" variant="secondary" />
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Criar conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};
export default Home;
