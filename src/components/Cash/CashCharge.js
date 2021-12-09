import styled from "styled-components";
import { BannerInTextAndImg } from "@flescompany/design-system";
import carousel01 from "../../assets/carousel01.png";
const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
`;
const CashChargeHeader = styled.div``;
const CashChargeContent = styled.div``;

export default function CashCharge() {
  return (
    <Container id="CashCharge">
      <CashChargeHeader className="CashCharge--header"></CashChargeHeader>
      <CashChargeContent className="CashCharge--content">
        <BannerInTextAndImg
          backgroundColor="#cccccc"
          color="#ffffff"
          imgUrl={carousel01}
          upperTitle=""
          title="코인충전"
          lowerTitle="코인을 충전해주세요"
        />
      </CashChargeContent>
    </Container>
  );
}
