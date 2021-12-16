import { Tab } from "@flescompany/design-system";
import styled from "styled-components";
import QuestionApply from "./questionApply";
import QuestionAnswer from "./questionAnswer";

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
export default function Question({ label }) {
  return (
    <Container id="question">
      <Header className="questionHeader">
        문의하신 내용은
        <br />
        <span>24시간이내</span>에 답변해드립니다.
      </Header>
      <Content className="questionContent">
        <div className="contentTab">
          <Tab onClick={() => {}} position="left">
            <QuestionApply label="문의" />
            <QuestionAnswer label="내 질문" />
          </Tab>
        </div>
      </Content>
    </Container>
  );
}
