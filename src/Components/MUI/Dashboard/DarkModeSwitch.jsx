import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import PropTypes from "prop-types";
import { MuiBox } from "../../../MUIComponents/Mui";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  width: 48,
  height: 48,
  m: 0,
  backgroundColor: theme.palette.background.black,
  borderRadius: "50%",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
  "& .icon": {
    width: "130%",
    height: "130%",
  },
}));

export const DarkModeSwitch = ({ darkMode, toggleDarkMode }) => {
  return (
    <StyledIconButton sx={{}} onClick={toggleDarkMode}>
      <MuiBox
        sx={{
          borderRadius: "50%",
          border: "1px solid #cccccc",
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 1,
        }}
      >
        {darkMode === "dark" ? (
          <img src="/sun.svg" alt="Light Mode" className="icon" />
        ) : (
          <img src="/moon.svg" alt="Dark Mode" className="icon" />
        )}
      </MuiBox>
    </StyledIconButton>
  );
};

DarkModeSwitch.propTypes = {
  darkMode: PropTypes.string.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};
