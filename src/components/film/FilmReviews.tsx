import { TypeReview } from "@/@types/AsyncTypes";

const FilmReviews = ({reviews}: {reviews: TypeReview[]}) => {
  return (
    <div>
      <h3>Обзоры</h3>
      <div>
        {reviews.map((review) => (
          <div key={review.kinopoiskId}>{review.title}</div>
        ))}
      </div>
    </div>
  );
};

export default FilmReviews;
