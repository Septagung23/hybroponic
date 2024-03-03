import "./Box.css";

export default function ParamBox() {
  return (
    <div className="container">
      <div className="suhu kotak">
        <div className="name">
          <h3>Suhu</h3>
          <h3>
            <div className="symbol"></div>
            On
          </h3>
        </div>
        <div className="nilai">
          <h1>24 &deg;C</h1>
        </div>
      </div>
      <div className="pH kotak">
        <div className="name">
          <h3>pH</h3>
          <h3>
            <div className="symbol"></div>
            On
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
            <div className="symbol"></div>
            On
          </h3>
        </div>
        <div className="nilai">
          <h1>1050 PPM</h1>
        </div>
      </div>
    </div>
  );
}
