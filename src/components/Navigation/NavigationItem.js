import styles from "./NavigationItem.module.css";

const NavigationItem = (props) => {
  return (
    <div className={styles.btn}>
      <button>{props.children}</button>
    </div>
  );
};

export default NavigationItem;
