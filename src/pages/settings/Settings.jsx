import React from "react";
import "./settings.css";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settingsTitleContainer">
        <h1 className="settingsTitle">Settings</h1>
      </div>
      <div className="settingsContainer">
        <div className="settingsShow">
          <div className="settingShowItem">
            <label>Settings 1</label>
            <select
              name="settingsChoice"
              id="settingsChoice"
              className="settingsItem"
            >
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </div>
          <div className="settingShowItem">
            <label>Settings 2</label>
            <select
              name="settingsChoice"
              id="settingsChoice"
              className="settingsItem"
            >
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </div>
          <div className="settingShowItem">
            <label>Settings 3</label>
            <select
              name="settingsChoice"
              id="settingsChoice"
              className="settingsItem"
            >
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </div>
          <div className="settingShowItem">
            <label>Settings 4</label>
            <select
              name="settingsChoice"
              id="settingsChoice"
              className="settingsItem"
            >
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </div>
          <div className="settingShowItem">
            <label>Settings 5</label>
            <select
              name="settingsChoice"
              id="settingsChoice"
              className="settingsItem"
            >
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
