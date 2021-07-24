import React from "react";
import PropTypes from "prop-types";
import { Map, GeoJSON } from "react-leaflet";
import mapData from "../../variables/IraqMap.json";
import "leaflet/dist/leaflet.css";

const IraqMap = (setCity) => {
  // const state = { color: "#ffff00" };
  const cityStyle = {
    fillColor: "gray",
    fillOpacity: 0.5,
    color: "black",
    weight: 2,
  };

  const changeCityColor = (event) => {
    setCity(event.target.feature.properties.ADMIN);
  };

  const onEachProvince = (province, layer) => {
    const provinceName = province.properties.ADMIN;
    // layer.bindPopup(provinceName);
    layer.bindTooltip(provinceName, {
      permanent: true,
      direction: "top",
      opacity: 1,
      offset: [30, 3],
    });
    // if (province.properties.ADMIN === city) {
    //   layer.options.fillColor = state.color;
    //   layer.options.fillOpacity = 1;
    // }
    layer.on({
      click: changeCityColor,
    });
  };

  return (
    <div>
      <Map
        style={{ height: "64.5vh", width: "40wh", backgroundColor: "white" }}
        zoom={6}
        center={[33, 44]}
      >
        <GeoJSON
          style={cityStyle}
          data={mapData.features}
          onEachFeature={onEachProvince}
        />
      </Map>
    </div>
  );
};

IraqMap.propTypes = {
  // city: PropTypes.string.isRequired,
  setCity: PropTypes.func.isRequired,
};

export default IraqMap;
