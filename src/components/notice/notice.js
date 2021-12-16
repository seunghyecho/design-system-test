import { Tab, ListThemeDateState } from "@flescompany/design-system";
import styled from "styled-components";
import NoticeAll from "./noticeAll";
import NoticeOnly from "./noticeOnly";
import NoticeEvent from "./noticeEvent";

const Container = styled.div`
  padding: 30px 15px;
`;
const Header = styled.h1`
  padding-bottom: 20px;
  color: ${({ theme }) => theme.colors.gray22};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.33;
  span {
    color: #002ab2;
  }
`;
const Content = styled.div``;
export default function Notice() {
  return (
    <Container id="Notice">
      <Header className="NoticeHeader">
        헬로우운세의 <span>소식과</span>
        <br />
        <span>이벤트</span>를 알려드립니다.
      </Header>
      <Content className="NoticeContent">
        <Tab onClick={() => {}} position="left">
          <NoticeAll label="전체" />
          <NoticeOnly label="공지사항" />
          <NoticeEvent label="이벤트" />
        </Tab>
      </Content>
    </Container>
  );
}
