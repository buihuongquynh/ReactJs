import React from 'react';
const ButtonAdd = (props) =>{
    const {
        show,
        handleAdd,
        changeName,
        changeAge,
        saveItem
    } = props
    return(
        <div className="add">
            <div className ="text">
            <h1 onClick={handleAdd}>Add Item</h1></div>
        { show ?
            <div className = "input">
                <input type = "text" placeholder ="name ?" onChange = {changeName}/>
                <input type = "number" placeholder ="age ?" onChange = {changeAge}/>
                <div className ="text"><h2 onClick = {saveItem}>Add</h2></div>
            </div>
            : null 
        }
        </div>
    );
};
export default ButtonAdd;