import styled from "styled-components";
import { ListThemeAccordion, Empty } from "@flescompany/design-system";
const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
`;
const UserMsgHeader = styled.div`
  padding: 30px 0;
`;
const Header = styled.h1`
  color: ${({ theme }) => theme.colors.gray22};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;
const UserMsgContent = styled.div`
  border-top: 2px solid ${({ theme }) => theme.colors.primary};
  .accordion-header {
    height: 50px;
  }
`;
export default function UserMsg() {
  const accordionData = [
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
  ];
  return (
    <Container id="UserMsg">
      <UserMsgHeader className="UserMsg--header">
        <Header>메세지함</Header>
      </UserMsgHeader>
      <UserMsgContent className="UserMsg--content">
        {accordionData.length > 0 ? (
          <ListThemeAccordion accordionData={accordionData} />
        ) : (
          <Empty />
        )}
      </UserMsgContent>
    </Container>
  );
}
