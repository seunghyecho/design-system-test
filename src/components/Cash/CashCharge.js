import {
  BannerInTextAndImg,
  Card,
  CheckedValue,
  ButtonGroup,
  Button,
} from "@flescompany/design-system";
import styled from "styled-components";
import bgCoin from "../../assets/bg_coin.png";
const Container = styled.div`
  padding: 30px 15px;
`;
const CashChargeHeader = styled.div`
  #CashCharge--banner {
    .bannerInTextAndImg {
      :first-child {
        padding-left: 20px;
      }
      border-radius: 5px;
      h1,
      h5 {
        margin: 10px 0;
      }
    }
  }
`;
const CashChargeContent = styled.div`
  #CashCharge--chargeWay {
    .buttonList--half {
      margin: 6px;
      width: calc(100% / 2 - 12px);
      .outline:hover {
        background-color: ${({ theme }) => theme.colors.gray22};
        color: ${({ theme }) => theme.colors.white};
      }
      .button {
        height: 40px;
        border-radius: 0;
        font-weight: ${({ theme }) => theme.fontWeights.bold};
      }
    }
  }
  #CashCharge--confirm {
    width: 100%;

    .outline,
    .borderRadius5 {
      width: 100%;
      height: 50px;
      color: #ffffff;
      background-color: #ffb74b;
    }
  }
`;
const Form = styled.form`
  > * {
    margin: 30px 0;
  }
`;
const Ptext = styled.p`
  margin-bottom: 20px;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;
const Span = styled.span`
  margin-bottom: 10px;
  display: block;
  text-align: right;
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

export default function CashCharge() {
  return (
    <Container id="CashCharge">
      <CashChargeHeader className="CashCharge--header">
        <div id="CashCharge--banner">
          <BannerInTextAndImg
            backgroundColor="#cccccc"
            color="#ffffff"
            imgUrl={bgCoin}
            upperTitle=""
            title="코인충전"
            lowerTitle="코인을 충전해주세요"
          />
        </div>
      </CashChargeHeader>
      <CashChargeContent className="CashCharge--content">
        <Form>
          <div id="CashCharge--card">
            <Ptext>남은 잔액</Ptext>
            {/* 컴포넌트만들기 */}
            <Card
              backgroundColor="#f9f9f9"
              contents="현재 헬로우 코인 잔액은 900,000코인입니다."
              position="center"
              textAlign="center"
              title=""
            />
          </div>
          <div id="CashCharge--charge">
            <Ptext>충전하기</Ptext>
            <CheckedValue
              labelArr={["11,000", "22,000", "33,000"]}
              spanText="원"
            />
            <Span>일만천원을 선택하셨습니다</Span>
          </div>
          <div id="CashCharge--chargeWay">
            <Ptext>충전방법</Ptext>
            <ButtonGroup
              buttonArr={[
                "신용카드",
                "실시간 계좌이체",
                "휴대폰",
                "문화상품권",
                "도서상품권",
              ]}
              onClick={() => {}}
              width="half"
            />
          </div>
          <div id="CashCharge--confirm">
            <Button appearance="borderRadius5" label="충전" />
          </div>
        </Form>
      </CashChargeContent>
    </Container>
  );
}
