import { Box, Grid } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import mapMarkerBlueSvg from "../../assets/icons/map-marker-blue.svg";
import { createContext } from "react";
import { loadMap } from "../../utils/MapProcess";
import FieldPicker from "./components/FieldPicker";
import DarkModePicker from "./components/DarkModePicker";
import LocationInformationCard from "./components/LocationInformationCard";
import MapStylePicker from "./components/MapStylePicker";
import ScreenPicker from "./components/ScreenPicker";
import Zoom from "./components/Zoom";
import "./index.scss";
import { constants } from "../../constants";

export const MapContext = createContext(null);
const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [mapContextValue, setMapContextValue] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isShowMode, setIsShowMode] = useState(false);
  const [mapStyle, setMapStyle] = useState("REACT_APP_MAP_STYLE_STREETS");
  useEffect(() => {
    if (map.current) {
      setMapContextValue(map.current);
      return; // initialize map only once
    }
    // Khởi tạo bản đồ
    map.current = loadMap(
      mapContainer.current,
      isShowMode
        ? isDarkMode
          ? constants.REACT_APP_MAP_STYLE_DARK
          : constants.REACT_APP_MAP_STYLE_LIGHT
        : constants[`${mapStyle}` as keyof typeof constants]
    );
    if (map.current) {
      setMapContextValue(map.current);
    }

    (map.current as any).on("load", () => {
      // Thêm icon từ svg vào bản đồ, ngoài ra cũng có thể thêm từ png, jpeg
      const mapMarkerBlue = new Image(40, 40);
      mapMarkerBlue.onload = () =>
        (map.current as any).addImage("map-marker-blue", mapMarkerBlue);
      mapMarkerBlue.src = mapMarkerBlueSvg;

      // Thêm source tọa độ
      (map.current as any).addSource("markers", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              properties: {
                "marker-type": "blue",
                icon: "map-marker-blue",
              },
              geometry: {
                type: "Point",
                coordinates: [105.84228515625, 21.022982546427425],
              },
            },
          ],
        },
      });

      // Thêm layer hiển thị
      (map.current as any).addLayer({
        id: "markers",
        type: "symbol",
        source: "markers",
        layout: {
          // 'icon-image': ['match', ['get', 'marker-type'], 'red', 'map-marker-red', 'map-marker-blue'],
          "icon-image": "{icon}",
          "icon-allow-overlap": true,
          "icon-size": 1,
        },
      });
      // Phần ni a add thêm cho e biết thui
      (map.current as any).addSource("earthquakes", {
        type: "geojson",
        // Point to GeoJSON data. This example visualizes all M1.0+ earthquakes
        // from 12/22/15 to 1/21/16 as logged by USGS' Earthquake hazards program.
        data: "https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson",
        cluster: true,
        clusterMaxZoom: 14, // Max zoom to cluster points on
        clusterRadius: 50, // Radius of each cluster when clustering points (defaults to 50)
      });
      (map.current as any).addLayer({
        id: "clusters",
        type: "circle",
        source: "earthquakes",
        filter: ["has", "point_count"],
        paint: {
          // Use step expressions (https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)
          // with three steps to implement three types of circles:
          //   * Blue, 20px circles when point count is less than 100
          //   * Yellow, 30px circles when point count is between 100 and 750
          //   * Pink, 40px circles when point count is greater than or equal to 750
          "circle-color": [
            "step",
            ["get", "point_count"],
            "#51bbd6",
            100,
            "#f1f075",
            750,
            "#f28cb1",
          ],
          "circle-radius": [
            "step",
            ["get", "point_count"],
            20,
            100,
            30,
            750,
            40,
          ],
        },
      });
      (map.current as any).addLayer({
        id: "cluster-count",
        type: "symbol",
        source: "earthquakes",
        filter: ["has", "point_count"],
        layout: {
          "text-field": ["get", "point_count_abbreviated"],
          "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"],
          "text-size": 12,
        },
      });
      (map.current as any).addLayer({
        id: "unclustered-point",
        type: "circle",
        source: "earthquakes",
        filter: ["!", ["has", "point_count"]],
        paint: {
          "circle-color": "#11b4da",
          "circle-radius": 4,
          "circle-stroke-width": 1,
          "circle-stroke-color": "#fff",
        },
      });
      // inspect a cluster on click
      (map.current as any).on("click", "clusters", (e: any) => {
        const features = (map.current as any).queryRenderedFeatures(e.point, {
          layers: ["clusters"],
        });
        const clusterId = features[0].properties.cluster_id;
        (map.current as any)
          .getSource("earthquakes")
          .getClusterExpansionZoom(clusterId, (err: any, zoom: any) => {
            if (err) return;

            (map.current as any).easeTo({
              center: features[0].geometry.coordinates,
              zoom: zoom,
            });
          });
      });

      // When a click event occurs on a feature in
      // the unclustered-point layer, open a popup at
      // the location of the feature, with
      // description HTML from its properties.
      (map.current as any).on("click", "unclustered-point", (e: any) => {
        const coordinates = e.features[0].geometry.coordinates.slice();
        const mag = e.features[0].properties.mag;
        const tsunami = e.features[0].properties.tsunami === 1 ? "yes" : "no";

        // Ensure that if the map is zoomed out such that
        // multiple copies of the feature are visible, the
        // popup appears over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(`magnitude: ${mag}<br>Was there a tsunami?: ${tsunami}`)
          .addTo(map);
      });

      (map.current as any).on("mouseenter", "clusters", () => {
        (map.current as any).getCanvas().style.cursor = "pointer";
      });
      (map.current as any).on("mouseleave", "clusters", () => {
        (map.current as any).getCanvas().style.cursor = "";
      });
    });

    (map.current as any).on("mouseenter", "markers", () => {
      (map.current as any).getCanvas().style.cursor = "pointer";
    });

    (map.current as any).on("mouseleave", "markers", () => {
      (map.current as any).getCanvas().style.cursor = "";
    });
    (map.current as any).on("zoom", () => {
      console.log("a");
    });
  }, []);

  useEffect(() => {
    const showSummaryPopup = (lngLat: any) => {
      const popup = new mapboxgl.Popup({
        className: "info-popup",
        maxWidth: "300px",
      });
      const popupContent = document.createElement("div");
      popupContent.className = "info-popup-container";
      popup.setLngLat(lngLat).setDOMContent(popupContent).addTo(map.current);
    };
    const onMarkerClick = (e: any) => {
      const coordinates = e.features[0].geometry.coordinates.slice();
      showSummaryPopup(coordinates);
      const root = document.getElementsByClassName("info-popup-container")[0];
      ReactDOM.createRoot(root).render(<LocationInformationCard />);
    };

    (map.current as any).on("click", "markers", onMarkerClick);

    return () => {
      (map.current as any).off("click", "markers", onMarkerClick);
    };
  }, []);
  const handleModeChange = (isDarkMode: any) => {
    if (isDarkMode) {
      setIsDarkMode(true);
      setMapStyle("REACT_APP_MAP_STYLE_DARK");
      (map.current as any).setStyle(constants.REACT_APP_MAP_STYLE_DARK);
    } else {
      setIsDarkMode(false);
      setMapStyle("REACT_APP_MAP_STYLE_LIGHT");
      (map.current as any).setStyle(constants.REACT_APP_MAP_STYLE_LIGHT);
    }
  };
  const handleStyleChange = (e: any) => {
    if (e.target.value === "STREETS") {
      setIsShowMode(false);
      (map.current as any).setStyle(constants.REACT_APP_MAP_STYLE_STREETS);
    } else if (e.target.value === "OUTDOORS") {
      setIsShowMode(false);
      (map.current as any).setStyle(constants.REACT_APP_MAP_STYLE_OUTDOORS);
    } else if (e.target.value === "SATELLITE") {
      setIsShowMode(false);
      (map.current as any).setStyle(constants.REACT_APP_MAP_STYLE_SATELLITE);
    } else if (e.target.value === "SATELLITESTREETS") {
      setIsShowMode(false);
      (map.current as any).setStyle(
        constants.REACT_APP_MAP_STYLE_SATELLITE_STREETS
      );
    } else if (e.target.value === "NAVIGATIONDAY") {
      setIsShowMode(false);
      (map.current as any).setStyle(
        constants.REACT_APP_MAP_STYLE_NAVIGATION_DAY
      );
    } else if (e.target.value === "NAVIGATIONNIGHT") {
      setIsShowMode(false);
      (map.current as any).setStyle(
        constants.REACT_APP_MAP_STYLE_NAVIGATION_NIGHT
      );
    } else if (e.target.value === "OTHERS") {
      setIsShowMode(true);
      handleModeChange(false);
    }
  };
  return (
    <MapContext.Provider value={mapContextValue}>
      <Box component="div" ref={mapContainer} className="map-container" />
      <Box component="div" position="absolute" top="0" width="100%">
        <Grid
          container
          style={{
            background: "black",
            padding: "8px",
            opacity: "0.7",
            display: "flex",
            justifyContent: "flex-start",
          }}
          spacing={2}
        >
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <MapStylePicker onStyleChange={handleStyleChange} />
          </Grid>
          {isShowMode && (
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <DarkModePicker
                isDarkMode={isDarkMode}
                onModeChange={handleModeChange}
              />
            </Grid>
          )}
          <Grid item xs={6} sm={5} md={4} lg={3} xl={3}>
            <FieldPicker />
          </Grid>
        </Grid>
      </Box>
      <Box
        component="div"
        position="absolute"
        bottom="64px"
        right="16px"
        style={{
          background: "black",
          padding: "8px",
          opacity: "0.7",
        }}
      >
        <Zoom />
        <ScreenPicker />
      </Box>
    </MapContext.Provider>
  );
};
export default Map;
