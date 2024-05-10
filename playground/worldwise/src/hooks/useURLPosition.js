/* eslint-disable no-unused-vars */
import { useSearchParams } from "react-router-dom";
function useURLPosition() {
  const [searchParams, setSearchParams] = useSearchParams();
  const Lat = searchParams.get("lat");
  const Lng = searchParams.get("lng");
  return [Lat, Lng];
}

export default useURLPosition;
