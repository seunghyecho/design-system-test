import styled from "styled-components";
import Home from "../components/home/home";
const Container = styled.div`
  margin-top: 60px;
  margin-bottom: 60px;
`;
export default function Body() {
  return (
    <Container id="body">
      <Home />
    </Container>
  );
}
