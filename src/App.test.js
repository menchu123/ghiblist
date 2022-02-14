import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const queryClient = new QueryClient();

describe("Given a App component", () => {
  describe("When it is rendered", () => {
    test("Then it should display a heading with the text 'GHIBLIST'", () => {
      const expectedHeading = "GHIBLIST";

      render(
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </BrowserRouter>
      );

      const heading = screen.getByRole("heading");

      expect(heading).toBeInTheDocument();
      expect(heading.textContent).toBe(expectedHeading);
    });
    test("Then it should display a footer with the text '© 2022 - Menchu for Beezy'", () => {
      const expectedFooter = "© 2022 - Menchu for Beezy";

      render(
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </BrowserRouter>
      );

      const footer = screen.getByRole("contentinfo");

      expect(footer).toBeInTheDocument();
      expect(footer.textContent).toBe(expectedFooter);
    });
  });
});
