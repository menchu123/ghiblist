import { render, screen } from "@testing-library/react";
import SortBar from "./SortBar";

describe("Given a SortBar component", () => {
  describe("When it is called", () => {
    test("Then it should render a sort by bar with four radio inputs", () => {
      const order = "title";
      const setOrder = jest.fn();
      const expectedText = "Sort by:";
      const expectedInputCount = 4;

      render(<SortBar order={order} setOrder={setOrder} />);

      const sortBarText = screen.getByText(expectedText);
      const sortBarInputs = screen.getAllByRole("radio");

      expect(sortBarText).toBeInTheDocument();
      expect(sortBarInputs).toHaveLength(expectedInputCount);
    });
  });
});
