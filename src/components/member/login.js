import {
  InputWithLabel,
  Button,
  SnsButtonGroup,
} from "@flescompany/design-system";
import axios from "axios";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.png";

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
  padding: 70px 15px 0;
  opacity: 1;
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
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");

  const handleId = (e) => {
    setId(e.target.value);
  };
  const handlePwd = (e) => {
    setPwd(e.target.value);
  };
  const onLogin = (e) => {
    e.preventDefault();

    if (id === "" || pwd === "") {
      window.alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }

    axios
      .post("http://localhost:4000/users", {
        email: id,
        password: pwd,
      })
      .then(function (res) {
        console.log(res);
        console.log("res.data.email :: ", res.data.email);
        if (res.data.email === undefined) {
          alert("입력하신 id 가 일치하지 않습니다.");
        } else if (res.data.email === null) {
          console.log(
            "======================",
            "입력하신 비밀번호 가 일치하지 않습니다."
          );
          alert("입력하신 비밀번호 가 일치하지 않습니다.");
        } else if (res.data.email === id && res.data.password === pwd) {
          console.log("======================", "로그인 성공");
          sessionStorage.setItem(id, pwd);
        }
        document.location.href = "/";
      })
      .catch(function (error) {});
  };

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
              placeholder="kim@test.com"
              inputValue={id}
              onChange={handleId}
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
              inputValue={pwd}
              onChange={handlePwd}
              maxLength="3"
            />
          </div>
          <div className="contentBtn">
            <Button
              appearance="borderRadius5"
              label="로그인"
              onClick={onLogin}
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
