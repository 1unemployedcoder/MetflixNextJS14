import { TypeReview } from "@/@types/AsyncTypes";
import styles from "./FilmReviews.module.css";

const FilmReviews = ({ reviews }: { reviews: TypeReview[] }) => {
    return (
        <>
            {!!reviews.length && (
                <div className={styles.reviewsContainer}>
                    <h3 className={styles.reviewsTitle}>Обзоры</h3>
                    <div className={styles.reviewsList}>
                        {reviews.map((review) => (
                            <div key={review.kinopoiskId} className={styles.reviewItem}>
                                <div className={styles.reviewHeader}>
                                    <span className={styles.author}>{review.author}</span>
                                    <span className={styles.date}>{new Date(review.date).toLocaleDateString()}</span>
                                </div>
                                <h4 className={styles.reviewTitle}>{review.title}</h4>
                                <p className={styles.reviewDescription}>{review.description}</p>
                                <div className={styles.reviewFooter}>
                                    <span className={styles.positiveRating}>👍 {review.positiveRating}</span>
                                    <span className={styles.negativeRating}>👎 {review.negativeRating}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default FilmReviews;
