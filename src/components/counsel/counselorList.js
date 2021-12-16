import { BannerInTextAndImg, ListThemeBtn } from "@flescompany/design-system";
import styled from "styled-components";
import imgCounselor from "../../assets/img_counselor.png";
const Container = styled.div`
  padding: 0 15px;
`;
const Header = styled.div`
  padding: 30px 0 40px;
  position: relative;

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
`;
const Content = styled.div`
  .contentList {
    .listThemeBtn {
      .des {
        line-height: 1.67;
      }
    }
  }
`;
export default function CounselorList() {
  return (
    <Container id="counselorList">
      <Header className="counselorListHeader">
        <div className="headerBanner">
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
      <Content className="counselorListContent">
        <div className="contentList">
          <ListThemeBtn
            listArr={[
              {
                des: "이름풀이로 과거, 현재, 미래를 알고 삶의 방향도 바로 잡아 약초같은 삶을 살 수 있습니다.",
                img: "static/media/no_image.60e82241.jpeg",
                label: "상세보기",
                maxDialNum: "n",
                minDialNum: "n",
                phoneNum: "060-600-8911",
                title: "00번 홍길동",
              },
              {
                des: "이름풀이로 과거, 현재, 미래를 알고 삶의 방향도 바로 잡아 약초같은 삶을 살 수 있습니다.",
                img: "static/media/no_image.60e82241.jpeg",
                label: "상세보기",
                maxDialNum: "n",
                minDialNum: "n",
                phoneNum: "060-600-8911",
                title: "00번 홍길동",
              },
              {
                des: "이름풀이로 과거, 현재, 미래를 알고 삶의 방향도 바로 잡아 약초같은 삶을 살 수 있습니다.",
                img: "static/media/no_image.60e82241.jpeg",
                label: "상세보기",
                maxDialNum: "n",
                minDialNum: "n",
                phoneNum: "060-600-8911",
                title: "00번 홍길동",
              },
            ]}
          />
        </div>
      </Content>
    </Container>
  );
}
