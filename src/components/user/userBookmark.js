import styled from "styled-components";
import { ListThemeHighlight, Card } from "@flescompany/design-system";
import noImage from "../../assets/no_image.jpeg";
const Container = styled.div``;
const Header = styled.div``;
const Content = styled.div`
  padding: 10px 0;

  .Card {
    margin: 20px 0;
    min-height: 100px;
    line-height: 100px;

    > :first-child {
      min-height: 0;

      > h1 {
        padding: 0;
      }
    }
    >: last-child {
      display: flex;
      justify-content: center;
      align-items: center;

      p {
        font-size: ${({ theme }) => theme.fontSizes.small};
        line-height: 1.57;
        letter-spacing: -0.14px;
      }
    }
  }
  .buttonGroup-list {
    .buttonList--auto {
      .button {
        padding: 2px 4px;
        font-size: ${({ theme }) => theme.fontSizes.xxsmall};
      }
    }
  }
`;
export default function UserBookmark({ label }) {
  return (
    <Container id="UserBookmark" label={label}>
      <Header className="UserBookmarkHeader"></Header>
      <Content className="UserBookmarkContent">
        <div id="UserBookmark--card">
          <Card
            backgroundColor="#f9f9f9"
            contents="자주 보는 운세를 북마크 해두시고 편하게 이용하세요."
            position="center"
            textAlign="center"
            title=""
          />
        </div>
        <div id="UserBookmark--list">
          <ListThemeHighlight
            isDisableBtn
            listArr={[
              {
                accumulateCoin: 9999,
                buttonArr: ["#연관태그", "#연관태그", "#연관태그"],
                coin: 999,
                img: `${noImage}`,
                listSubTitle: "listSubTitle",
                listTitle: "listTitle",
              },
              {
                accumulateCoin: 9999,
                buttonArr: ["#연관태그", "#연관태그", "#연관태그"],
                coin: 999,
                img: `${noImage}`,
                listSubTitle: "listSubTitle",
                listTitle: "listTitle",
              },
            ]}
            onClick={() => {}}
          />
        </div>
      </Content>
    </Container>
  );
}
