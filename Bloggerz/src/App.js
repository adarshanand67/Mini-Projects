import Navbar from "./Navbar.js";
import Home from "./Home.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create.js";
import BlogDetails from "./BlogDetails.js";
import NotFound from "./NotFound.js";

function App() {
  const title = "Welcome to my site";

  return (
    // writing jsx - JavaScript XML
    <Router>
      <div className="App">
        <div className="content">
          <Navbar></Navbar>
          <h1>{title}</h1>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/create" component={Create} />
            <Route exact path="/blog/:id" component={BlogDetails} /> {/* Route parameters */}
            <Route component={NotFound} component={NotFound} /> {/* 404 */}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App; // App.js is exported to index.js
