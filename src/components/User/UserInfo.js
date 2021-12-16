import styled from "styled-components";
import {
  InputWithSelect,
  InputWithLabel,
  Select,
  Checkbox,
  Button,
} from "@flescompany/design-system";
const Container = styled.div`
  padding-bottom: 75px;
`;
const Header = styled.h1`
  padding: 30px 0;
  color: #222;
  font-size: ${({ theme }) => theme.fontSizes.xxxl};
`;
const Span = styled.span`
  color: ${({ theme }) => theme.colors.gray22};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;
const Ptext = styled.p`
  margin-bottom: 10px;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;
const Content = styled.div`
  padding: 10px 0;
`;
const Form = styled.form`
  > div {
    margin: 30px 0;
    :first-of-type {
      margin: 0;
    }
  }
  .Userinfo--interest {
    > * {
      margin: 20px 0;
    }
  }
  .inputWithSelect--full,
  .input--full,
  .select--full {
    height: 50px;
  }
  .Userinfo--policy {
    span {
      font-size: ${({ theme }) => theme.fontSizes.small};
      font-weight: ${({ theme }) => theme.fontWeights.regular};
    }
  }
  .Userinfo--confirm {
    width: 100%;
    .outline,
    .borderRadius5 {
      width: 100%;
      height: 50px;
      color: #ffffff;
      background-color: #ffb74b;
    }
  }
`;
export default function Userinfo({ label }) {
  return (
    <Container id="Userinfo" label={label}>
      <Header className="UserinfoHeader">
        <Span>사주정보</Span>를 입력해주세요
      </Header>
      <Content className="UserinfoContent">
        <Form>
          <div className="Userinfo--name">
            <Ptext>이름(성별)</Ptext>
            <InputWithSelect
              borderColor="#eeeeee"
              onChange={() => {}}
              options={[
                {
                  label: "성별",
                  value: "value1",
                },
                {
                  label: "남",
                  value: "value2",
                },
                {
                  label: "여",
                  value: "value3",
                },
              ]}
            />
          </div>
          <div className="Userinfo--birth">
            <Ptext>생년월일</Ptext>
            <InputWithSelect
              borderColor="#eeeeee"
              onChange={() => {}}
              options={[
                {
                  label: "음/양력",
                  value: "value1",
                },
                {
                  label: "양력",
                  value: "value2",
                },
                {
                  label: "음력",
                  value: "value3",
                },
              ]}
            />
          </div>
          <div className="Userinfo--time">
            <InputWithLabel
              id="time"
              label="태어난 시"
              placeholder="예)14시20분"
              value=""
              error=""
            />
          </div>
          <div className="Userinfo--married">
            <Ptext>결혼여부</Ptext>
            <Select
              className="full"
              hideLabel
              id="full"
              onChange={() => {}}
              options={[
                {
                  label: "결혼여부(커플)",
                  value: "1",
                },
                {
                  label: "미혼(싱글)",
                  value: "2",
                },
                {
                  label: "미혼(커플)",
                  value: "3",
                },
                {
                  label: "기혼",
                  value: "4",
                },
              ]}
              state="full"
            />
          </div>
          <div className="Userinfo--interest">
            <Ptext>관심키워드</Ptext>
            <Select
              className="full"
              hideLabel
              id="full"
              onChange={() => {}}
              options={[
                {
                  label: "관심키워드 1",
                  value: "1",
                },
              ]}
              state="full"
            />
            <Select
              className="full"
              hideLabel
              id="full"
              onChange={() => {}}
              options={[
                {
                  label: "관심키워드 1",
                  value: "1",
                },
              ]}
              state="full"
            />
            <Select
              className="full"
              hideLabel
              id="full"
              onChange={() => {}}
              options={[
                {
                  label: "관심키워드 1",
                  value: "1",
                },
              ]}
              state="full"
            />
          </div>
          <div className="Userinfo--policy">
            <Checkbox
              checked
              label="운세서비스 이용을 위한 개인정보제공동의서 (필수)"
              id="Checked"
              onChange={() => {}}
            />
          </div>
          <div className="Userinfo--confirm">
            <Button appearance="borderRadius5" label="확인" />
          </div>
        </Form>
      </Content>
    </Container>
  );
}
