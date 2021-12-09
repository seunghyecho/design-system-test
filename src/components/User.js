import { Tab } from "@flescompany/design-system";
export default function User() {
  return (
    <div id="user">
      <Tab
        TabArr={[
          {
            content:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
            title: "SECTION TITLE1",
          },
          {
            content:
              "Lorem ipsum dolor, sit amet consectetur lla, laboriosam vitae enim nesciunt voluptates nisi.",
            title: "SECTION TITLE2",
          },
          {
            content:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
            title: "SECTION TITLE3",
          },
          {
            content:
              "Lorem ipsum dolor, sit amet consectetur adipisi.cing elit.",
            title: "SECTION TITLE4",
          },
        ]}
        onClick={() => {}}
        position="left"
      />
    </div>
  );
}
