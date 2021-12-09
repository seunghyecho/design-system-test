import styled from "styled-components";
import { ListThemeHighlight, Card } from "@flescompany/design-system";
import noImage from "../../assets/no_image.jpeg";
const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
`;
const UserHistoryHeader = styled.div``;
const Header = styled.h1`
  color: ${({ theme }) => theme.colors.gray22};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;
const UserHistoryContent = styled.div`
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
export default function UserHistory() {
  return (
    <Container id="UserHistory">
      <UserHistoryHeader className="UserHistory--header">
        <Header></Header>
      </UserHistoryHeader>
      <UserHistoryContent className="UserHistory--content">
        <div id="UserHistory--card">
          <Card
            backgroundColor="#f9f9f9"
            contents="자주 보는 운세를 북마크 해두시고 \n 편하게 이용하세요."
            position="center"
            textAlign="center"
            title=""
          />
        </div>
        <div id="UserHistory--list">
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
      </UserHistoryContent>
    </Container>
  );
}
