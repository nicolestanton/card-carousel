import { ReactNode } from "react";
import styles from "./CarouselContainer.module.scss";

const CarouselContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.carouselContainer}>
        <div className={styles.carouselOverflow}>
          <div className={styles.carouselCardContainer}>{children}</div>
      </div>
    </div>
  );
};

export default CarouselContainer;
