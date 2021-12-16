import {
  InputWithLabel,
  Button,
  SnsButtonGroup,
} from "@flescompany/design-system";
import styled from "styled-components";
import logo from "../../assets/logo.png";

const Container = styled.div``;
const Header = styled.div`
  text-align: center;
`;
const Content = styled.div`
  padding: 0 15px;

  .content--id,
  .content--pw {
    input {
      height: 50px;
    }
  }

  .content-loginBtn {
    margin-top: 25px;
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
const Form = styled.form``;
export default function Login() {
  return (
    <Container id="Login">
      <Header className="Login--header">
        <img src={logo} alt={logo} />
      </Header>
      <Content className="Login--content">
        <Form>
          <div className="content--id">
            <InputWithLabel
              error=""
              id="userid"
              label=""
              placeholder="user@email.com"
              value="user@email.com"
            />
          </div>
          <div className="content--pw">
            <InputWithLabel
              error=""
              id="password"
              label=""
              placeholder="1234"
              type="password"
              value="1234"
            />
          </div>
          <div className="content-loginBtn">
            <Button appearance="borderRadius5" label="로그인" />
          </div>
        </Form>
        <div className="login-social">
          <SnsButtonGroup
            buttonArr={[
              {
                id: "naver",
                name: "네이버 로그인",
              },
              {
                id: "facebook",
                name: "페이스북 로그인",
              },
              {
                id: "google",
                name: "구글 로그인",
              },
              {
                id: "kakao",
                name: "카카오계정 로그인",
              },
            ]}
            onClick={() => {}}
          />
        </div>
      </Content>
    </Container>
  );
}
