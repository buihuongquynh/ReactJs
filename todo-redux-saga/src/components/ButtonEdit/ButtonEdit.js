import React from 'react';
const ButtonEdit = (props) =>{
    const {
        handleEdit,
        itemId
    } = props
    return(
        <div className="edit">
             <p onClick ={()=>handleEdit(itemId)}>Edit</p>
        </div>
    );
};
export default ButtonEdit; 