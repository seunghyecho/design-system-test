import {
  BannerInTextAndImg,
  InputWithBtn,
  NumberFormatDigits,
  Table,
} from "@flescompany/design-system";
import styled from "styled-components";
import imgRecommend from "../../assets/img_recommend.png";
import iconRecommend from "../../assets/m_main_free.png";
const Container = styled.div`
  font-size: 14px;
`;
const Header = styled.div`
  padding: 30px 15px 40px;
  position: relative;

  &.borderB {
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 10px;
      background-color: #f9f9f9;
    }
  }

  .headerBanner {
    .bannerInTextAndImg {
      border-radius: 5px;
      :first-child {
        padding-left: 20px;
        h1,
        h5 {
          margin: 10px 0;
          font-size: 18px;
        }
      }
      img {
        padding: 0;
      }
    }
  }

  .headerDescription {
    margin-top: 20px;
    color: #666;
    span {
      color: #ff0000;
      font-weight: bold;
      line-height: 1.71;
      letter-spacing: -0.14px;
    }
  }
`;
const Content = styled.div`
  padding: 0 15px;

  > * {
    margin: 40px 0;
  }

  .contentIdCopy,
  .contentIdSubmit {
    .inputWithBtn--full {
      border: none;
      height: 40px;

      input {
        border: 1px solid #eee;
        border-radius: 0;
      }
      button {
        margin-left: 12px;
        width: 100px;
        border: 1px solid #ffb74b;
      }
    }
  }

  .contentCard {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 140px;
    background-color: #f9f9f9;
    border-radius: 3px;
    img {
      margin-right: 20px;
      width: 30px;
      height: 30px;
    }
  }
`;
const Ptext = styled.p`
  margin-bottom: 20px;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;
export default function Recommend() {
  return (
    <Container id="recommend">
      <Header className="recommendHeader borderB">
        <div className="headerBanner">
          <BannerInTextAndImg
            backgroundColor="#ffc400"
            color="#ffffff"
            imgUrl={imgRecommend}
            upperTitle=""
            title="????????? ????????????"
            lowerTitle="????????? ??????!"
          />
        </div>
        <div className="headerDescription">
          <ul>
            <li>
              ???????????? ???????????? ?????? ?????? <span>1,000 ?????????</span> ??????
            </li>
            <li>
              10??? ???????????? <span>10,000 ?????????</span> ????????????
            </li>
          </ul>
        </div>
      </Header>
      <Content className="recommendContent">
        <div className="contentIdCopy">
          <Ptext>??? ?????????</Ptext>
          <InputWithBtn
            borderColor="#eeeeee"
            character="??????"
            onChange={() => {}}
            onClick={function noRefCheck() {}}
            placeholder="hong123@Kakao.com"
            state="full"
          />
        </div>
        <div className="contentIdSubmit">
          <Ptext>????????? ??????</Ptext>
          <InputWithBtn
            borderColor="#eeeeee"
            character="??????"
            onChange={() => {}}
            onClick={function noRefCheck() {}}
            placeholder="???????????? ??????????????????"
            state="full"
          />
        </div>
        <div className="contentCard">
          <img src={iconRecommend} alt="" />
          <div className="content-card-comment">
            <p>
              ?????? <NumberFormatDigits putNum={9} />??? ?????????????????????
            </p>
            <p>
              (????????? ?????????????????? <NumberFormatDigits putNum={9} />???
              ??????????????????)
            </p>
          </div>
        </div>
        <div className="contentTable">
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
        </div>
      </Content>
    </Container>
  );
}
