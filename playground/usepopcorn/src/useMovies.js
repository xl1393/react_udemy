import { useState, useEffect} from "react";
const KEY = "1ba0e29e";

export function useMovies(query){
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    useEffect(
        
       
        function () {
            //callback?.();
          const controller = new AbortController();
    
          async function fetchMovies() {
            try {
              setIsLoading(true);
              setError("");
              const res = await fetch(
                `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
                { signal: controller.signal },
              );
    
              if (!res.ok) throw new Error("Something went wrong");
              const data = await res.json();
              if (data.Response === "False") throw new Error("Movie not Found");
              setMovies(data.Search);
              setIsLoading(false);
            } catch (err) {
              setError(err.message);
            } finally {
              setIsLoading(false);
            }
          }
          if (query.length < 3) {
            setMovies([]);
            setError("");
            return;
          }
          fetchMovies();
    
          return function () {
            controller.abort();
          };
        },
        [query],
      );

      return {movies, isLoading,error};
}