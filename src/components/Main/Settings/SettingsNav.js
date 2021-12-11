import styles from "./SettingsNav.module.css";
import SettingsNavButton from "./SettingsNavButton";

import LoopIcon from '@mui/icons-material/Loop';
import SecurityIcon from '@mui/icons-material/Security';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import LanguageIcon from '@mui/icons-material/Language';
import SummarizeIcon from '@mui/icons-material/Summarize';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import RefreshIcon from '@mui/icons-material/Refresh';

const SettingsNav = () => {
  return (
    <div className={styles.container}>
      <SettingsNavButton><LoopIcon />You And Syncware</SettingsNavButton>
      <SettingsNavButton>Your Team</SettingsNavButton>
      <SettingsNavButton><SecurityIcon />Privacy And Security</SettingsNavButton>
      <SettingsNavButton><AccountBoxIcon />Appearence</SettingsNavButton>
      <SettingsNavButton><RocketLaunchIcon />On Startup</SettingsNavButton>
      <SettingsNavButton><AccountTreeIcon />Network Information</SettingsNavButton>
      <SettingsNavButton><LanguageIcon />Language</SettingsNavButton>
      <SettingsNavButton><DesktopWindowsIcon />System Setting</SettingsNavButton>
      <SettingsNavButton className={"active"}><SummarizeIcon />Billing Setting</SettingsNavButton>
      <SettingsNavButton><RefreshIcon />Reset Settings</SettingsNavButton>
    </div>
  );
};

export default SettingsNav;
