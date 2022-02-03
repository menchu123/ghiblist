import { render, screen } from "@testing-library/react";
import ReactTestRenderer from "react-test-renderer";
import MovieCard from "./MovieCard";

describe("Given a MovieCard component", () => {
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

      render(<MovieCard movie={movie} />);

      const movieCard = screen.getByRole("listitem");
      const movieTitle = screen.getByRole("heading");

      expect(movieCard).toBeInTheDocument();
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

      const movieCard = ReactTestRenderer.create(<MovieCard movie={movie} />);
      expect(movieCard.toJSON()).toMatchSnapshot();
    });
  });
});
