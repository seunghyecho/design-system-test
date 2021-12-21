import { Menu } from "@flescompany/design-system";
import styled from "styled-components";
const Container = styled.div`
  padding: 30px 15px;
`;
const Content = styled.div`
  div {
    box-shadow: none;
  }
  .contentMyInfo,
  .contentEvent,
  .contentCs {
    margin: 30px 0;
    &:first-child {
      margin: 0;
    }
    > div {
      border-bottom: 1px solid #eee;
      > div {
        margin: 0;
        .dropdown-header {
          font-size: ${({ theme }) => theme.fontSizes.small};
          font-weight: ${({ theme }) => theme.fontWeights.regular};
        }
      }
    }
  }
`;
const Ptext = styled.p`
  height: 35px;
  border-bottom: 2px solid #ffb74b;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;
export default function Set() {
  return (
    <Container id="set">
      <Content className="setContent">
        <div className="contentMyInfo">
          <Ptext>내 정보</Ptext>
          <Menu
            menuArr={[
              {
                header: "출석체크",
                id: 1,
                labels: [],
              },
            ]}
            onClick={() => {}}
          />
          <Menu
            menuArr={[
              {
                header: "코인충전",
                id: 2,
                labels: [],
              },
            ]}
            onClick={() => {}}
          />
          <Menu
            menuArr={[
              {
                header: "메세지함",
                id: 3,
                labels: [],
              },
            ]}
            onClick={() => {}}
          />
          <Menu
            menuArr={[
              {
                header: "쿠폰함",
                id: 4,
                labels: [],
              },
            ]}
            onClick={() => {}}
          />
        </div>
        <div className="contentEvent">
          <Ptext>이벤트</Ptext>
          <Menu
            menuArr={[
              {
                header: "추천인 이벤트",
                id: 1,
                labels: [],
              },
            ]}
            onClick={() => {}}
          />
          <Menu
            menuArr={[
              {
                header: "이벤트",
                id: 2,
                labels: [],
              },
            ]}
            onClick={() => {}}
          />
          <Menu
            menuArr={[
              {
                header: "이벤트 쿠폰등록",
                id: 3,
                labels: [],
              },
            ]}
            onClick={() => {}}
          />
        </div>
        <div className="contentCs">
          <Ptext>고객센터</Ptext>
          <Menu
            menuArr={[
              {
                header: "공지사항",
                id: 1,
                labels: [],
              },
            ]}
            onClick={() => {}}
          />
          <Menu
            menuArr={[
              {
                header: "1 : 1 문의하기",
                id: 2,
                labels: [],
              },
            ]}
            onClick={() => {}}
          />
          <Menu
            menuArr={[
              {
                header: "자주 묻는 질문 FAQ",
                id: 3,
                labels: [],
              },
            ]}
            onClick={() => {}}
          />
        </div>
      </Content>
    </Container>
  );
}
