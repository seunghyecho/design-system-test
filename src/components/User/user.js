import { Tab, ListThemeDateState } from "@flescompany/design-system";
import styled from "styled-components";
import Userinfo from "./userInfo";
import UserMsg from "./userMsg";
import UserBuy from "./userBuy";
import UserBookmark from "./userBookmark";

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
    <Container id="user">
      <Content className="userContent">
        <div className="contentTab">
          <Tab onClick={() => {}} position="left">
            <Userinfo label="내사주" />
            <UserMsg label="메세지함" />
            <UserBuy label="구매내역" />
            <UserBookmark label="북마크" />
          </Tab>
        </div>
      </Content>
    </Container>
  );
}
