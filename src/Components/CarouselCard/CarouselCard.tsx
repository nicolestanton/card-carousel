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

  const toggleClasses = (e: any) => {
    if ((e.target as HTMLElement).closest(`.${styles.favouriteContainer}`)) {
      return;
    }
    setCardClicked(!cardClicked);
  };

  const handleToggleFavourite = () => {
    setFavouriteRecipe(!favouriteRecipe);
  };

  return (
    <article
      role="button"
      data-testid="carouselCard"
      onClick={toggleClasses}
      className={`${styles.carouselCard} ${
        cardClicked ? styles.flipContainer : styles.ImageContainer
      }`}
    >
      <div className={styles.card}>
        <div className={styles.carouselCardFlipDetails}>
          <span className={styles.carouselCardDetail}>
            <LuAlarmClock className={styles.iconClock} /> {cookingTime} (mins)
          </span>
          <span className={styles.carouselCardDetail}>
            <FaPepperHot className={styles.iconChilli} /> {heatLevel}
          </span>
          <span className={styles.carouselCardDetail}>
            <FaStar className={styles.iconStar} /> {rating}
          </span>
          <span className={styles.carouselCardDetail}> "{reviewText}"</span>
        </div>
        <div>
          <PlaceholderImage
            src={image}
            alt=""
            placeholderSrc={placeholderImage}
          />
        </div>
      </div>
      <div className={styles.favouriteContainer}>
        <button className={styles.favourites} onClick={handleToggleFavourite}>
          {favouriteRecipe ? (
            <FaHeart className={styles.heartIcon} />
          ) : (
            <FaRegHeart className={styles.heartIcon} />
          )}
        </button>
      </div>
      <div className={styles.carouselCardFooter}>
        <p className={styles.name}>{name}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
};
