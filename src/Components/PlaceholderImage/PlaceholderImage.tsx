import React, { useState } from "react";
import styles from "./PlaceholderImage.module.scss";

export const PlaceholderImage = ({
  src,
  alt,
  placeholderSrc,
  className,
}: {
  src: string;
  alt: string;
  placeholderSrc: string;
  className?: string;
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className={`${styles.imageContainer} ${className}`}>
      {!imageLoaded && (
        <img
          src={placeholderSrc}
          alt="Loading"
          className={styles.placeholderImage}
        />
      )}
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className={`${styles.carouselCardImage} ${!imageLoaded ? styles.hidden : ''}`}
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageLoaded(true)} // Handle image load errors
      />
    </div>
  );
};