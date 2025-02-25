import { useState } from "react";
import styles from "./CarouselCard.module.scss";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { FaPepperHot } from "react-icons/fa";
import { LuAlarmClock } from "react-icons/lu";
import { PlaceholderImage } from "../PlaceholderImage/PlaceholderImage";

export const CarouselCard = ({
  name,
  image,
  description,
  cookingTime,
  rating,
  reviewText,
  heatLevel,
  placeholderImage,
}: {
  name: string;
  image: string;
  description: string;
  cookingTime: string;
  rating: string;
  reviewText: string;
  heatLevel: number;
  placeholderImage: string;
}) => {
  const [cardClicked, setCardClicked] = useState(false);
  const [favouriteRecipe, setFavouriteRecipe] = useState(false);

  const toggleClasses = (
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => {
    if ((e.target as HTMLElement).closest(`.${styles.favouriteContainer}`)) {
      return;
    }
    setCardClicked(!cardClicked);
  };

  const handleToggleFavourite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setFavouriteRecipe(!favouriteRecipe);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setCardClicked(!cardClicked);
    }
  };

  return (
    <div
      className={`${styles.carouselCard} ${
        cardClicked ? styles.flipContainer : styles.ImageContainer
      }`}
    >
      <article
        tabIndex={0}
        role="button"
        aria-pressed={cardClicked}
        data-testid="carouselCard"
        onClick={toggleClasses}
        onKeyDown={handleKeyDown}
        aria-label={`Recipe for ${name}. ${
          !cardClicked ? "Click to see details" : "Click to see image"
        }`}
      >
        <div className={styles.card}>
          <div className={styles.carouselCardFlipDetails}>
            <span className={styles.carouselCardDetail}>
              <LuAlarmClock className={styles.iconClock} aria-hidden="true" />
              <span>Cooking Time: {cookingTime} minutes</span>
            </span>
            <span className={styles.carouselCardDetail}>
              <FaPepperHot className={styles.iconChilli} aria-hidden="true" />
              <span>Heat Level: {heatLevel}</span>
            </span>
            <span className={styles.carouselCardDetail}>
              <FaStar className={styles.iconStar} aria-hidden="true" />
              <span>Rating: {rating}</span>
            </span>
            <span className={styles.carouselCardDetail}>
              <span>Review: "{reviewText}"</span>
            </span>
          </div>
          <div>
            <PlaceholderImage
              src={image}
              alt={`Image of ${name} dish`}
              placeholderSrc={placeholderImage}
            />
          </div>
        </div>
        <div className={styles.carouselCardFooter}>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </article>
      <div className={styles.favouriteContainer}>
        <button
          className={styles.favourites}
          onClick={handleToggleFavourite}
          aria-label={
            favouriteRecipe
              ? `Remove ${name} from favorites`
              : `Add ${name} to favorites`
          }
          aria-pressed={favouriteRecipe}
        >
          {favouriteRecipe ? (
            <FaHeart className={styles.heartIcon} aria-hidden="true" />
          ) : (
            <FaRegHeart className={styles.heartIcon} aria-hidden="true" />
          )}
        </button>
      </div>
    </div>
  );
};
