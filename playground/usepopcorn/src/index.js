import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StarRating from './StarRating';
import { useState } from "react";


function Test(){
  const [movieRating, setMovieRating] = useState(0)
  return(
    <>
    <StarRating color='blue' maxRating={10} onRating={setMovieRating} />
    <p> the movie is rated at {movieRating}</p>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
   {/*} <StarRating maxRating={5} messages={["terrible", 'bad','OK','good','amazing']} defaultRating={5} />
  <Test />*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
