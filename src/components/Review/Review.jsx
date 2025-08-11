import { useParams } from "react-router-dom";
import "./Review.css";

function Review({ reviews }) {
  //The useParams() hook creates an object with one property called reviewId which maps
  //to the id of the link that is clicked on.
  const { reviewId } = useParams();
  //This way only works if the object Id's and the array indicies are sequential.
  //Using the review.id that was clicked on we have to subract one to get the index that
  //review is stored in because arrays are zero indexed.
  let index = reviewId - 1;
  //📌 The ? used in reviews[index]?.title is the optional chaining operator.
  // It is used here to prevent errors from occurring if the review component is
  // rendered before the API request returns with the necessary data.
  return (
    <div className="review">
      {reviews && (
        <div className="review__item">
          <h3>{reviews[index]?.title}</h3>
          <p>{reviews[index]?.text}</p>
          <p className="review__rating">
            Final rating: {reviews[index]?.rating}
          </p>
        </div>
      )}
    </div>
  );
}

export default Review;
