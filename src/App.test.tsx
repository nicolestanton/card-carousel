import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { mockRecipes } from "./mockRecipes";

describe("App Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();

    // mock fetch request to get recipe data
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockRecipes),
      })
    ) as jest.Mock;
  });

  test("renders carousel with filtered recipes", async () => {
    render(<App />);

    await waitFor(
      () => {
        const recipeName = screen.getByText("Lasagne");
        expect(recipeName).toBeInTheDocument();
      },
      { timeout: 2000 }
    );

    expect(global.fetch).toHaveBeenCalledWith("/recipes");
  });

  test("handles loading state", async () => {
    render(<App />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});
