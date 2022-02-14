import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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
  describe("When it is called with an order 'title'", () => {
    test("Then the radio input for title should be checked", () => {
      const order = "title";
      const setOrder = jest.fn();

      render(<SortBar order={order} setOrder={setOrder} />);

      const titleInput = screen.getByRole("radio", { name: "Title" });

      expect(titleInput).toBeChecked();
    });
  });
  describe("When it is called with an order 'release_date'", () => {
    test("Then the radio input for title should be checked", () => {
      const order = "release_date";
      const setOrder = jest.fn();

      render(<SortBar order={order} setOrder={setOrder} />);

      const yearInput = screen.getByRole("radio", { name: "Year" });

      expect(yearInput).toBeChecked();
    });
  });
  describe("When it is called with an order 'rt_score'", () => {
    test("Then the radio input for title should be checked", () => {
      const order = "rt_score";
      const setOrder = jest.fn();

      render(<SortBar order={order} setOrder={setOrder} />);

      const ratingInput = screen.getByRole("radio", { name: "Rating" });

      expect(ratingInput).toBeChecked();
    });
  });
  describe("When it is called with an order 'running_time'", () => {
    test("Then the radio input for title should be checked", () => {
      const order = "running_time";
      const setOrder = jest.fn();

      render(<SortBar order={order} setOrder={setOrder} />);

      const runtimeInput = screen.getByRole("radio", { name: "Runtime" });

      expect(runtimeInput).toBeChecked();
    });
  });
  describe("When the user clicks on 'Runtime'", () => {
    test("Then the function onChangeOrder should be called", () => {
      const order = "title";
      const setOrder = jest.fn();

      render(<SortBar order={order} setOrder={setOrder} />);

      const runtimeInput = screen.getByRole("radio", { name: "Runtime" });
      userEvent.click(runtimeInput);

      expect(setOrder).toHaveBeenCalled();
    });
  });
});
