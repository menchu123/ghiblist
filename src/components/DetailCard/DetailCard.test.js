import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ReactTestRenderer from "react-test-renderer";
import DetailCard from "./DetailCard";

describe("Given a DetailCard component", () => {
  describe("When it is passed a movie object with the title 'Spirited Away'", () => {
    test("Then it should render a card with the movie's title", () => {
      const expectedName = "Spirited Away";
      const movie = {
        title: expectedName,
        director: "Hayao Miyazaki",
        producer: "Isao Takahata",
        release_date: "1986",
        running_time: "124",
        rt_score: "95",
      };

      render(
        <BrowserRouter>
          <DetailCard movie={movie} />
        </BrowserRouter>
      );

      const movieTitle = screen.getByRole("heading");

      expect(movieTitle.textContent).toBe(expectedName);
    });
  });
  describe("When it is passed a movie object", () => {
    test("Then it should render a card matching the snapshot", () => {
      const movie = {
        title: "Spirited Away",
        director: "Hayao Miyazaki",
        producer: "Isao Takahata",
        release_date: "1986",
        running_time: "124",
        rt_score: "95",
      };

      const detailCard = ReactTestRenderer.create(
        <BrowserRouter>
          <DetailCard movie={movie} />
        </BrowserRouter>
      );
      expect(detailCard.toJSON()).toMatchSnapshot();
    });
  });
});
