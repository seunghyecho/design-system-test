import { BannerInTextAndImg } from "@flescompany/design-system";
import styled from "styled-components";
import imgCounselor from "../../assets/img_counselor.png";
const Container = styled.div`
  padding: 0 15px;
`;
const Header = styled.div`
  padding: 30px 0 40px;
  position: relative;
  #Counselor--banner {
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
`;
const Content = styled.div`
  .tab {
    height: 60px;
    .tabBody {
      margin-top: 30px;
    }
  }
`;
export default function CounselorList() {
  return (
    <Container id="CounselorList">
      <Header className="CounselorList--header">
        <div id="Counselor--banner">
          <BannerInTextAndImg
            backgroundColor="#002AB2"
            color="#ffffff"
            imgUrl={imgCounselor}
            upperTitle=""
            title="상담문의"
            lowerTitle="060 - 600 - 8911"
          />
        </div>
      </Header>
      <Content className="CounselorList--content"></Content>
    </Container>
  );
}
