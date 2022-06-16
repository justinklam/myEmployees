import React from "react";
import "./home.css";

// Components
import WidgetS from "../../widgetS/WidgetS";
import WidgetL from "../../widgetL/WidgetL";

const Home = () => {
  return (
    <div className="home">
      <div className="homeWidgets">
        <WidgetS />
        <WidgetL />
      </div>
    </div>
  );
};

export default Home;
