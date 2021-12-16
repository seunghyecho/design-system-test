import { Textarea, Button } from "@flescompany/design-system";
import styled from "styled-components";
const Container = styled.div``;
const Content = styled.div`
  margin-top: 30px;
  .contentTextarea {
    textarea {
      width: 100%;
      min-height: 380px;
    }
  }

  .contentBtn {
    margin-top: 30px;
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
export default function QuestionApply({ label }) {
  return (
    <Container id="questionApply" label={label}>
      <Content className="questionApplyContent">
        <Form>
          <div className="contentTextarea">
            <Textarea onChange={() => {}} row="10" cols="10" />
          </div>
          <div className="contentBtn">
            <Button appearance="borderRadius5" label="쿠폰등록" />
          </div>
        </Form>
      </Content>
    </Container>
  );
}
