import MapNav from "./MapNav";
import styles from "./Map.module.css";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import Button from '@mui/material/Button';
import PinDropIcon from '@mui/icons-material/PinDrop';
import WrongLocationIcon from '@mui/icons-material/WrongLocation';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';


const Map = () => {
  return (
    <div>
      <MapNav />
      <div className={styles.mapContent}>
        <div className={styles.sideNav}>
        <Button color="secondary"><AddLocationIcon fontSize="large" /></Button>
        <Button color="secondary"><PinDropIcon fontSize="large" /></Button>
        <Button color="secondary"><WrongLocationIcon fontSize="large" /></Button>
        <Button color="secondary"><SettingsBackupRestoreIcon fontSize="large" /></Button>
        <Button color="secondary"><ZoomOutMapIcon fontSize="large" style={{transform: "rotate(45deg)"}} /></Button>
        </div>
        <div className={styles.mapArea}><h2>No Map Loaded</h2></div>
      </div>
    </div>
  );
};

export default Map;
