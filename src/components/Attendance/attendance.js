import {
  BannerInTextAndImg,
  CardNumberFormatD,
  Textarea,
  Checkbox,
  Button,
  Tab,
} from "@flescompany/design-system";
import styled from "styled-components";
import bgAttendance from "../../assets/img_attandacnce.png";
const Container = styled.div`
  font-size: 14px;
`;
const Header = styled.div`
  padding: 30px 15px 0;

  .headerBanner {
    .bannerInTextAndImg {
      border-radius: 5px;
      :first-child {
        padding-left: 20px;
        h1,
        h5 {
          margin: 10px 0;
        }
        h1 {
          font-size: 18px;
        }
        h5 {
          font-size: 12px;
        }
      }
      img {
        padding: 13px 13px 0 0;
      }
    }
  }
`;
const Content = styled.div`
  .contentCalendar {
    padding: 0 15px 40px 15px;
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
    p {
      font-size: 14px;
    }
  }
  .contentTalk {
    padding: 40px 15px;
    position: relative;
    width: 100%;

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

    textarea {
      margin-top: 20px;
      width: 100%;
    }
    .noticeT {
      margin: 30px 0;
      p {
        font-size: 14px;
        line-height: 1.71;
        letter-spacing: -0.14px;
      }
    }
    ul {
      color: #666;
      li {
        line-height: 1.71;
        letter-spacing: -0.14px;
      }
    }
    .checkbox-container {
      margin-top: 9px;
      label {
        justify-content: flex-end;
      }
    }

    .getCoinBtn {
      width: 100%;

      .outline,
      .borderRadius5 {
        width: 100%;
        height: 50px;
        color: #ffffff;
        background-color: #ffb74b;
      }
    }
  }
  .contentReply {
    padding: 40px 15px;
  }
`;
const Ptext = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;
export default function Attendance() {
  return (
    <Container id="attendance">
      <Header className="attendanceHeader">
        <div className="headerBanner">
          <BannerInTextAndImg
            backgroundColor="#ffc400"
            color="#ffffff"
            imgUrl={bgAttendance}
            upperTitle=""
            title="출석체크"
            lowerTitle="코인 받아가세요!"
          />
        </div>
      </Header>
      <Content className="attendanceContent">
        <div className="contentCalendar borderB">
          <CardNumberFormatD
            color="#ff0000"
            numberNextContents="코인"
            numberPrevContents="이달의 적립코인 : "
            putNum={999}
            textAlign="right"
          />
          <div>
            <p style={{ lineHeight: "1.5", fontSize: "14px" }}>
              오늘의 운세 확인시 자동으로 출석 체크 됩니다. <br />
              매일 50코인이 적립되며,{" "}
              <span style={{ color: "#002ab2", fontWeight: "bold" }}>
                5일 15일 30일 연속접속 시 추가적으로 100코인이 적립
              </span>
              됩니다.{" "}
            </p>
          </div>
        </div>
        <div className="contentTalk borderB">
          <Ptext>TALK</Ptext>
          <Textarea
            onChange={() => {}}
            placeholder="TALK는 140자까지 입력 가능합니다."
            rows="8"
            cols=""
          />
          <Checkbox
            id="chkAnonymous"
            label="익명으로 쓰기"
            onChange={() => {}}
          />
          <div className="noticeT">
            <ul>
              <li>
                출석을 통해 매일 100 코인 씩 무료로 적립하실 수 있습니다.(1일
                1회)
              </li>
              <li>
                말일에 표시된 코인은 다음 달 1일 일괄 적립되어 사용 가능합니다.
              </li>
              <li>
                진정성없는 오늘의 톡은 삭제될 수 있으며, 코인 적립도 받을 수
                없습니다.
              </li>
            </ul>
          </div>
          <div className="noticeT">
            <Ptext>오늘의 TALK 좋은예</Ptext>
            <ul>
              <li>사랑받고 싶다면 사랑하라 .</li>
              <li>나만이 내 인생을 바꿀 수 있다.</li>
              <li>실천이 말보다 낫다 .</li>
              <li>덜 약속하고 더 해주어라 .</li>
              <li>큰 희망이 큰 사람을 만든다.</li>
            </ul>
          </div>
          <div className="getCoinBtn">
            <Button
              appearance="borderRadius5"
              label="오늘의 TALK쓰고 코인받기"
            />
          </div>
        </div>
        <div className="contentReply">
          <Tab
            TabArr={[
              {
                content:
                  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet molestiae dolorem enim nostrum temporibus illo aperiam non deserunt, at, reiciendis mollitia vero dicta.",
                title: "실시간 TALK",
              },
              {
                content: "Lorem ipsum dolor,",
                title: "베스트 TALK",
              },
              {
                content:
                  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet molestiae dolorem enim nostrum temporibus illo aperiam non deserunt, at, reiciendis mollitia vero dicta.",
                title: "나의 TALK",
              },
            ]}
            onClick={() => {}}
            position="left"
          />
        </div>
      </Content>
    </Container>
  );
}
