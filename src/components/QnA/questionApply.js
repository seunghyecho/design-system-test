import { Textarea, Button } from "@flescompany/design-system";
import styled from "styled-components";
const Container = styled.div``;
const Content = styled.div`
  textarea {
    width: 100%;
    min-height: 380px;
  }

  .content-applyBtn {
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
export default function QuestionApply() {
  return (
    <Container id="QuestionApply">
      <Content className="QuestionApply--content">
        <Form>
          <div className="content-textarea">
            <Textarea onChange={() => {}} />
          </div>
          <div className="content-applyBtn">
            <Button appearance="borderRadius5" label="쿠폰등록" />
          </div>
        </Form>
      </Content>
    </Container>
  );
}
