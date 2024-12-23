import React, { useEffect, useState } from "react";
import Card from "./Card";

const Newsapp = () => {
  const [search, setSearch] = useState("india");
  const [newsData, setNewsData] = useState(null);
  const API_KEY = "e147a2e28dfc488da9ca9f0dc99f07f8";

  const getData = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
    );
    const jsonData = await response.json();
    console.log(jsonData);
    console.log(jsonData.articles);
    setNewsData(jsonData.articles);
  };

  useEffect(() =>{
    getData();
  }, [])

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const userInput = (e) => {
    setSearch(e.target.value);
    getData();
  }

  return (
    <div>
      <nav>
        <div>
          <h1>Trendy News</h1>
        </div>
        <ul>
          <a>All News</a>
          <a>Trending</a>
        </ul>
        <div className="searchBar">
          <input type="text" placeholder="Search News" value={search} onChange={handleInput} />
          <button onClick={getData}>Search</button>
        </div>
      </nav>

      <div>
        <p className="head">Stay Update with TrendyNews</p>
      </div>

      <div className="categoryBtn">
        <button onClick={userInput} value="sports">Sports</button>
        <button onClick={userInput} value="politics">Politics</button>
        <button onClick={userInput} value="entertainment">Entertainment</button>
        <button onClick={userInput} value="health">Health</button>
        <button onClick={userInput} value="fitness">Fitness</button>
      </div>

      <div>{newsData ? <Card data={newsData} /> : null}</div>
    </div>
  );
};

export default Newsapp;
