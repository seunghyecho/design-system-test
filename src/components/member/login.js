import {
  InputWithLabel,
  Button,
  SnsButtonGroup,
} from "@flescompany/design-system";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.png";

const Container = styled.div`
  padding: 70px 0;
`;
const Header = styled.div`
  text-align: center;
`;
const Content = styled.div`
  padding: 0 15px;

  .contentBtn {
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
  .contentLoginSocial {
    margin-top: 50px;
    text-align: center;
    .buttonList {
      margin: 0 10px;
    }
  }
  .contentLoginComment {
    margin-top: 30px;
    ul {
      li {
        font-size: 12px;
        line-height: 1.67;
        letter-spacing: -0.12px;
        color: #aaa;
      }
    }
  }
`;
const Form = styled.form`
  .contentId,
  .contentPw {
    input {
      height: 50px;
    }
  }
`;
export default function Login({ authenticated, login, location }) {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };
  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const onClickLogin = () => {
    console.log(login);
    try {
      login({ inputId, inputPw });
    } catch (e) {
      alert("Failed to login");
      setInputId("");
      setInputPw("");
    }
  };

  const { from } = location.state || { from: { pathname: "/" } };
  console.log(authenticated);
  if (authenticated) return <Redirect to={from} />;

  return (
    <Container id="login">
      <Header className="loginHeader">
        <img src={logo} alt={logo} />
      </Header>
      <Content className="loginContent">
        <Form>
          <div className="contentId">
            <InputWithLabel
              type="text"
              error=""
              id="userid"
              label=""
              placeholder="user@email.com"
              inputValue={inputId}
              onChange={handleInputId}
              maxLength="22"
            />
          </div>
          <div className="contentPw">
            <InputWithLabel
              error=""
              id="password"
              label=""
              placeholder="123"
              type="password"
              inputValue={inputPw}
              onChange={handleInputPw}
              maxLength="3"
            />
          </div>
          <div className="contentBtn">
            <Button
              appearance="borderRadius5"
              label="로그인"
              onClick={onClickLogin}
            />
          </div>
        </Form>
        <div className="contentLoginSocial">
          <SnsButtonGroup
            buttonArr={[
              {
                id: "kakao",
                name: "카카오계정 로그인",
              },
              {
                id: "naver",
                name: "네이버 로그인",
              },
              {
                id: "facebook",
                name: "페이스북 로그인",
              },
            ]}
          />
        </div>
        <div className="contentLoginComment">
          <ul>
            <li>기존 헬로우운세 계정과는 연동되지 않습니다.</li>
            <li>
              SNS계정으로 로그인 시, 헬로우운세 이용을 위한 기본 정보만을
              사용하며 그 외 추가정보나 글 게시 권한 등을 요청하지 않습니다
            </li>
          </ul>
        </div>
      </Content>
    </Container>
  );
}
