import { Link } from "react-router-dom";
import "./PageNotFound.scss";

export default function PageNotFound() {
  return (
    <div className="not-found">
      <div className="not-found-container">
        <h2>Oops! You seem to be lost.</h2>
        <p>
          Go back to the <Link to="/">Home Page</Link> !
        </p>
      </div>
    </div>
  );
}
