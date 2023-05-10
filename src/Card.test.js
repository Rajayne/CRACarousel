import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";

// Smoke Test
test("renders without crashing", () => {
  render(
    <Card
      caption={TEST_IMAGES[0].caption}
      src={TEST_IMAGES[0].src}
      currNum={0}
      totalNum={1}
    />
  );
});

// Snapshot Test
test("it matches snapshot", () => {
  const { asFragment } = render(
    <Card
      caption={TEST_IMAGES[0].caption}
      src={TEST_IMAGES[0].src}
      currNum={0}
      totalNum={1}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
