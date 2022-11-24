import React, { useContext } from "react";
import { MyContext } from "../../../App";
import MainItem from "../MainItem/MainItem";
import { Link } from "react-router-dom";
import { travelPlace } from "./../../../travelInfo";
import "./Main.css";

const Main = () => {
  const [area] = useContext(MyContext);
  return (
    <div className="row container m-auto text-white position-relative mt-5 pt-5">
      <div className="col-md-4 main-text">
        <h1>{area.title}</h1>
        <p>{area.description}</p>
        <button className="btn btn-warning">
          <Link
            to="/booking"
            style={{ textDecoration: "none", color: "black" }}
          >
            Booking &#x2192;
          </Link>
        </button>
      </div>
      <div className="col-md-8">
        <div className="main-album d-flex">
          {travelPlace.map((place) => {
            return (
              <div className="main-image" key={place.id}>
                <MainItem place={place} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Main;
