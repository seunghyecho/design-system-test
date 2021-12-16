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

  #Recommend--banner {
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

  .header-description {
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
    }
  }

  .content-idCopy {
    .inputWithBtn--full {
      button {
        border: 1px solid #ffb74b;
      }
    }
  }
  .content-idSubmit {
    .inputWithBtn--full {
      button {
        background-color: #ffb74b;
        color: #ffffff;
      }
    }
  }
  .content-card {
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
    <Container id="Recommend">
      <Header className="RecommendHeader borderB">
        <div id="Recommend--banner">
          <BannerInTextAndImg
            backgroundColor="#ffc400"
            color="#ffffff"
            imgUrl={imgRecommend}
            upperTitle=""
            title="추천인 등록하고"
            lowerTitle="포인트 얻자!"
          />
        </div>
        <div className="header-description">
          <ul>
            <li>
              추천인과 추천받은 사람 모두 <span>1,000 포인트</span> 적립
            </li>
            <li>
              10명 추천마다 <span>10,000 포인트</span> 추가적립
            </li>
          </ul>
        </div>
      </Header>
      <Content className="RecommendContent">
        <div className="content-idCopy">
          <Ptext>내 아이디</Ptext>
          <InputWithBtn
            borderColor="#eeeeee"
            character="복사"
            onChange={() => {}}
            onClick={function noRefCheck() {}}
            placeholder="hong123@Kakao.com"
            state="full"
          />
        </div>
        <div className="content-idSubmit">
          <Ptext>추천인 입력</Ptext>
          <InputWithBtn
            borderColor="#eeeeee"
            character="등록"
            onChange={() => {}}
            onClick={function noRefCheck() {}}
            placeholder="추천인을 입력해주세요"
            state="full"
          />
        </div>
        <div className="content-card">
          <img src={iconRecommend} alt="" />
          <div className="content-card-comment">
            <p>
              현재 <NumberFormatDigits putNum={9} />명 추천하셨습니다
            </p>
            <p>
              (포인트 추가지급까지 <NumberFormatDigits putNum={9} />명
              남으셨습니다)
            </p>
          </div>
        </div>
        <div className="content-table">
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
