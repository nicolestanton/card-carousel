import { render, screen, fireEvent } from "@testing-library/react";
import { CarouselCard } from "./CarouselCard";

jest.mock("react-icons/fa", () => ({
  FaRegHeart: () => <div data-testid="heart-icon" />,
  FaStar: () => <div data-testid="star-icon" />,
  FaPepperHot: () => <div data-testid="pepper-icon" />,
  FaHeart: () => <div data-testid="filled-heart-icon" />,
}));

jest.mock("react-icons/lu", () => ({
  LuAlarmClock: () => <div data-testid="clock-icon" />,
}));

jest.mock("../PlaceholderImage/PlaceholderImage", () => ({
  PlaceholderImage: ({ src, alt, placeholderSrc }: { src: string; alt: string; placeholderSrc: string }) => (
    <img
      data-testid="placeholder-image"
      src={src}
      alt={alt}
      data-placeholder-src={placeholderSrc}
    />
  ),
}));

const mockCarouselCardProps = {
  name: "Spicy Chicken Tacos",
  image: "https://example.com/tacos.jpg",
  description: "Delicious spicy chicken tacos",
  cookingTime: "30",
  rating: "4.5",
  reviewText: "Amazing flavor!",
  heatLevel: 3,
  placeholderImage: "https://example.com/placeholder.jpg",
};

describe("CarouselCard Component", () => {
  it("renders card with all details correctly", () => {
    render(<CarouselCard {...mockCarouselCardProps} />);

    expect(screen.getByText("Spicy Chicken Tacos")).toBeInTheDocument();
    expect(screen.getByText("Delicious spicy chicken tacos")).toBeInTheDocument();
  });

  it("shows details when flipped", () => {
    render(<CarouselCard {...mockCarouselCardProps} />);
    
    const cardButton = screen.getByRole("button", { 
      name: /recipe for spicy chicken tacos/i 
    });
    fireEvent.click(cardButton);

    expect(screen.getByText("Cooking Time: 30 minutes")).toBeInTheDocument();
    expect(screen.getByText("Heat Level: 3")).toBeInTheDocument();
    expect(screen.getByText("Rating: 4.5")).toBeInTheDocument();
    expect(screen.getByText('Review: "Amazing flavor!"')).toBeInTheDocument();
  });

  it("renders card icons correctly", () => {
    render(<CarouselCard {...mockCarouselCardProps} />);

    expect(screen.getByTestId("clock-icon")).toBeInTheDocument();
    expect(screen.getByTestId("pepper-icon")).toBeInTheDocument();
    expect(screen.getByTestId("star-icon")).toBeInTheDocument();
    expect(screen.getByTestId("heart-icon")).toBeInTheDocument();
  });

  it("renders placeholder image with correct sources", () => {
    render(<CarouselCard {...mockCarouselCardProps} />);

    const image = screen.getByTestId("placeholder-image");
    expect(image).toHaveAttribute("src", "https://example.com/tacos.jpg");
    expect(image).toHaveAttribute(
      "data-placeholder-src",
      "https://example.com/placeholder.jpg"
    );
  });

  it("toggles favorite state when clicking favorite button", () => {
    render(<CarouselCard {...mockCarouselCardProps} />);
    
    const favoriteButton = screen.getByRole("button", { 
      name: /add .* to favorites/i 
    });
    fireEvent.click(favoriteButton);
    
    expect(screen.getByTestId("filled-heart-icon")).toBeInTheDocument();
  });
});
