import React from "react";
import ReactMapGL from "react-map-gl";

const IraqMap = () => {
  const [viewport, setViewport] = React.useState({
    latitude: 33.306,
    longitude: 44.3827,
    zoom: 8,
    width: "60vw",
    height: "60vh",
  });

  return (
    <ReactMapGL
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      {...viewport}
      onViewportChange={(viewport) => setViewport(viewport)}
    ></ReactMapGL>
  );
};

export default IraqMap;
