import { Tab, ListThemeDateState } from "@flescompany/design-system";
import styled from "styled-components";
import UserBookmark from "./userBookmark";
import UserBuy from "./userBuy";
import Userinfo from "./userInfo";
import UserMsg from "./userMsg";

const Container = styled.div`
  padding: 0 15px;
`;
const Content = styled.div`
  .tab {
    height: 60px;
    .tabBody {
      margin-top: 30px;
    }
  }
`;
export default function User() {
  return (
    <Container id="User">
      <Content className="User--content">
        <Tab onClick={() => {}} position="left">
          <Userinfo label="내사주" />
          <UserMsg label="메세지함" />
          <UserBuy label="구매내역" />
          <UserBookmark label="북마크" />
        </Tab>
      </Content>
    </Container>
  );
}
