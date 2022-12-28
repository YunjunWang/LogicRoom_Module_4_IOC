import { container } from "./Container";
import { presenter } from "./Presenter";

beforeEach(() => {
  container.mode = "fake";
});

it("run code in a fake context", () => {
  expect(presenter.load().message).toBe("fake message");
});
