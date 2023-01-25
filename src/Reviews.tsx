import React from "react";
import styles from "./Reviews.module.css";

interface Props {
  reviews: string[];
}

export const Reviews: React.FC<Props> = ({ reviews }) => {
  return (
    <div className={styles.reviews}>
      <h2 className={styles.reviews_title}>Reviews</h2>
      <ul className={styles.reviews_list}>
        {reviews.map((review) => (
          <li key={review} className={styles.reviews_list_item}>
            {review}
          </li>
        ))}
      </ul>
    </div>
  );
};
