import { BannerInText, CardWithImg, Card } from "@flescompany/design-system";
import styled from "styled-components";
import MenIcon from "../../assets/icon_user_men.png";
import WomenIcon from "../../assets/icon_user_women.png";

const Container = styled.div``;
const Header = styled.div`
  .headerBanner {
    height: 180px;
    .bannerInText {
      padding: 0 35px;
      color: white;

      .titleArea {
        > * {
          margin: 10px 0;
        }
      }
    }
  }
`;
const Content = styled.div`
  padding: 0 15px;
  .contentTop {
    margin-top: 66px;
    .cardWithImg {
      .cardTopWithImg {
        .cardTopWithImg--center {
          margin-top: -36px;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      .cardMid {
        padding-top: 56px;
        h1,
        p {
          padding: 0;
          margin: 10px 0;
        }
        h1 {
          font-size: 24px;
          font-weight: bold;
        }
      }
    }
  }
  .contentBody {
    margin-top: 50px;
    > * {
      margin-bottom: 30px;
    }
    .cardMid {
      h1,
      p {
        padding: 0 1rem;
        margin: 10px 0;
      }
    }
    .cardTop {
      color: #ffb74b;
    }
  }
`;
export default function DailyFortune() {
  function getDateFormat(date) {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return month + "월 " + day + "일";
  }
  var date = getDateFormat(new Date());
  return (
    <Container id="dailyFortune">
      <Header className="dailyFortuneHeader">
        <div className="headerBanner">
          <BannerInText
            backgroundColor="#ffb74b"
            lowerTitle="자신의 실수를 인정하고 빨리 고쳐야합니다."
            title="오늘의 운세"
            upperTitle={date}
          />
        </div>
      </Header>
      <Content className="dailyFortuneContent">
        <div className="contentTop">
          <CardWithImg
            avatar={{
              alt: "Men",
              src: `${MenIcon}`,
            }}
            cardMidTitle="홍길동"
            cardMidcontent="1999.09.09(양력) / 14시 20분 / 미혼"
            position="center"
            textAlign="center"
          />
        </div>
        <div className="contentBody">
          <Card
            cardMidTitle="Card Mid Title"
            cardMidcontent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto culpa eaque tenetur, reiciendis, deserunt inventore quas et repudiandae maiores ullam voluptate."
            cardToptitle="Card Top Title"
            position="left"
            textAlign="left"
          />
          <Card
            cardMidTitle="Card Mid Title"
            cardMidcontent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto culpa eaque tenetur, reiciendis, deserunt inventore quas et repudiandae maiores ullam voluptate."
            cardToptitle="Card Top Title"
            position="left"
            textAlign="left"
          />
        </div>
      </Content>
    </Container>
  );
}
