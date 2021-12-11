import styles from './Settings.module.css'
import SettingsContent from './SettingsContent';
import SettingsNav from './SettingsNav';

const Settings = () => {
  return (
    <div className={styles.container}>
      <SettingsNav />
      <SettingsContent />
    </div>
  );
};

export default Settings;
