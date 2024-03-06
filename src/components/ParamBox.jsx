import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import "./Box.css";
import { useState } from "react";

export default function ParamBox() {
  const [isOn, setIsOn] = useState(true);
  return (
    <div className="box">
      {/* Parameter Container */}
      <div className="paramcontainer">
        <div className="suhu kotak">
          <div className="name">
            <h3>Suhu</h3>
            <h3>
              <div className={isOn ? "on" : "off"}></div>
              {isOn ? "On" : "Off"}
            </h3>
          </div>
          <div className="nilai">
            <h1>24&deg;C</h1>
          </div>
        </div>
        <div className="pH kotak">
          <div className="name">
            <h3>pH</h3>
            <h3>
              <div className={isOn ? "on" : "off"}></div>
              {isOn ? "On" : "Off"}
            </h3>
          </div>
          <div className="nilai">
            <h1>6,5</h1>
          </div>
        </div>
        <div className="TDS kotak">
          <div className="name">
            <h3>TDS</h3>
            <h3>
              <div className={isOn ? "on" : "off"}></div>
              {isOn ? "On" : "Off"}
            </h3>
          </div>
          <div className="nilai">
            <h1>1050 PPM</h1>
          </div>
        </div>
      </div>

      {/* Override Button */}
      <FormGroup className="overrideButton">
        <h3>Override</h3>
        <FormControlLabel control={<Switch />} label="Pendingin Air" />
        <FormControlLabel control={<Switch />} label="pH Up" />
        <FormControlLabel control={<Switch />} label="pH Down" />
      </FormGroup>
    </div>
  );
}
