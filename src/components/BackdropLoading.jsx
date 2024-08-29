import React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { styled } from "@mui/material/styles";

const StyledBackdrop = styled(Backdrop)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  color: "#fff",
}));

const BackdropLoading = () => {
  return (
    <StyledBackdrop open={true}>
      <CircularProgress color="inherit" />
    </StyledBackdrop>
  );
};

export default BackdropLoading;
