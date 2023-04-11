import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import DialogInformation from "../../components/DialogInformation";
const Home = () => {
  const navigate = useNavigate();
  const [isShowDialogConfirm, setIsShowDialogConfirm] = useState(false);
  const [destination, setDestination] = useState("");
  return (
    <>
      <Button
        onClick={() => {
          setDestination("/map");
          setIsShowDialogConfirm(true);
        }}
      >
        Map
      </Button>
      <Button
        onClick={() => {
          setDestination("/virtual-tourism-3d");
          setIsShowDialogConfirm(true);
        }}
      >
        Virtual Tourism 3D
      </Button>
      {isShowDialogConfirm && (
        <DialogInformation
          title="Confirm"
          content="Are you sure you want to navigate to there?"
          onCancel={() => setIsShowDialogConfirm(false)}
          onConfirm={() => {
            navigate(destination);
          }}
        />
      )}
    </>
  );
};
export default Home;
