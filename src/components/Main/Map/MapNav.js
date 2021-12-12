import SelectFloor from "./SelectFloor";
import Upload from "./Upload";
import Origin from "@mui/icons-material/ViewInAr";
import Button from "@mui/material/Button";
import ButtonGroup from '@mui/material/ButtonGroup';

import styles from "./MapNav.module.css";
import SelectGrid from "./SelectGrid";
import SelectRobot from "./SelectRobot";

const MapNav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.leftNav}>
        <Upload />
        <h3 style={{marginRight: "10px", fontWeight: "500"}}>Warehouse Heineken</h3>
        <SelectFloor />
        <SelectGrid />
        <Button variant="contained" style={{marginRight: "10px"}}>
          <Origin fontSize="medium" />
        </Button>
        <SelectRobot />
      </div>
      <ButtonGroup variant="outlined" aria-label="outlined button group" color="warning">
        <Button>Read Map Plan</Button>
        <Button>Apply Map Plan</Button>
      </ButtonGroup>
    </nav>
  );
};

export default MapNav;
