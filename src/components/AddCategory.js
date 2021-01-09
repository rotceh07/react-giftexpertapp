import React, { useState } from "react";
import Proptypes from 'prop-types';

export const AddCategory = ({setcategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handlerInput = (e)=>{
        setInputValue(e.target.value);      
    }
     
    const handlerSubmit = (e) =>{
        e.preventDefault();
        
        if(inputValue.trim().length>2){
            setcategories( cate =>[inputValue, ...cate ]);
            setInputValue('');
        }
    }

  return (
    
    <form onSubmit = { handlerSubmit }>
        
        <input 
            type="text" 
            value={inputValue} 
            onChange={ handlerInput}>

        </input>
    </form>
    
    
  );
};


AddCategory.prototype = {
    setInputValue: Proptypes.func.isRequired
}