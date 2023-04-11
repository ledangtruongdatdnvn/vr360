import BananaMarker from "../assets/icons/banana-marker.gif";
export const constants = {
  REACT_APP_MAP_ACCESS_TOKEN: process.env.REACT_APP_MAP_ACCESS_TOKEN,
  REACT_APP_BASE_URL_FAKE_360_IMAGE:
    process.env.REACT_APP_BASE_URL_FAKE_360_IMAGE,
  REACT_APP_MAP_STYLE_LIGHT: process.env.REACT_APP_MAP_STYLE_LIGHT,
  REACT_APP_MAP_STYLE_DARK: process.env.REACT_APP_MAP_STYLE_DARK,
  REACT_APP_MAP_STYLE_STREETS: process.env.REACT_APP_MAP_STYLE_STREETS,
  REACT_APP_MAP_STYLE_OUTDOORS: process.env.REACT_APP_MAP_STYLE_OUTDOORS,
  REACT_APP_MAP_STYLE_SATELLITE: process.env.REACT_APP_MAP_STYLE_SATELLITE,
  REACT_APP_MAP_STYLE_SATELLITE_STREETS:
    process.env.REACT_APP_MAP_STYLE_SATELLITE_STREETS,
  REACT_APP_MAP_STYLE_NAVIGATION_DAY:
    process.env.REACT_APP_MAP_STYLE_NAVIGATION_DAY,
  REACT_APP_MAP_STYLE_NAVIGATION_NIGHT:
    process.env.REACT_APP_MAP_STYLE_NAVIGATION_NIGHT,
  virtualTourNodes: [
    {
      id: "1",
      panorama:
        "https://photo-sphere-viewer-data.netlify.app/assets/" +
        "tour/key-biscayne-1.jpg",
      thumbnail:
        "https://photo-sphere-viewer-data.netlify.app/assets/" +
        "tour/key-biscayne-1-thumb.jpg",
      name: "One",
      links: [{ nodeId: "2" }],
      markers: [
        {
          id: "marker-1",
          image: BananaMarker,
          tooltip: "Da Nang City",
          size: { width: 250, height: 250 },
          anchor: "top left",
          gps: [20, 10, 45],
        },
        {
          id: "marker-2",
          image: BananaMarker,
          tooltip: "HCM city",
          size: { width: 250, height: 250 },
          anchor: "top left",
          gps: [40, 50, 70],
        },
      ],
      gps: [-80.156479, 25.666725, 3],
      panoData: { poseHeading: 327 },
    },
    {
      id: "2",
      panorama:
        "https://photo-sphere-viewer-data.netlify.app/assets/" +
        "tour/key-biscayne-2.jpg",
      thumbnail:
        "https://photo-sphere-viewer-data.netlify.app/assets/" +
        "tour/key-biscayne-2-thumb.jpg",
      name: "Two",
      links: [{ nodeId: "3" }, { nodeId: "1" }],
      markers: [
        {
          id: "marker-1",
          image: BananaMarker,
          tooltip: "Go to this place",
          size: { width: 250, height: 250 },
          anchor: "top left",
          gps: [2, 0, 45],
        },
      ],
      gps: [-80.156168, 25.666623, 3],
      panoData: { poseHeading: 318 },
    },
    {
      id: "3",
      panorama:
        "https://photo-sphere-viewer-data.netlify.app/assets/" +
        "tour/key-biscayne-3.jpg",
      thumbnail:
        "https://photo-sphere-viewer-data.netlify.app/assets/" +
        "tour/key-biscayne-3-thumb.jpg",
      name: "Three",
      links: [{ nodeId: "4" }, { nodeId: "2" }, { nodeId: "5" }],
      gps: [-80.155932, 25.666498, 5],
      panoData: { poseHeading: 328 },
    },
    {
      id: "4",
      panorama:
        "https://photo-sphere-viewer-data.netlify.app/assets/" +
        "tour/key-biscayne-4.jpg",
      thumbnail:
        "https://photo-sphere-viewer-data.netlify.app/assets/" +
        "tour/key-biscayne-4-thumb.jpg",
      name: "Four",
      links: [{ nodeId: "3" }, { nodeId: "5" }],
      gps: [-80.156089, 25.666357, 3],
      panoData: { poseHeading: 78 },
    },
    {
      id: "5",
      panorama:
        "https://photo-sphere-viewer-data.netlify.app/assets/" +
        "tour/key-biscayne-5.jpg",
      thumbnail:
        "https://photo-sphere-viewer-data.netlify.app/assets/" +
        "tour/key-biscayne-5-thumb.jpg",
      name: "Five",
      links: [{ nodeId: "6" }, { nodeId: "3" }, { nodeId: "4" }],
      gps: [-80.156292, 25.666446, 2],
      panoData: { poseHeading: 190 },
    },
    {
      id: "6",
      panorama:
        "https://photo-sphere-viewer-data.netlify.app/assets/" +
        "tour/key-biscayne-6.jpg",
      thumbnail:
        "https://photo-sphere-viewer-data.netlify.app/assets/" +
        "tour/key-biscayne-6-thumb.jpg",
      name: "Six",
      links: [{ nodeId: "5" }, { nodeId: "7" }],
      gps: [-80.156465, 25.666496, 2],
      panoData: { poseHeading: 328 },
    },
    {
      id: "7",
      panorama:
        "https://photo-sphere-viewer-data.netlify.app/assets/" +
        "tour/key-biscayne-7.jpg",
      thumbnail:
        "https://photo-sphere-viewer-data.netlify.app/assets/" +
        "tour/key-biscayne-7-thumb.jpg",
      name: "Seven",
      links: [{ nodeId: "6" }],
      gps: [-80.15707, 25.6665, 3],
      panoData: { poseHeading: 250 },
    },
  ],
  fields: [
    {
      field: "Du Lịch",
      value: 1,
    },
    {
      field: "Bảo Tàng",
      value: 2,
    },
    {
      field: "Di Sản",
      value: 3,
    },
    {
      field: "Trường Học",
      value: 4,
    },
    {
      field: "Nhà Máy",
      value: 5,
    },
    {
      field: "Khu Công Nghiệp",
      value: 6,
    },
    {
      field: "Bất động sản",
      value: 7,
    },
    {
      field: "Trang Trại",
      value: 8,
    },
    {
      field: "Showroom",
      value: 9,
    },
    {
      field: "Triễn Lãm",
      value: 10,
    },
  ],
  mapStyle: [
    {
      value: "STREETS",
      label: "Streets",
    },
    {
      value: "OUTDOORS",
      label: "Outdoors",
    },
    {
      value: "SATELLITE",
      label: "Satellite",
    },
    {
      value: "SATELLITESTREETS",
      label: "Satellite Streets",
    },
    {
      value: "NAVIGATIONDAY",
      label: "Navigation Day",
    },
    {
      value: "NAVIGATIONNIGHT",
      label: "Navigation Night",
    },
    {
      value: "OTHERS",
      label: "Others",
    },
  ],
};
