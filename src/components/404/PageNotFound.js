import { Link } from "react-router-dom";
import "./PageNotFound.scss";

export default function PageNotFound() {
  return (
    <main
      className="not-found"
      id="banner"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.50), rgba(0,0,0,0.50)), url(https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="not-found-text">
        <h2>404</h2>
        <h1>Page not found</h1>
        <p>Sorry, we couldn’t find the page you’re looking for.</p>
        <Link to="/">
          <span aria-hidden="true">&larr;</span> Back to home
        </Link>
      </div>
    </main>
  );
}
