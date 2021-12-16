import { ListThemeDateState } from "@flescompany/design-system";
import styled from "styled-components";
const Container = styled.div``;
const Content = styled.div`
  .contentList {
    .listThemeDateState {
      border-bottom: 1px solid #eeeeee;

      a {
        height: 67px;

        h2 {
          font-size: 14px;
          font-weight: 400;
          line-height: 1.71;
        }
      }
    }
  }
`;
export default function QuestionAnswer({ label }) {
  return (
    <Container id="questionAnswer" label={label}>
      <Content className="questionAnswerContent">
        <div className="contentList">
          <ListThemeDateState
            listArr={[
              {
                listTitle:
                  "[문의] 유료 서비스를 이용하고싶어요. 결제는 어떻게 해야 하나요?",
              },
            ]}
            state="complete"
          />
          <ListThemeDateState
            listArr={[
              {
                listTitle: "listTitle2",
              },
            ]}
            state="uncomplete"
          />
          <ListThemeDateState
            listArr={[
              {
                listTitle: "listTitle3",
              },
            ]}
            state="complete"
          />
        </div>
      </Content>
    </Container>
  );
}
