import { render, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import MovieList from "./MovieList";

const queryClient = new QueryClient();

describe("Given a MovieList component", () => {
  describe("When it is rendered", () => {
    test("Then it should display a list", async () => {
      render(
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <MovieList />
          </QueryClientProvider>
        </BrowserRouter>
      );

      await waitFor(() => {
        const movieList = screen.getByRole("list");
        expect(movieList).toBeInTheDocument();
      });
    });
  });
});
