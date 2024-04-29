import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import AppNav from "../components/AppNav";

export default function Homepage() {
  return (
    <div>
      <PageNav />
      <AppNav />
      <h3>HomePage</h3>
      <Link to="/app"> Go to the App</Link>
    </div>
  );
}
