import React, { useState, useEffect, Fragment } from "react";
import ButtonAdd from "./components/ButtonAdd/ButtonAdd";
import { useDispatch, useSelector } from "react-redux";
import ListItem from "./components/listItem/ListItem";
import {
  getDataUser,
  deleteUser,
  editUser,
  addUser,
  getDataUserSuccess
} from "./state/actions";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const dataUser = useSelector((state) => state.allUser.data);

  const [show, setShow] = useState(false);
  const [item, setItem] = useState({
    id: "",
    name: "",
    age: "",
  });

  const [edit, setEdit] = useState(false);
  useEffect(() => {
    dispatch(getDataUser());
  }, [dispatch, getDataUser]);
  console.log(dataUser);
  const handleAdd = () => {
    setShow(true);
  };
  const changeName = (e) => {
    setItem({
      id: item.id,
      name: e.target.value,
      age: item.age,
    });
  };
  const changeAge = (e) => {
    setItem({
      id: item.id,
      name: item.name,
      age: e.target.value,
    });
  };

  const saveItem = (e) => {
    e.preventDefault();
    setShow(false);
    if(
      item.name.length === 0 ||
      item.age.length === 0
    )
    return;
      const newList = [...dataUser];
      newList.push(item);
      dispatch(getDataUserSuccess(newList))
    dispatch(addUser(item));
  };

  console.log(dataUser);
  const handleDelete = (itemId) => {
    const newList = dataUser.filter((x) =>{
      return x.id !== itemId;
    });
    dispatch(getDataUserSuccess(newList));
    dispatch(deleteUser(itemId));
  };

  const handleEdit = (key) => {
    setEdit(true);
    const newList = [...dataUser];
    const number = newList.findIndex((item) => item.id == key);
    const newItem = newList[number];
    setItem({
      id: newItem.id,
      name: newItem.name,
      age: newItem.age,
    });
  };
  const SaveHanldeEdit = () => {
    setEdit(false);
    const List = [...dataUser];
        const newList = List.map((itemm)=>{
          if(itemm.id === item.id){
            return{...item};
          }
          return itemm;
        });
        dispatch(getDataUserSuccess(newList));
    dispatch(editUser(item));
    setItem({
      id: "",
      name: "",
      age:""
    });
  };

  return (
    <Fragment>
      <div className="App">
        <div className="App__center">
          <ButtonAdd
            show={show}
            handleAdd={handleAdd}
            changeName={changeName}
            changeAge={changeAge}
            saveItem={saveItem}
          />

          {edit ? (
            <div className="list-add">
              <input
                type="text"
                value={item.name}
                onChange={(e) =>
                  setItem({
                    id: item.id,
                    name: e.target.value,
                    age: item.age,
                  })
                }
              />
              <input
                type="text"
                value={item.age}
                onChange={(e) =>
                  setItem({
                    id: item.id,
                    name: item.name,
                    age: e.target.value,
                  })
                }
              />
              <h2 href="" onClick={SaveHanldeEdit}>
                Save Edit
              </h2>
            </div>
          ) : null}

          {dataUser ? (
            <ListItem
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              items={dataUser}
            />
          ) : null}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
