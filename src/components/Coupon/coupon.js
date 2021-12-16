import { Table } from "@flescompany/design-system";
import styled from "styled-components";

const Container = styled.div`
  padding: 30px 15px;
`;
const Header = styled.h1`
  padding-bottom: 20px;
  color: ${({ theme }) => theme.colors.gray22};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 1.33;
  span {
    color: #002ab2;
  }
`;
const Content = styled.div``;
export default function Coupon() {
  return (
    <Container id="Coupon">
      <Header className="CouponHeader">쿠폰함</Header>
      <Content className="CouponContent">
        <Table
          columns={[
            {
              accesor: "id",
              name: "Id",
            },
            {
              accesor: "name",
              name: "Name",
            },
            {
              accesor: "email",
              name: "Email",
            },
            {
              accesor: "phone",
              name: "Phone",
            },
            {
              accesor: "website",
              name: "Website",
            },
          ]}
        />
      </Content>
    </Container>
  );
}
