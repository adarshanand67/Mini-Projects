import { Link } from "react-router-dom";

const NotFound = () => {
  return ( 
    <div className="not-found">
      <h1>404</h1>
      <p>Page not found</p>
      <p>You should enter correct link</p>
      <Link to="/">Go to home</Link>
    </div>
   );
}
 
export default NotFound;