import React from "react";

const Card = ({data}) => {
  console.log(data);

  const readMore = (url) =>{
    window.open(url);
  }

  return <div className="cardContainer">
    {data.map((curItem, index) =>{
      if(!curItem.urlToImage){
        return null;
      }
      else{
        return(
          <div className="card" key={index}>
             <img src={curItem.urlToImage}/>
             <div className="content">
                <a className="title" onClick={()=>{window.open(curItem.url)}}>{curItem.title+": "}</a>
                <a>{curItem.description}</a>
                <button onClick={()=>{window.open(curItem.url)}}>Read More</button>
             </div>
          </div>
        )
      }
      
    })}
  </div>;
};

export default Card;
