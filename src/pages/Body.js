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

const Container = styled.div``;
export default function Body() {
  return (
    <Container>
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

      <div id="home_hashtag">
        <ArticleTitle
          action="ACTION BUTTON"
          onClick={function noRefCheck() {}}
          subTitle="SUB TITLE"
          title="TITLE"
        />
        <ButtonGroup
          buttonArr={["Menu1", "Menu2", "Menu3", "Menu4"]}
          onClick={function noRefCheck() {}}
          width="auto"
        />
      </div>
      <div id="home_luckBtn">
        <InlineLink onClick={function noRefCheck() {}} />
        <Grid
          grids={[
            "gridItem1",
            "gridItem2",
            "gridItem3",
            "gridItem4",
            "gridItem5",
            "gridItem6",
          ]}
          onGrid={function noRefCheck() {}}
          width="3"
        />
      </div>
      <div id="home_luckList">
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
      <div id="home_themeList">
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
