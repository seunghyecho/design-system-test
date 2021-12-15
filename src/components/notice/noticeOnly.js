import { ListThemeDate, Pagination } from "@flescompany/design-system";
import styled from "styled-components";

const Content = styled.div``;

export default function NoticeOnly() {
  return (
    <Content className="NoticeOnly--content">
      <ListThemeDate
        listArr={[
          {
            listTitle: "listTitle1",
          },
          {
            listTitle: "listTitle2",
          },
          {
            listTitle: "listTitle3",
          },
        ]}
      />
      <Pagination
        onChangePage={() => {}}
        pageArr={["1", "2", "3", "4", "5"]}
        position="center"
      />
    </Content>
  );
}