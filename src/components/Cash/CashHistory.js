import {
  BannerInTextAndImg,
  CardNumber,
  Select,
  Table,
  Pagination,
} from "@flescompany/design-system";
import styled from "styled-components";
import bgCoin from "../../assets/bg_coin.png";
const Container = styled.div`
  padding: 30px 15px;
`;
const Header = styled.div`
  #CashHistory--banner {
    .bannerInTextAndImg {
      :first-child {
        padding-left: 20px;
      }
      border-radius: 5px;
      h1,
      h5 {
        margin: 10px 0;
      }
    }
  }
`;
const Content = styled.div`
  > * {
    margin: 30px 0;
  }
  #CashHistory--card {
    .cardNumber {
      min-height: 80px;

      > :first-child {
        h1 {
          padding: 0;
        }
        min-height: 0;
      }
      > :last-child {
        min-height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        p {
          font-size: 12px;
        }
      }
    }
  }
  #CashHistory--table {
    .auto {
      width: 80px;
      margin-left: auto;
      select {
        width: 100%;
      }
    }

    table {
      margin: 20px 0;
      width: 100%;
    }
  }
`;

const Ptext = styled.p`
  margin-bottom: 20px;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export default function CashHistory() {
  return (
    <Container id="CashHistory">
      <Header className="CashHistory--header">
        <div id="CashHistory--banner">
          <BannerInTextAndImg
            backgroundColor="#cccccc"
            color="#ffffff"
            imgUrl={bgCoin}
            upperTitle=""
            title="코인충전"
            lowerTitle="코인을 충전해주세요"
          />
        </div>
      </Header>
      <Content className="CashHistory--content">
        <div id="CashHistory--card">
          <Ptext>남은 잔액</Ptext>
          <CardNumber
            backgroundColor="#f9f9f9"
            color="#f61616"
            numberNextContents="코인입니다."
            numberPrevContents="현재 헬로우 코인 잔액은"
            position="center"
            putNum={1234567890}
            textAlign="center"
            title=""
          />
        </div>
        <div id="CashHistory--table">
          <Select
            className="auto"
            hideLabel
            id="auto"
            onChange={() => {}}
            options={[
              {
                label: "2021",
                value: "1",
              },
              {
                label: "2020",
                value: "2",
              },
              {
                label: "2019",
                value: "3",
              },
            ]}
            state="auto"
          />
          <Table
            columns={[
              {
                accesor: "id",
                name: "Id",
              },
              {
                accesor: "name",
                name: "Name",
              },
              {
                accesor: "email",
                name: "Email",
              },
              {
                accesor: "phone",
                name: "Phone",
              },
              {
                accesor: "website",
                name: "Website",
              },
            ]}
            hideRemove={false}
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
