import React, { useEffect, useState } from "react";
import "./App.scss";
import CarouselContainer from "./Components/CarouselContainer/CarouselContainer";
import { CarouselCard } from "./Components/CarouselCard/CarouselCard";
import placeHolderImage from "./Assets/placeholder.jpg";

interface RecipeData {
  id: number;
  name: string;
  image: string;
  shortDescription: string;
  cookingTime: string;
  averageRating: string;
  chilli: number;
  topReview: string;
  allergens: string[];
}

function App() {
  const [error, setError] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState<RecipeData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const allergenSet = new Set(["Fish", "Eggs", "Crustaceans"]);

  useEffect(() => {
    async function fetchAPIData() {
      setIsLoading(true);
      try {
        const response = await fetch("/recipes");

        if (!response.ok) {
          throw new Error(`responseError: ${response.status}`);
        }

        const recipeData: RecipeData[] = await response.json();

        const filteredRecipesList = recipeData.filter((recipe) =>
          recipe.allergens?.some((allergen) => allergenSet.has(allergen))
        );

        setFilteredRecipes(filteredRecipesList);

        setIsLoading(false);
      } catch (error: any) {
        setError(error.message);
        setIsLoading(false);
      }
    }

    fetchAPIData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>There is an error: {error}</div>;
  }

  return (
    <div className="App">
      <CarouselContainer>
        {filteredRecipes?.map((recipe) => (
          <CarouselCard
            key={recipe.id}
            name={recipe.name}
            placeholderImage={placeHolderImage}
            image={isLoading ? placeHolderImage : recipe.image}
            description={recipe.shortDescription}
            cookingTime={recipe.cookingTime}
            rating={recipe.averageRating}
            reviewText={recipe.topReview}
            heatLevel={recipe.chilli}
          />
        ))}
      </CarouselContainer>
    </div>
  );
}

export default App;
