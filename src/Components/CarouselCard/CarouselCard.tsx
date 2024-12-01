import { useState } from "react";
import styles from "./CarouselCard.module.scss";
import { FaRegHeart, FaStar } from "react-icons/fa";
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

  const toggleClasses = () => {
    setCardClicked(!cardClicked);
  };

  return (
    <div className={styles.carouselCard}>
      <button
        onClick={toggleClasses}
        className={cardClicked ? styles.flipContainer : styles.ImageContainer}
      >
        <div className={styles.flipContainerInner}>
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
            <div className={styles.favouriteContainer}>
              <FaRegHeart className={styles.heartIcon} />
            </div>
            <PlaceholderImage
              src={image}
              alt=""
              placeholderSrc={placeholderImage}
            />
          </div>
        </div>
      </button>
      <div className={styles.carouselCardFooter}>
        <p className={styles.name}>{name}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};