import { Button } from "../Button/Button.jsx";
import dio_logo from "../../assets/logo-dio.png";
import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  UserPicture,
  Wrapper,
} from "./styles.js";

const Header = ({ logado }) => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={dio_logo} alt="Logo da Dio" />
          {logado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>{" "}
            </>
          ) : null}
        </Row>
        <Row>
          {logado ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/127459520?v=4" />
          ) : (
            <>
              <MenuRight href="#"> Home</MenuRight>
              <Button title="Entrar" />
              <Button title="Cadastrar" />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };
