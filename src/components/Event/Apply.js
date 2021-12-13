import {
  BannerInTextAndImg,
  CardNumber,
  Input,
  Button,
} from "@flescompany/design-system";
import styled from "styled-components";
import imgApply from "../../assets/img_apply.png";
import bgApply from "../../assets/bg_apply.png";
const Container = styled.div`
  font-size: 14px;
`;
const Header = styled.div`
  padding: 30px 15px 0;

  #Apply--banner {
    .bannerInTextAndImg {
      background-image: url(${bgApply});
      background-size: 100% 120px;
      background-repeat: no-repeat;
      background-position: center;
      border-radius: 5px;
      :first-child {
        padding-left: 20px;
        h1,
        h5 {
          margin: 10px 0;
          font-size: 18px;
          font-weight: bold;
        }
      }
      img {
        padding: 13px 13px 0 0;
      }
    }
  }
`;
const Content = styled.div`
  padding: 0 15px;

  h1 {
    font-size: 20px;
    line-height: 1.33;
    span {
      color: #002ab2;
    }
  }
  p {
    font-size: 12px;
    line-height: 1.71;
    letter-spacing: -0.14px;
  }

  .content-userCoin {
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

  .content-applyCoupon {
    display: flex;
    height: 40px;
    line-height: 40px;
    span {
      display: inline-block;
      color: #666666;
      padding: 0 2px;
    }
    .input--auto {
      border: 1px solid #eeeeee;
      font-size: 20px;
      text-align: center;
      &:focus {
        border: 1px solid #ff9900;
      }
    }
  }
  .content-notice {
    ul {
      li {
        line-height: 1.71;
        letter-spacing: -0.14px;
        color: #666666;
        span {
          color: #002ab2;
        }
      }
    }
  }

  .content-applyBtn {
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

export default function Apply() {
  return (
    <Container id="Apply">
      <Header className="Apply--header">
        <div id="Apply--banner">
          <BannerInTextAndImg
            backgroundColor="#ffc400"
            color="#ffffff"
            imgUrl={imgApply}
            upperTitle=""
            title="헬로우운세"
            lowerTitle="이벤트 쿠폰"
          />
        </div>
      </Header>
      <Content className="Apply--content">
        <Form>
          <div className="content-description">
            <h1>
              헬로우운세 <span>이벤트 쿠폰</span>이란?
            </h1>
            <p>
              각종 이벤트, 프로모션을 통해 지급받으신 쿠폰입니다. 이벤트 쿠폰의
              쿠폰번호를 등록하면 헬로우코인으로 적립되어 사용할 수 있습니다.
            </p>
          </div>
          <div className="content-userCoin">
            <CardNumber
              backgroundColor="#f9f9f9"
              color="#f61616"
              numberNextContents="코인입니다."
              numberPrevContents="홍길동님의 현재 헬로우 코인 잔액은"
              position="center"
              putNum={1234567890}
              textAlign="center"
              title=""
            />
          </div>
          <div className="content-applyCoupon">
            <Input
              onChange={() => {}}
              placeholder=""
              state="auto"
              maxLength="4"
            />
            <span>-</span>
            <Input
              onChange={() => {}}
              placeholder=""
              state="auto"
              maxLength="4"
            />
            <span>-</span>
            <Input
              onChange={() => {}}
              placeholder=""
              state="auto"
              maxLength="4"
            />
            <span>-</span>
            <Input
              onChange={() => {}}
              placeholder=""
              state="auto"
              maxLength="4"
            />
          </div>
          <div className="content-notice">
            <ul>
              <li>
                이벤트 쿠폰의 쿠폰번호를 등록하면 헬로우코인으로 적립되어 사용
                할 수 있습니다.{" "}
                <span>(유효기간 내 등록하셔야 사용가능합니다)</span>
              </li>
              <li>
                이벤트 쿠폰은 1회에 한하여 등록이 가능하며, 이미 등록된 쿠폰은
                재사용 하실 수 없습니다.
              </li>
              <li>쿠폰 등록에 대한 문의는 고객센터를 이용해주세요.</li>
            </ul>
          </div>
          <div className="content-applyBtn">
            <Button appearance="borderRadius5" label="쿠폰등록" />
          </div>
        </Form>
      </Content>
    </Container>
  );
}
