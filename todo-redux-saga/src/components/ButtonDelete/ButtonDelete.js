import React from 'react';
const ButtonDelete = (props) =>{
  const{
      handleDelete,
      itemId
  } = props
  return(
      <div className ="delete">
         <p onClick ={()=>handleDelete(itemId)}>delete</p>
      </div>
    );
  };
export default ButtonDelete;