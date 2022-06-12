import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div
        className="container input-group bg-black d-flex flex-column p-5 mt-4"
        style={{ width: 35 + "rem" }}
      >
        <div className="row">
          <h3 className="text-light text-center ">CHECK THE WEATHER HERE</h3>
        </div>
        <hr className="text-light mb-5" />

        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control p-2"
              placeholder="Enter your City"
              style={{ width: 20 + "rem" }}
            />
          </div>
          <div className="col">
            <input
              type="submit"
              className="btn btn-primary p-2"
              style={{ width: 6 + "rem" }}
              value="Check"
            />
          </div>
        </div>
        <div className="col mt-5">
          <div className="row">
            <h3 className="text-primary">Good Evening, Guwahati</h3>
          </div>
          <div className="row">
            <h5 className="text-primary">Last updated at: Sunday, 19:00</h5>
          </div>
          <div className="row">
            <h5 className="text-primary">Windy</h5>
          </div>
        </div>

        <hr className="text-light" />

        <div className="row mt-3">
          {/* <div className="col">
            <i className="bi bi-wind text-primary"></i>
          </div> */}
          <div className="col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="55"
              height="55"
              fill="currentColor"
              className="bi bi-wind text-primary"
              viewBox="0 0 16 16"
            >
              <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z" />
            </svg>
          </div>
          <div className="col ">
            <h1 className="font-weight-bold text-light">25°C</h1>
          </div>

          <div className="col">
            <div className="row">
              <h6 className="text-secondary">Pressure: 1055mb</h6>
            </div>
            <div className="row">
              <h6 className="text-secondary">Humidity: 90%</h6>
            </div>
            <div className="row">
              <h6 className="text-secondary">Wind: 40 km/h</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
