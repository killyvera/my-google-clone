import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();

const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const ResultContextProvider = ({children}) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("pikachu");

  const getResults = async (type) => {
    setIsLoading(true);
    const response = await fetch(`${baseUrl}${type}`, {
      method: "GET",
      headers: {
        "X-User-Agent": "desktop",
        "X-Proxy-Location": "CA",
        "X-RapidAPI-Key": "1230ab2367mshbed17cb00eef499p17a970jsnca6cd9385927",
        "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
      },
    });
    const data = await response.json();

    if(type.includes("/news")) {
      setResults(data.entries);
    }else if (type.includes("/image")){
      setResults(data.image_results);
    }else if (type.includes("/search")){
      setResults(data.results);
    }
    else {
      setResults(data.results);
    }
    console.log(data);
    setIsLoading(false);
  }
  return(
    <ResultContext.Provider value ={{getResults, results, searchTerm, setSearchTerm, isLoading}} >
        {children}
    </ResultContext.Provider>
  )
};

export const useResultsContext = () => useContext(ResultContext);

