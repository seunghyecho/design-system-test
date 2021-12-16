import styled from "styled-components";
import logo from "../../assets/logo.png";
const Container = styled.div`
  text-align: center;
`;
export default function Intro() {
  return (
    <Container id="Intro">
      <img src={logo} alt={logo} />
    </Container>
  );
}
