import React from "react";
import PropTypes from "prop-types";
import { Map, GeoJSON } from "react-leaflet";
import mapData from "../../variables/IraqMap.json";
import "leaflet/dist/leaflet.css";

const IraqMap = ({ setSnackbarInfo }) => {
  const cityStyle = {
    fillColor: "gray",
    fillOpacity: 0.5,
    color: "black",
    weight: 2,
  };

  const changeCityColor = (event) => {
    // setCity(event.target.feature.properties.ADMIN);
    if (event.target.feature.properties.ADMIN !== "الأنبار") {
      setSnackbarInfo({
        open: true,
        message: `در حال حاضر در استان ${event.target.feature.properties.ADMIN} انتخاباتی وجود ندارد`,
        color: "info",
      });
    }
  };

  const onEachProvince = (province, layer) => {
    const provinceName = province.properties.ADMIN;
    layer.bindTooltip(provinceName, {
      permanent: true,
      direction: "top",
      opacity: 1,
      offset: [30, 3],
    });
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
  setSnackbarInfo: PropTypes.func.isRequired,
  // setCity: PropTypes.func.isRequired,
};

export default IraqMap;
