import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GiftGrid } from "./components/GiftGrid";

const GiftExprestApp = () => {
  const [categories, setcategories] = useState([""]);

  return (
    <>
      <h2> GitfApp</h2>
      <AddCategory setcategories={setcategories} />
      <hr />

      <ol>
        {
            categories.map((category) => (
            <GiftGrid key={category} category={category}/>
            ))
        }
      </ol>
    </>
  );
};

export default GiftExprestApp;
