import {
  BannerInTextAndImg,
  CardNumber,
  CheckedValue,
  ButtonGroup,
  Button,
} from "@flescompany/design-system";
import styled from "styled-components";
import bgCoin from "../../assets/img_coin.png";
const Container = styled.div`
  padding: 30px 15px;
`;
const Header = styled.div`
  .headerBanner {
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
const Content = styled.div`
  .contentChargeWay {
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
  .contentConfirm {
    width: 100%;

    .outline,
    .borderRadius5 {
      width: 100%;
      height: 50px;
      color: #ffffff;
      background-color: #ffb74b;
    }
  }

  .contentCard {
    .cardNumber {
      min-height: 80px;

      > :first-child {
        h1 {
          padding: 0;
        }
        min-height: 0;
      }
      > :last-child {
        min-height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        p {
          font-size: 12px;
        }
      }
    }
  }

  .contentCharge {
    .checkedValue {
      .radioCustom {
        margin-right: 10px;
      }
      > :last-child {
        margin: 20px 0 10px;
        height: 50px;
      }
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
    <Container id="cashCharge">
      <Header className="cashChargeHeader">
        <div className="headerBanner">
          <BannerInTextAndImg
            backgroundColor="#cccccc"
            color="#ffffff"
            imgUrl={bgCoin}
            upperTitle=""
            title="????????????"
            lowerTitle="????????? ??????????????????"
          />
        </div>
      </Header>
      <Content className="cashChargeContent">
        <Form>
          <div className="contentCard">
            <Ptext>?????? ??????</Ptext>
            <CardNumber
              backgroundColor="#f9f9f9"
              color="#f61616"
              numberNextContents="???????????????."
              numberPrevContents="?????? ????????? ?????? ?????????"
              position="center"
              putNum={1234567890}
              textAlign="center"
              title=""
            />
          </div>
          <div className="contentCharge">
            <Ptext>????????????</Ptext>
            <CheckedValue
              labelArr={["11,000", "22,000", "33,000"]}
              spanText="????????????"
            />
            <Span>??????????????? ?????????????????????</Span>
          </div>
          <div className="contentChargeWay">
            <Ptext>????????????</Ptext>
            <ButtonGroup
              buttonArr={[
                "????????????",
                "????????? ????????????",
                "?????????",
                "???????????????",
                "???????????????",
              ]}
              onClick={() => {}}
              width="half"
            />
          </div>
          <div className="contentConfirm">
            <Button appearance="borderRadius5" label="??????" />
          </div>
        </Form>
      </Content>
    </Container>
  );
}
