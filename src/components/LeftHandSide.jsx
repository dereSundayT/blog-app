import React from "react";

const LeftHandSide = () => {
  return (
    <div className="col-md-6">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          aria-label="Search"
        />
        <div className="input-group-append">
          <button className="btn btn-outline-primary" type="button">
            Go
          </button>
        </div>
      </div>
      <div>
        <ul>
          <li>
            <a href="#">Link 1</a>
          </li>
          <li>
            <a href="#">Link 2</a>
          </li>
          <li>
            <a href="#">Link 3</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftHandSide;
