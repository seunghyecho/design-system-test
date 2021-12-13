import {
  BannerInTextAndImg,
  CardNumberFormatD,
  Textarea,
  Checkbox,
} from "@flescompany/design-system";
import styled from "styled-components";
import bgAttendance from "../../assets/bg_attandacnce.png";
const Container = styled.div`
  padding: 30px 15px;
`;
const Header = styled.div`
  #Attendance--banner {
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
  .borderB {
  }
  #Attendance--calendar {
    p {
      font-size: 14px;
    }
  }
  #Attendance--talk {
    width: 100%;
    textarea {
      width: 100%;
    }
    .checkbox-container {
      margin-left: auto;
    }
  }
`;
const Ptext = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;
export default function Attendance() {
  return (
    <Container>
      <Header className="Attendance--header">
        <div id="Attendance--banner">
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
      <Content>
        <div id="Attendance--calendar" className="borderB">
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
        <div id="Attendance--talk" className="borderB">
          <Ptext>TALK</Ptext>
          <Textarea
            onChange={() => {}}
            placeholder="TALK는 140자까지 입력 가능합니다."
            rows="8"
          />
          <Checkbox
            id="chkAnonymous"
            label="익명으로 쓰기"
            onChange={() => {}}
          />
        </div>
      </Content>
    </Container>
  );
}
