import styled from "styled-components";
import Home from "../components/home/home";
const Container = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
`;
export default function Body() {
  return (
    <Container id="body">
      <Home />
    </Container>
  );
}
