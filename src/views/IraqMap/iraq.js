import React from "react";
import { Map, GeoJSON } from "react-leaflet";
import mapData from "../../variables/IraqMap.json";
import "leaflet/dist/leaflet.css";

const MyMap = () => {
  const state = { color: "#ffff00" };

  const countryStyle = {
    fillColor: "gray",
    fillOpacity: 1,
    color: "black",
    weight: 2,
  };

  const changeCountryColor = (event) => {
    // console.log(event.target.feature.properties.ADMIN);
    event.target.setStyle({
      color: "green",
      fillColor: state.color,
      fillOpacity: 1,
    });
  };

  const onEachProvince = (province, layer) => {
    const provinceName = province.properties.ADMIN;
    layer.bindPopup(provinceName);
    console.log(layer);
    layer.options.fillOpacity = Math.random();
    layer.on({
      click: changeCountryColor,
    });
  };

  // const colorChange = (event) => {
  //   this.setState({ color: event.target.value });
  // };

  return (
    <div>
      <Map
        style={{ height: "64.5vh", width: "40wh", backgroundColor: "white" }}
        zoom={6}
        center={[33, 44]}
      >
        <GeoJSON
          style={countryStyle}
          data={mapData.features}
          onEachFeature={onEachProvince}
        />
      </Map>
      {/* <input
        type="color"
        value={this.state.color}
        onChange={this.colorChange}
      /> */}
    </div>
  );
};

export default MyMap;
