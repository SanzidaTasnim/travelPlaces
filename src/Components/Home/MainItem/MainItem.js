import React, { useContext } from "react";
import { MyContext } from "../../../App";

const MainItem = ({ place }) => {
  const [area, setArea] = useContext(MyContext);
  const { img } = place;
  const handleTextChange = () => {
    setArea(place);
  };
  return (
    <div onMouseOver={handleTextChange}>
      <img src={img} alt="place" />
    </div>
  );
};

export default MainItem;
