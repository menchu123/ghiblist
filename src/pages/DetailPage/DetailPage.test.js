import { render, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import DetailPage from "./DetailPage";

const queryClient = new QueryClient();

describe("Given a DetailPage component", () => {
  describe("When it is rendered and there is a movie id in the url", () => {
    test("Then it should display the title of the movie", async () => {
      const arriettyId = "/2de9426b-914a-4a06-a3a0-5e6d9d3886f6";
      const arriettyTitle = "Arrietty";

      render(
        <MemoryRouter initialEntries={[arriettyId]}>
          <QueryClientProvider client={queryClient}>
            <Routes>
              <Route path="/:movieId" element={<DetailPage />} />
            </Routes>
          </QueryClientProvider>
        </MemoryRouter>
      );

      await waitFor(() => {
        const movieTitle = screen.getByText(arriettyTitle);
        expect(movieTitle).toBeInTheDocument();
      });
    });
  });
});
