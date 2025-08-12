import { useParams, useNavigate } from "react-router-dom";
import PageNotFound from "../PageNotFound/PageNotFound";
import "./Review.css";

function Review({ reviews }) {
  //The useNavigate hook allows us to navigate to a specific or back to a previous
  //page conveniently. Use it as a callBack to the onClick attribute of a button
  // and pass it the path you want to navigate to as a string. Alternativly pass it
  // the value -1 to return to the previous page.
  const navigagateBack = useNavigate();
  //The useParams() hook creates an object with one property called reviewId which maps
  //to the id of the link that is clicked on.
  const { reviewId } = useParams();
  const review = reviews.find((review) => review.id === parseInt(reviewId));

  //📌 The ? used in reviews[index]?.title is the optional chaining operator.
  // It is used here to prevent errors from occurring if the review component is
  // rendered before the API request returns with the necessary data.
  return (
    <div className="review">
      {review ? (
        <div className="review__item">
          <h3>{review?.title}</h3>
          <p>{review?.text}</p>
          <p className="review__rating">Final rating: {review?.rating}</p>
          <button type="button" onClick={() => navigagateBack("/Reviews")}>
            Back to the review list 😎
          </button>
        </div>
      ) : (
        <PageNotFound />
      )}
    </div>
  );
}

export default Review;
