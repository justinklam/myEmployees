import React from "react";
import "./home.css";

// Components
import WidgetS from "../../components/widgetS/WidgetS";
import WidgetL from "../../components/widgetL/WidgetL";

const Home = () => {
  return (
    <div className="home">
      <div className="homeTitleContainer">
        <h1 className="homeTitle">Home</h1>
        <div className="homeWidgets">
          <WidgetS />
          <WidgetL />
        </div>
      </div>
    </div>
  );
};

export default Home;