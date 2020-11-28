import React from 'react';
import ButtonDelete from "../ButtonDelete/ButtonDelete"
import ButtonEdit from '../ButtonEdit/ButtonEdit';
const ListItem = (props) =>{
    const{
        items,
        handleDelete,
        handleEdit
    } = props
    const listItem = items.map(item =>{
        return(
            <div className ="list_item">
                <div className="row">
                   <p className ="border">{item.name}</p>
                    <p className ="border">{item.age}</p>
                    <ButtonDelete
                    itemId = {item.id}
                    handleDelete = {handleDelete}
                  />
                  <ButtonEdit
                  itemId = {item.id}
                  handleEdit = {handleEdit}
                  />
                </div>
            </div>
        );
    })
    return(
        <>
        {listItem}
        </>
    );
  
};
export default ListItem;