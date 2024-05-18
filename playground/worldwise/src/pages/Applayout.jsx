//import AppNav from "../components/AppNav";
import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import styles from "./Applayout.module.css";
import User from "../components/User";
export default function Applayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
}
