import styles from "./Main.module.css";
import { Route, Routes, useLocation } from "react-router-dom";

import bell from "../../assets/bell.png";
import comment from "../../assets/comment.png";
import account from "../../assets/account.png";
import logout from "../../assets/logout.png";
import DeviceTable from "./Devices/DeviceTable";
import Settings from "./Settings/Settings";

const Main = () => {
  let name = useLocation().pathname.substring(1);
  let heading = name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <div className={styles.container}>
      <nav>
        <h2>{heading}</h2>
        <div>
          <button>
            <img src={bell} alt="bell" />
          </button>
          <button>
            <img src={comment} alt="comment" />
          </button>
          <button className={styles.account}>
            <img src={account} alt="account" />
            Sanket
          </button>
          <button className={styles.logout}>
            <img src={logout} alt="logout" />
            Logout
          </button>
        </div>
      </nav>
      <main>
        <Routes>
          <Route path="/devices" element={<DeviceTable />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
  );
};

export default Main;
