import { ListThemeAccordion, Tab } from "@flescompany/design-system";
import styled from "styled-components";
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
export default function Question() {
  return (
    <Container id="Question">
      <Header className="Question--header">
        문의하신 내용은
        <br />
        <span>24시간이내</span>에 답변해드립니다.
      </Header>
      <Content className="Question--content">
        <Tab
          TabArr={[
            {
              content:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet molestiae dolorem enim nostrum temporibus illo aperiam non deserunt, at, reiciendis mollitia vero dicta.",
              title: "문의",
            },
            {
              content:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet .",
              title: "내 질문",
            },
          ]}
          onClick={() => {}}
          position="left"
        />
      </Content>
    </Container>
  );
}
