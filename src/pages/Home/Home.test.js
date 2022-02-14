import { render, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";

const queryClient = new QueryClient();

describe("Given a Home component", () => {
  describe("When it is rendered", () => {
    test("Then it should display the list in MovieList", async () => {
      render(
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <Home />
          </QueryClientProvider>
        </BrowserRouter>
      );

      await waitFor(() => {
        const list = screen.getByRole("list");
        expect(list).toBeInTheDocument();
      });
    });
  });
});
