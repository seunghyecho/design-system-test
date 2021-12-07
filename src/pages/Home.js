import styled from "styled-components";
import Body from "./Body.js";
import { Header, Footer } from "@flescompany/design-system";
import tLogo from "../assets/t_logo.png";

const Container = styled.div``;

function Home() {
  return (
    <Container>
      <Header titleUrl={tLogo} />
      <Body />
      <Footer />
    </Container>
  );
}

export default Home;
