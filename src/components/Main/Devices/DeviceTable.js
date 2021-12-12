import LineChart from "./LineChart";
import Switch from '@mui/material/Switch';
import styles from "./DeviceTable.module.css";
import arrow from "../../../assets/arrow.png";

const DeviceTable = () => {
  return (
    <table className={styles.table}>
      <tr>
        <th>Device name</th>
        <th>Variables</th>
        <th>Signal Value</th>
        <th>Basic Graph</th>
        <th>Indicator</th>
      </tr>
      <tr>
        <td>NFT Computer 10</td>
        <td>
          Boolean, Barcode, Dummy, Inter, Int64, String
          <button className={styles.icon}>
            <img src={arrow} alt="arrow" />
          </button>
        </td>
        <td>True</td>
        <td>
          <LineChart
            data={[
              { month: "Jan", googlePlay: 13 },
              { month: "Feb", googlePlay: 13 },
              { month: "Mar", googlePlay: 12 },
              { month: "Apr", googlePlay: 13 },
              { month: "May", googlePlay: 15 },
            ]}
          />
        </td>
        <td><Switch defaultChecked color="warning" size="medium" /></td>
      </tr>
      <tr>
        <td>Asimo Honda 2k11</td>
        <td>
          Inter, Int64, String, Dummy
          <button className={styles.icon}>
            <img src={arrow} alt="arrow" />
          </button>
        </td>
        <td>200</td>
        <td>
          <LineChart
            data={[
              { month: "Jan", googlePlay: 5 },
              { month: "Feb", googlePlay: 6 },
              { month: "Mar", googlePlay: 5 },
              { month: "Apr", googlePlay: 6 },
              { month: "May", googlePlay: 5 },
            ]}
          />
        </td>
        <td><Switch color="warning" size="medium" /></td>
      </tr>
      <tr>
        <td>Scanner WebX</td>
        <td>
          Barcode, Dummy, Boolean
          <button className={styles.icon}>
            <img src={arrow} alt="arrow" />
          </button>
        </td>
        <td>False</td>
        <td>
          <LineChart
            data={[
              { month: "Jan", googlePlay: 20 },
              { month: "Feb", googlePlay: 22 },
              { month: "Mar", googlePlay: 21.5 },
              { month: "Apr", googlePlay: 21 },
              { month: "May", googlePlay: 20 },
            ]}
          />
        </td>
        <td><Switch color="warning" size="medium" /></td>
      </tr>
      <tr>
        <td>Yamaha RoboXG12</td>
        <td>
          String, Integer, Float, Dummy
          <button className={styles.icon}>
            <img src={arrow} alt="arrow" />
          </button>
        </td>
        <td>Teelop GenX</td>
        <td>
          <LineChart
            data={[
              { month: "Jan", googlePlay: 100 },
              { month: "Feb", googlePlay: 100.2 },
              { month: "Mar", googlePlay: 100.3 },
              { month: "Apr", googlePlay: 101 },
              { month: "May", googlePlay: 100.8 },
            ]}
          />
        </td>
        <td><Switch color="warning" size="medium" /></td>
      </tr>
    </table>
  );
};

export default DeviceTable;
