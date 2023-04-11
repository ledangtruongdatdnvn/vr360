import InfoIcon from "@mui/icons-material/Info";
import {
  Box,
  Button,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { styled } from "@mui/system";
import DaNangCity from "../../../../assets/images/danangcity.jpg";
import "./index.scss";

const StyledButton = styled(Button)({
  transition: "all 0.3s ease !important",
  height: "36px",
  borderRadius: "4px",
  color: "var(--main-content-text-color) !important",
  padding: "6px 16px",
  fontWeight: "400",
  fontFamily: "Sarabun, sans-serif",
  fontSize: "14px",
  border: "1px solid var(--main-content-text-color) !important",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: "#0055a5",
    color: "var(--main-bg-color) !important",
  },
  "&:active": {
    backgroundColor: "#0055a5",
    color: "var(--main-bg-color) !important",
  },
});

const LocationInformationCard = () => {
  const handleClickButtonViewMore = () => {
    window.open("http://localhost:3000/virtual-tourism-3d", "_blank");
  };
  return (
    <Stack direction="column">
      <Box component="div" className="card-container-header">
        <InfoIcon
          className="icon"
          sx={{ width: "23px", height: "23px", color: "var(--main-bg-color)" }}
        />
        Thông tin chi tiết
      </Box>
      <Box component="div" className="card-container-image">
        <img src={DaNangCity} alt="city" width="100%" />
      </Box>
      <Box component="div" className="card-container-content">
        <TableContainer component={Paper}>
          <Table size="small">
            <TableBody>
              <TableRow>
                <TableCell align="left" className="table-header">
                  <b>Thành Phố</b>
                </TableCell>
                <TableCell className="table-content">
                  <p>Đà Nẵng</p>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left" className="table-header">
                  <b>Điểm du lịch</b>
                </TableCell>
                <TableCell className="table-content">
                  <p>
                    Có 37 điểm du lịch nổi tiếng ở nơi đây với những cảnh đẹp
                    thiên nhiên hùng vĩ
                  </p>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left" className="table-header">
                  <b>Khách sạn</b>
                </TableCell>
                <TableCell className="table-content">
                  <p>Có 22 khách sạn nổi bật với cảnh biển tuyệt đẹp</p>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box component="div" className="card-footer">
        <StyledButton onClick={handleClickButtonViewMore}>
          Xem thêm
        </StyledButton>
      </Box>
    </Stack>
  );
};
export default LocationInformationCard;
