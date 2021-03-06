import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Filter from "./Filter";

const resizeWindow = (width, height) => {
  window.innerWidth = width;
  window.innerHeight = height;
  window.dispatchEvent(new Event("resize"));
};

describe("Given a Filter component", () => {
  describe("When it is rendered", () => {
    test("Then it should display three filter options", () => {
      const addToFilter = jest.fn();

      render(
        <BrowserRouter>
          <Filter addToFilter={addToFilter} />
        </BrowserRouter>
      );

      const filter = screen.getAllByRole("combobox");

      expect(filter).toHaveLength(3);
    });
  });
  describe("When the user selects an option in the Year filter", () => {
    test("Then the function addToFilter should be called", () => {
      const addToFilter = jest.fn();

      render(
        <BrowserRouter>
          <Filter addToFilter={addToFilter} />
        </BrowserRouter>
      );

      const filter = screen.getByRole("combobox", { name: "Year:" });
      const option = screen.getByRole("option", { name: "After 2020" });
      userEvent.selectOptions(filter, option);

      expect(option.selected).toBeTruthy();
    });
  });
  describe("When the user selects an option in the Runtime filter", () => {
    test("Then the function addToFilter should be called", () => {
      const addToFilter = jest.fn();

      render(
        <BrowserRouter>
          <Filter addToFilter={addToFilter} />
        </BrowserRouter>
      );

      const filter = screen.getByRole("combobox", { name: "Runtime:" });
      const option = screen.getByRole("option", { name: "Over 120min" });
      userEvent.selectOptions(filter, option);

      expect(option.selected).toBeTruthy();
    });
  });
  describe("When the user selects an option in the Rating filter", () => {
    test("Then the function addToFilter should be called", () => {
      const addToFilter = jest.fn();

      render(
        <BrowserRouter>
          <Filter addToFilter={addToFilter} />
        </BrowserRouter>
      );

      const filter = screen.getByRole("combobox", { name: "Rating:" });
      const option = screen.getByRole("option", { name: "Over 95%" });
      userEvent.selectOptions(filter, option);

      expect(option.selected).toBeTruthy();
    });
  });
  describe("When it is rendered in a small window size and the user clicks the open button", () => {
    test("Then it should add the class 'open-filter' to the button", () => {
      const addToFilter = jest.fn();

      render(
        <BrowserRouter>
          <Filter addToFilter={addToFilter} />
        </BrowserRouter>
      );

      resizeWindow(500, 800);
      const openFilter = screen.getAllByRole("button")[0];
      userEvent.click(openFilter);

      expect(openFilter).toHaveClass("open-filter");
    });
  });
  describe("When the user clicks on Remove filters", () => {
    test("Then it should add the class 'open-filter' to the button", () => {
      const addToFilter = jest.fn();
      const removeAllFilters = jest.fn();

      render(
        <BrowserRouter>
          <Filter
            addToFilter={addToFilter}
            removeAllFilters={removeAllFilters}
          />
        </BrowserRouter>
      );

      resizeWindow(500, 800);
      const removeFilters = screen.getByRole("button", {
        name: "Remove filters",
      });
      userEvent.click(removeFilters);

      expect(removeAllFilters).toHaveBeenCalled();
    });
  });
});
