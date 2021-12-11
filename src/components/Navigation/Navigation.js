import Logo from "./Logo";
import NavigationItem from "./NavigationItem";
import styles from "./Navigation.module.css";

import wave from "../../assets/wave.png";
import pie from "../../assets/pie.png";
import devices from "../../assets/devices.png";
import graph from "../../assets/graph.png";
import tool from "../../assets/tool.png";
import pin from "../../assets/pin.png";
import setting from "../../assets/setting.png";
import help from "../../assets/help-desk.png";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className={styles.container}>
      <div>
        <Logo />
        <NavigationItem>
          <img src={wave} alt="wave" />
          Welcome
        </NavigationItem>
        <NavigationItem>
          <img src={pie} alt="pie" />
          Dashboard
        </NavigationItem>
        <Link to="/devices">
          <NavigationItem>
            <img src={devices} alt="devices" />
            Devices
          </NavigationItem>
        </Link>
        <NavigationItem>
          <img src={graph} alt="graph" />
          Business Insights
        </NavigationItem>
        <NavigationItem>
          <img src={tool} alt="tool" />
          System Builder
        </NavigationItem>
        <NavigationItem>
          <img src={pin} alt="pin" />
          Map Layout
        </NavigationItem>
      </div>
      <div>
        <Link to="/settings">
          <NavigationItem>
            <img src={setting} alt="setting" />
            Settings
          </NavigationItem>
        </Link>

        <NavigationItem>
          <img src={help} alt="help" />
          Help
        </NavigationItem>
      </div>
    </div>
  );
};

export default Navigation;
