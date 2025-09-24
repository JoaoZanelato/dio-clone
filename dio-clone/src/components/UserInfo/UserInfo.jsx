import { Container, NameText, Progress, UserPicture } from "./styles";

const UserInfo = ({ name, img, percentual }) => {
  return (
    <Container>
      <UserPicture src={img}>
        <NameText>{name}</NameText>
        <Progress percentual={percentual} />
      </UserPicture>
    </Container>
  );
};
export { UserInfo };
