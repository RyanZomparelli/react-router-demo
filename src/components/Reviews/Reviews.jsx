import { Link } from "react-router-dom";
import "./Reviews.css";

function Reviews({ reviews }) {
  //Here, we're creating a list of review links from the reviews state. When you
  //click on a link, the URL will reflect the id of the review.
  //The 'to' attribute must take a string. So to use the id number from the Api
  //  in the Link component we use a template literal.
  return (
    <div className="reviews">
      <ul className="reviews__list">
        {reviews &&
          reviews.map((review) => {
            return (
              <li key={review.id} className="reviews__item">
                <Link to={`${review.id}`}>{review.title}</Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Reviews;
