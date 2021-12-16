import { ListThemeAccordion } from "@flescompany/design-system";
import styled from "styled-components";
const Container = styled.div`
  padding: 30px 15px;
`;
const Header = styled.h1`
  padding-bottom: 20px;
  color: ${({ theme }) => theme.colors.gray22};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;
const Content = styled.div`
  border-top: 2px solid ${({ theme }) => theme.colors.primary};

  #listThemeAccordion {
    .accordion-header {
      height: 50px;
      h2 {
        font-size: 14px;
      }
    }
  }
`;
export default function Faq() {
  return (
    <Container>
      <Header>운세서비스 FAQ</Header>
      <Content className="FaqContent">
        <ListThemeAccordion
          accordionData={[
            {
              content:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate possimus labore, hic temporibus velit dicta earum suscipit mmodi eum enim atque at? Et perspiciatis dolore iurevoluptatem.",
              title: "Section 1",
            },
            {
              content: "Lorem ipsum dolor,",
              title: "Section 2",
            },
            {
              content:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate possimus labore, hic temporibus velit dicta earum suscipit mmodi eum enim atque at? Et perspiciatis dolore iurevoluptatem.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate possimus labore, hic temporibus velit dicta earum suscipit mmodi eum enim atque at? Et perspiciatis dolore iurevoluptatem.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate possimus labore, hic temporibus velit dicta earum suscipit mmodi eum enim atque at? Et perspiciatis dolore iurevoluptatem.",
              title: "Section 3",
            },
          ]}
        />
      </Content>
    </Container>
  );
}
