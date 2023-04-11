import { constants } from "../constants";

export const loadMap = (container: any, mapStyle: any) => {
  mapboxgl.accessToken = constants.REACT_APP_MAP_ACCESS_TOKEN;
  return new mapboxgl.Map({
    container,
    style: mapStyle,
    center: [108.2022, 16.0544], // tọa độ trung tâm [lng, lat]
    zoom: 3, // mức zoom
  });
};
