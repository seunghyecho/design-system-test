import styled from "styled-components";
import logo from "../../assets/logo.png";
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;
export default function Intro() {
  return (
    <Container id="Intro">
      <img src={logo} alt={logo} />
    </Container>
  );
}
