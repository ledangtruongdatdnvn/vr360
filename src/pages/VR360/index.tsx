import {
  AutorotatePlugin,
  CompassPlugin,
  GalleryPlugin,
  MarkersPlugin,
  ReactPhotoSphereViewer,
  VirtualTourPlugin,
} from "react-photo-sphere-viewer";
import Loading from "../../assets/icons/loading.gif";
import DaNangCity from "../../assets/images/danangcity.jpg";
import { constants } from "../../constants";
const VR360 = () => {
  const baseUrl = constants.REACT_APP_BASE_URL_FAKE_360_IMAGE;
  const plugins: any = [
    [CompassPlugin],
    [
      VirtualTourPlugin,
      {
        positionMode: "gps",
        renderMode: "3d",
      },
    ],
    [AutorotatePlugin],
    [MarkersPlugin],
    [GalleryPlugin],
  ];
  const loadVirtualTourPlugin = (instance: any) => {
    const virtualTourPlugin = instance.getPlugin(VirtualTourPlugin);
    if (!virtualTourPlugin) return;
    virtualTourPlugin.setNodes(constants.virtualTourNodes, "1");
    const galleryPlugin = instance.getPlugin(GalleryPlugin);
    galleryPlugin.setItems([
      {
        id: "sphere",
        panorama: baseUrl + "sphere.jpg",
        thumbnail: baseUrl + "sphere-small.jpg",
        name: "HCM city",
        options: {
          caption: "Parc national du Mercantour <b>&copy; Damien Sorel</b>",
        },
      },
      {
        id: "sphere-test",
        panorama: baseUrl + "sphere-test.jpg",
        thumbnail: DaNangCity,
        name: "Da Nang City",
        options: {
          caption: "Da Nang has many spectacular views and beautiful sites ",
        },
      },
      {
        id: "key-biscayne",
        panorama: baseUrl + "tour/key-biscayne-1.jpg",
        thumbnail: baseUrl + "tour/key-biscayne-1-thumb.jpg",
        name: "Key Biscayne",
        options: {
          caption: "Cape Florida Light, Key Biscayne <b>&copy; Pixexid</b>",
        },
      },
    ]);
    const markersPlugin = instance.getPlugin(MarkersPlugin);
    markersPlugin.addEventListener("select-marker", ({ marker }: any) => {
      console.log(`Clicked on marker ${marker.id}`);
    });
  };

  const handleReady = (instance: any) => {
    loadVirtualTourPlugin(instance);
  };
  return (
    <ReactPhotoSphereViewer
      container=""
      src={baseUrl + "tour/key-biscayne-1.jpg"}
      height={"100vh"}
      width={"100%"}
      plugins={plugins}
      onReady={handleReady}
      loadingImg={Loading}
      keyboard="always"
      touchmoveTwoFingers={true}
      navbar={[
        "autorotate",
        "zoom",
        "move",
        {
          id: "my-button",
          title: "Toggle panel",
          content: "🆘",
          onClick: () => {
            console.log("hello world");
          },
        },
        "markers",
        "markersList",
        "gallery",
        "caption",
        "fullscreen",
      ]}
    ></ReactPhotoSphereViewer>
  );
};
export default VR360;
