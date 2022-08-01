import React, { useState, useEffect } from "react";
import axios from "axios";
import GiphySearch from "./GiphySearch";
import GifList from "./GifList";

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("cat");

  const initSearch = (value) => setQuery(value);
  useEffect(() => {
    axios(
      `https://api.giphy.com/v1/gifs/search?api_key=f3b8PiHqEC58PxYkUN0KluDjNK6pTufN&q=${query}&limit=1`
    )
      .then((res) => setData(res.data.data))
      .catch((error) => console.log("Error", error))
  }, [query]);

  return (
    <>
      <div>
        <h1 >Giphy Search</h1>
        <GiphySearch onSearch={initSearch} />
        <GifList data={data} />
      </div>
    </>
  );
}

export default App;