import { Button, UserCondition, Menu, Grid } from "@flescompany/design-system";
import styled from "styled-components";
import noImage from "../../assets/no_image.jpeg";

const Container = styled.div`
  position: fixed;
  z-index: 9999;
  background: #fff;
  height: 100vh;
  overflow: hidden;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  padding: 30px 15px 0;
`;
const Header = styled.div`
  .d-flex {
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .coin {
    h1 {
      color: red;
      font-weight: bolder;
    }
  }
  .headerCondition {
    button {
      font-size: 12px;
      font-weight: bold;
    }
  }
`;
const Content = styled.div`
  .contentCounsel {
    button {
      width: calc(100% / 2 - 6px);
      font-size: 14px;
    }
    .borderRadius5,
    .outline {
      border-radius: 0;
    }
    .borderRadius5 {
      margin-right: 12px;
    }
    .outline {
      &:hover,
      &:active {
        box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
        transform: unset;
      }
    }
  }
  .contentMenu {
    padding: 20px 0;
  }
  .contentGrid {
    padding: 40px 0;
    border-top: 10px solid #f9f9f9;
    .gridList--3 {
      background-color: transparent;
      img {
        width: 102px;
        height: 102px;
      }
      span {
        padding-top: 0.5rem;
      }
    }
  }
`;
export default function SideMenu() {
  return (
    <Container id="sideMenu">
      <Header className="menuHeader">
        <div className="headerCondition">
          <div className="d-flex user">
            <UserCondition
              color="#aaaaaa"
              subTitle="1999.11.11"
              title="홍길동"
            />
            <Button
              appearance="borderRadius5"
              backgroundColor="#f9f9f9"
              color="#222222"
              label="정보변경"
              onClick={() => {
                console.log("click info");
              }}
            />
          </div>
          <div className="d-flex coin">
            <UserCondition color="#222222" subTitle="COIN" title="9000" />
            <Button
              appearance="borderRadius5"
              backgroundColor="#f9f9f9"
              color="#222222"
              label="코인충전"
              onClick={() => {
                console.log("click coin");
              }}
            />
          </div>
        </div>
      </Header>
      <Content className="menuContent">
        <div className="contentCounsel">
          <Button
            appearance="borderRadius5"
            backgroundColor="#ff9900"
            color="#ffffff"
            label="상담전화하기"
            onClick={() => {
              console.log("go counselorList");
            }}
          />
          <Button
            appearance="outline"
            backgroundColor="#ffffff"
            color="#222222"
            label="상담사례보기"
            onClick={() => {
              console.log("go counselorCaseList");
            }}
          />
        </div>
        <div className="contentMenu">
          <Menu
            menuArr={[
              {
                header: "menu1",
                id: 1,
                labels: ["label1", "label2", "label3", "label4"],
              },
              {
                header: "menu2",
                id: 2,
                labels: [],
              },
              {
                header: "menu3",
                id: 3,
                labels: ["label1", "label2", "label3"],
              },
            ]}
            onClick={() => {}}
          />
        </div>
        <div className="contentGrid">
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
              {
                name: "gridItem5",
                url: `${noImage}`,
              },
              {
                name: "gridItem6",
                url: `${noImage}`,
              },
              {
                name: "gridItem7",
                url: `${noImage}`,
              },
              {
                name: "gridItem8",
                url: `${noImage}`,
              },
              {
                name: "gridItem9",
                url: `${noImage}`,
              },
            ]}
            onGrid={() => {}}
            width="3"
          />
        </div>
      </Content>
    </Container>
  );
}
