import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GridGiftItem } from "./GridGiftItem";


export const GiftGrid = ({ category }) => {

const {data:images, loading}  = useFetchGifs(category);


  return (
    <>
      <h3 className="animate__animated animate__bounceS">{category}</h3>
    
      {loading &&<p className="animate__animated animate__flash">Loading</p>}
      
      <div className="card-grid">
        {images.map((img) => (
          <GridGiftItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
