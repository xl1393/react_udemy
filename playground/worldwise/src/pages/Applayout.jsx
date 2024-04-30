//import AppNav from "../components/AppNav";
import Sidebar from "../components/Sidebar";
import styles from "./Applayout.module.css";
export default function Applayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
    </div>
  );
}
