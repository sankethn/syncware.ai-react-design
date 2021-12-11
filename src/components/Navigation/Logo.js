import styles from "./Logo.module.css"

const Logo = () => {
  return (
    <h2>
      <span className={styles.sync}>SYNC</span>
      <span className={styles.ware}>WARE</span>
      <span className={styles.ai}>.AI</span>
    </h2>
  );
};

export default Logo;
