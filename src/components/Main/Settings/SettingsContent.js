import styles from "./SettingsContent.module.css";
import Button from "@mui/material/Button";

import visa from "../../../assets/visa.png";
import visaSmall from "../../../assets/visa-small.png";
import paypal from "../../../assets/paypal.png";
import database from "../../../assets/database.png";

const SettingsContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.billing}>
        <h3>Billing Period</h3>
        <div className={styles.expiry}>
          <h5>Monthly</h5>
          <p>Next Renewal: 25th Dec 2021</p>
        </div>
        <div className={styles.planSetting}>
          <Button variant="outlined" className={styles.change}>
            Change Plan
          </Button>
          <Button variant="outlined" className={styles.cancel}>
            Cancel Subscription
          </Button>
        </div>

        <h3>Payment Method</h3>
        <button className={styles.paymentOption}>
          <img src={visa} alt="card" />
          <div className={styles.details}>
            <p className={styles.cardNo}>**** **** **** 7891</p>
            <h3 className={styles.cardName}>LEER MEESTER</h3>
            <p className={styles.cardExpiry}>Expiry: Nov 2023</p>
          </div>
        </button>
        <div className={styles.paymentMethods}>
          <Button variant="outlined" className={styles.addCard}>
            + Add another card
          </Button>
          <button className={styles.method}>
            <img src={visaSmall} alt="visa" />
          </button>
          <button className={styles.method}>
            <img src={paypal} alt="paypal" />
          </button>
          <button className={styles.method}>
            <img src={database} alt="database" />
          </button>
        </div>

        <h3>Billing Overview</h3>
        <div className={styles.overview}>
          <button className={styles.service}>
            <p className={styles.name}>Robot A</p>
            <p className={styles.price}>$30</p>
          </button>
          <button className={styles.service}>
            <p className={styles.name}>Robot B</p>
            <p className={styles.price}>$40</p>
          </button>
          <button className={styles.service}>
            <p className={styles.name}>Support</p>
            <p className={styles.price}>$20</p>
          </button>
        </div>
      </div>
      <Button variant="outlined" className={styles.Button}>
        Save Setting
      </Button>
    </div>
  );
};

export default SettingsContent;
