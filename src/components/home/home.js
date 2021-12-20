import {
  InlineLink,
  CarouselInTextImg,
  ArticleTitle,
  ButtonGroup,
  Grid,
  ListThemeHighlight,
  ListThemeTag,
  GridImg,
} from "@flescompany/design-system";
import styled from "styled-components";
import carousel01 from "../../assets/carousel01.png";
import mainFree from "../../assets/m_main_free.png";
import mainOrient from "../../assets/m_main_orient.png";
import mainLife from "../../assets/m_main_life.png";
import mainTheme from "../../assets/m_main_theme.png";
import mainYears from "../../assets/m_main_years.png";
import mainWest from "../../assets/m_main_west.png";
import noImage from "../../assets/no_image.jpeg";

const Container = styled.div``;
const Content = styled.div`
  > * {
    padding-right: 15px;
    padding-left: 15px;
    padding-top: 28px;
    padding-bottom: 28px;
    position: relative;
  }
  .contentLuckBar,
  .contentCarousel {
    padding: 0;
  }
  .contentCarousel {
    height: 200px;

    > * {
      height: inherit !important;
    }
  }
  .contentContents {
    padding-top: 12px;
    padding-bottom: 12px;
  }
  .contentHashtag,
  .contentLuckList,
  .contentThemeList,
  .contentFreeList {
    border-bottom: 10px solid #f9f9f9;
  }
  .anchor a {
    color: #ff9900;
  }
`;
export default function Home() {
  return (
    <Container id="home">
      <Content className="homeContent">
        <div className="contentLuckBar">
          <InlineLink
            backgroundColor="#ffb74b"
            color="#ffffff"
            label="오늘의 운세"
            onClick={function noRefCheck() {}}
          />
        </div>
        <div className="contentCarousel">
          <CarouselInTextImg
            title="타로 운세가 1회 무료"
            upperTitle="유료운세를 무료로!"
            lowerTitle=""
            backgroundColor="#ff9900"
            color="#ffffff"
            onClickBullets={function noRefCheck() {}}
            slideArr={[
              `${carousel01}`,
              `${carousel01}`,
              `${carousel01}`,
              `${carousel01}`,
            ]}
          />
        </div>
        <div className="contentContents anchor">
          <ArticleTitle
            action="더보기"
            onClick={function noRefCheck() {}}
            subTitle="(39개의 테마)"
            title="고민없이 컨텐츠 찾기"
          />
          <ButtonGroup
            buttonArr={["Menu1", "Menu2", "Menu3", "Menu4"]}
            onClick={function noRefCheck() {}}
            width="quarter"
          />
        </div>
        <div className="contentHashtag anchor">
          <ArticleTitle
            action="수정하기"
            onClick={function noRefCheck() {}}
            subTitle="(10개의 해시태그)"
            title="관심 태그"
          />
          <ButtonGroup
            buttonArr={[
              "Menu0",
              "Menu1",
              "Menu2",
              "Menu3",
              "Menu4",
              "Menu5",
              "Menu6",
              "Menu7",
              "Menu8",
              "Menu9",
            ]}
            onClick={function noRefCheck() {}}
            width="auto"
          />
        </div>
        <div className="contentLuckMenu">
          <GridImg
            grids={[
              {
                url: `${mainFree}`,
                name: "무료할인",
              },
              {
                url: `${mainOrient}`,
                name: "동양운세",
              },
              {
                url: `${mainLife}`,
                name: "생활운세",
              },
              {
                url: `${mainTheme}`,
                name: "인기테마",
              },
              {
                url: `${mainYears}`,
                name: "월간신년",
              },
              {
                url: `${mainWest}`,
                name: "서양운세",
              },
            ]}
            onGrid={() => {}}
            width="3"
          />
        </div>
        <div className="contentLuckList anchor">
          <ArticleTitle
            action="더보기"
            onClick={function noRefCheck() {}}
            subTitle=""
            title="오늘의 운세"
          />
          <ListThemeHighlight
            listArr={[
              {
                img: `${noImage}`,
                accumulateCoin: 9999,
                coin: 999,
                listSubTitle: "한국 전통운세 비결로 보는 오늘의 운세",
                listTitle: "오늘의 운세",
              },
              {
                img: `${noImage}`,
                accumulateCoin: 9999,
                coin: 999,
                listSubTitle: "한국 전통운세 비결로 보는 오늘의 운세",
                listTitle: "오늘의 운세",
              },
            ]}
            onClick={function noRefCheck() {}}
          />
        </div>
        <div className="contentThemeList anchor">
          <ArticleTitle
            action="더보기"
            onClick={function noRefCheck() {}}
            subTitle=""
            title="많이 보는 테마"
          />
          <ListThemeTag
            listArr={[
              {
                listSubTitle: "그 사람에게 나의 잔삼울 어떻게 전달...",
                listTitle: "#내 마음을 받아줘",
                commentTagNum: 999,
                heartTagNum: 999,
                img: `${noImage}`,
              },
              {
                listSubTitle: "그 사람에게 나의 잔삼울 어떻게 전달...",
                listTitle: "#내 마음을 받아줘",
                commentTagNum: 999,
                heartTagNum: 999,
                img: `${noImage}`,
              },
              {
                listSubTitle: "그 사람에게 나의 잔삼울 어떻게 전달...",
                listTitle: "#내 마음을 받아줘",
                commentTagNum: 999,
                heartTagNum: 999,
                img: `${noImage}`,
              },
            ]}
          />
        </div>
        <div className="contentFreeList anchor">
          <ArticleTitle
            action="더보기"
            onClick={function noRefCheck() {}}
            subTitle=""
            title="유료운세가 1회 무료"
          />
          <ListThemeHighlight
            listArr={[
              {
                accumulateCoin: 9999,
                coin: 999,
                listSubTitle: "listSubTitle",
                listTitle: "listTitle",
                img: `${noImage}`,
              },
              {
                accumulateCoin: 9999,
                coin: 999,
                listSubTitle: "listSubTitle",
                listTitle: "listTitle",
                img: `${noImage}`,
              },
            ]}
            onClick={function noRefCheck() {}}
          />
        </div>
        <div className="contentHotList anchor">
          <ArticleTitle
            action="더보기"
            onClick={function noRefCheck() {}}
            subTitle=""
            title="주목! 요즘 뜨는 운세"
          />
          <ListThemeHighlight
            listArr={[
              {
                accumulateCoin: 9999,
                coin: 999,
                listSubTitle: "listSubTitle",
                listTitle: "listTitle",
                img: `${noImage}`,
              },
              {
                accumulateCoin: 9999,
                coin: 999,
                listSubTitle: "listSubTitle",
                listTitle: "listTitle",
                img: `${noImage}`,
              },
            ]}
            onClick={function noRefCheck() {}}
          />
        </div>
      </Content>
    </Container>
  );
}
