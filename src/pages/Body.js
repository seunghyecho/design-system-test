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
          onClickBullets={function noRefCheck() {}}
          slideArr={[
            "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
            "https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80",
            "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80",
            "https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80",
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
