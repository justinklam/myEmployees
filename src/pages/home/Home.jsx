import React from "react";
import "./home.css";

// Components
import WidgetS from "../../components/widgetS/WidgetS";
import WidgetL from "../../components/widgetL/WidgetL";

const Home = (props) => {
  return (
    <div className="home">
      <div className="homeTitleContainer">
        <h1 className="homeTitle">Home</h1>
        <div className="homeWidgets">
          <WidgetS employees={props.employees} />
          <WidgetL employees={props.employees} />
        </div>
      </div>
    </div>
  );
};

export default Home;
