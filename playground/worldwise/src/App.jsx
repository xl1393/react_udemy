//import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pricing from "./pages/Pricing";
import Product from "./pages/product";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import Applayout from "./pages/Applayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import { useState } from "react";
import { useEffect } from "react";
export default function App_() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(function () {
    async function fetchCities() {
      try {
        const res = await fetch(`http://localhost:8080/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("some error");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);
  console.log(cities);
  console.log(isLoading);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="app" element={<Applayout />}>
          <Route index element={<p> default list of city</p>} />
          <Route
            path="cities"
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route path="countries" element={<CountryList />} />
          <Route path="form" element={<p> a form should be here</p>} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
