import React from "react";

const Banner = () => {
  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    console.log(searchTerm);
  };

  const handleSubscription = (event) => {
    const email = event.target.value;
    console.log(email);
  };

  return (
    <div className="banner" style={{ backgroundColor: "rgba(211, 211, 211, 0.5)", padding: "20px", marginBottom: "40px" }}>
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#C1C1C1" }}>
        <a className="navbar-brand" href="#">
          Blog App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Resources</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Sign In</a>
            </li>
            <li className="nav-item">
              <button className="btn btn-primary">Sign Up</button>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your email"
                aria-label="Enter your email"
                onChange={handleSubscription}
              />
              <div className="input-group-append">
                <button className="btn btn-primary" type="button">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
