import {
  BannerInTextAndImg,
  Grid,
  ListThemeArrow,
  Pagination,
} from "@flescompany/design-system";
import styled from "styled-components";
import imgCounselor from "../../assets/img_counselor.png";
import noImage from "../../assets/no_image.jpeg";

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
  .listThemeArrow {
    .text-area {
      h2 {
        font-size: 14px;
      }
    }
  }
`;
export default function CaseList() {
  return (
    <Container id="CaseList">
      <Header className="CaseList--header">
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
      <Content className="CaseList--content">
        <div id="CaseList--grid">
          <Grid
            grids={[
              {
                name: "gridItem1",
                url: `${noImage}`,
              },
              {
                name: "gridItem2",
                url: `${noImage}`,
              },
              {
                name: "gridItem3",
                url: `${noImage}`,
              },
              {
                name: "gridItem4",
                url: `${noImage}`,
              },
            ]}
            onGrid={() => {}}
            width="4"
          />
        </div>
        <div id="CaseList--list">
          <ListThemeArrow
            listArr={[
              {
                img: `${noImage}`,
                listSubTitle: "",
                listTitle: "이 사람 돌아올까요?",
              },
              {
                img: `${noImage}`,
                listSubTitle: "",
                listTitle: "이 사람 돌아올까요?",
              },
            ]}
            onClick={() => {}}
          />
          <Pagination
            onChangePage={() => {}}
            pageArr={["1", "2", "3", "4", "5"]}
            position="center"
          />
        </div>
      </Content>
    </Container>
  );
}
