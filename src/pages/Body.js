import {
  InlineLink,
  CarouselInTextImg,
  ArticleTitle,
  ButtonGroup,
  Grid,
  ListThemeHighlight,
  ListThemeTag,
} from "@flescompany/design-system";
import styled from "styled-components";
import carousel01 from "../assets/carousel01.png";
import mainFree from "../assets/m_main_free.png";
import mainOrient from "../assets/m_main_orient.png";
import mainLife from "../assets/m_main_life.png";
import mainTheme from "../assets/m_main_theme.png";
import mainYears from "../assets/m_main_years.png";
import mainWest from "../assets/m_main_west.png";

const Container = styled.div``;
export default function Body() {
  return (
    <Container id="home">
      <div id="home_luckBar">
        <InlineLink
          backgroundColor="#ff9900"
          color="#ffffff"
          label="오늘의 운세"
          onClick={function noRefCheck() {}}
        />
      </div>
      <div id="home_carousel">
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
      <div id="home_hashtag" className="anchor_style">
        <ArticleTitle
          action="더보기"
          onClick={function noRefCheck() {}}
          subTitle=""
          title="해시태그"
        />
        <ButtonGroup
          buttonArr={["Menu1", "Menu2", "Menu3", "Menu4"]}
          onClick={function noRefCheck() {}}
          width="auto"
        />
      </div>
      <div id="home_luckBtn">
        <Grid
          grids={[
            {
              name: "무료할인",
              url: `${mainFree}`,
            },
            {
              name: "동양운세",
              url: `${mainOrient}`,
            },
            {
              name: "생활운세",
              url: `${mainLife}`,
            },
            {
              name: "인기테마",
              url: `${mainTheme}`,
            },
            {
              name: "월간신년",
              url: `${mainYears}`,
            },
            {
              name: "서양운세",
              url: `${mainWest}`,
            },
          ]}
          onGrid={() => {}}
          width="3"
        />
      </div>
      <div id="home_luckList" className="anchor_style">
        <ArticleTitle
          action="ACTION BUTTON"
          onClick={function noRefCheck() {}}
          subTitle="SUB TITLE"
          title="TITLE"
        />
        <ListThemeHighlight
          listArr={[
            {
              accumulateCoin: 9999,
              coin: 999,
              listSubTitle: "listSubTitle",
              listTitle: "listTitle",
            },
            {
              accumulateCoin: 9999,
              coin: 999,
              listSubTitle: "listSubTitle",
              listTitle: "listTitle",
            },
          ]}
          onClick={function noRefCheck() {}}
        />
      </div>
      <div id="home_themeList" className="anchor_style">
        <ArticleTitle
          action="ACTION BUTTON"
          onClick={function noRefCheck() {}}
          subTitle="SUB TITLE"
          title="TITLE"
        />
        <ListThemeTag
          listArr={[
            {
              listSubTitle: "List SubTitle",
              listTitle: "List Title",
            },
            {
              listSubTitle: "List SubTitle",
              listTitle: "List Title",
            },
            {
              listSubTitle: "List SubTitle",
              listTitle: "List Title",
            },
          ]}
        />
      </div>
      <div id="home_freeList">
        <ArticleTitle
          action="ACTION BUTTON"
          onClick={function noRefCheck() {}}
          subTitle="SUB TITLE"
          title="TITLE"
        />
        <ListThemeHighlight
          listArr={[
            {
              accumulateCoin: 9999,
              coin: 999,
              listSubTitle: "listSubTitle",
              listTitle: "listTitle",
            },
            {
              accumulateCoin: 9999,
              coin: 999,
              listSubTitle: "listSubTitle",
              listTitle: "listTitle",
            },
          ]}
          onClick={function noRefCheck() {}}
        />
      </div>
      <div id="home_hotList">
        <ArticleTitle
          action="ACTION BUTTON"
          onClick={function noRefCheck() {}}
          subTitle="SUB TITLE"
          title="TITLE"
        />
        <ListThemeHighlight
          listArr={[
            {
              accumulateCoin: 9999,
              coin: 999,
              listSubTitle: "listSubTitle",
              listTitle: "listTitle",
            },
            {
              accumulateCoin: 9999,
              coin: 999,
              listSubTitle: "listSubTitle",
              listTitle: "listTitle",
            },
          ]}
          onClick={function noRefCheck() {}}
        />
      </div>
    </Container>
  );
}
