import styles from "./SettingsNavButton.module.css";

const SettingsNavButton = (props) => {
  const isActive = props.className ? true : false;
  console.log(isActive)
  return <button className={`${styles.btn} ${isActive ? styles.active : ""}`}>{props.children}</button>;
};

export default SettingsNavButton;
