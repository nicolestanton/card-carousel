import { render, screen, waitFor, act } from "@testing-library/react";
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

    await waitFor(() => {
      const recipeName = screen.getByText("Lasagne");
      expect(recipeName).toBeInTheDocument();
    });

    expect(global.fetch).toHaveBeenCalledWith("/recipes");
  });

});