import React, { useState, useEffect } from "react";
import axios from "axios";
import Countries from "./components/Countries";

const App = () => {
  const [filter, setFilter] = useState("");
  const [country, setCountry] = useState([]);
  const [search, setSearch] = useState("france");

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/name/france")
      .then((response) => {
        setCountry(response.data);
      });
  }, []);

  console.log(country);

  return (
    <div>
      <Countries country={country} />
    </div>
  );
};

export default App;
