import styled from "styled-components";
import DailyFortune from "../components/home/dailyFortune";
import Home from "../components/home/home";
const Container = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
`;
export default function Body() {
  return (
    <Container id="body">
      {/* <Home /> */}
      <DailyFortune />
    </Container>
  );
}
