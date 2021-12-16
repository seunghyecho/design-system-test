import {
  InputSearch,
  ButtonGroup,
  ListThemeTag,
} from "@flescompany/design-system";
import styled from "styled-components";
import noImage from "../../assets/no_image.jpeg";

const Container = styled.div`
  padding: 0 15px;
`;
const Content = styled.div`
  padding-top: 30px;
  > * {
    margin: 30px 0;
    &:first-child {
      margin: 0;
    }
  }
  .contentSearch {
    height: 48px;
  }
`;
const Ptext = styled.p`
  padding-bottom: 20px;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;
export default function SearchContents() {
  return (
    <Container id="searchContents">
      <Content className="searchContentsContent">
        <div className="contentSearch">
          <InputSearch
            onChange={() => {}}
            onClick={function noRefCheck() {}}
            placeholder="키워드 입력"
            state="full"
          />
        </div>
        <div className="contentTag">
          <Ptext>해시태그</Ptext>
          <ButtonGroup
            buttonArr={[
              "Menu1",
              "Menu2",
              "Menu3",
              "Menu4",
              "Menu1",
              "Menu2",
              "Menu3",
              "Menu4",
            ]}
            onClick={() => {}}
            width="quarter"
          />
        </div>
        <div className="contentList">
          <ListThemeTag
            listArr={[
              {
                commentTagNum: 999,
                heartTagNum: 999,
                img: `${noImage}`,
                listSubTitle: "그 사람에게 나의 잔삼울 어떻게 전달...",
                listTitle: "List Title",
              },
              {
                commentTagNum: 999,
                heartTagNum: 999,
                img: `${noImage}`,
                listSubTitle: "그 사람에게 나의 잔삼울 어떻게 전달...",
                listTitle: "List Title",
              },
              {
                commentTagNum: 999,
                heartTagNum: 999,
                img: `${noImage}`,
                listSubTitle: "그 사람에게 나의 잔삼울 어떻게 전달...",
                listTitle: "List Title",
              },
            ]}
          />
        </div>
      </Content>
    </Container>
  );
}
