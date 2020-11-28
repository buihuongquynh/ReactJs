import React, { useEffect } from "react";
import Item from "../item/item";
import { useDispatch } from "react-redux";
import { Actions } from "../../state/actions";
const Table = (props) => {
  const { dataList } = props;
  let listData = null;
  const dispatch = useDispatch();
  if (dataList) {
    listData = dataList.map((item, index) => (
      <Item itemCurrency={props.currency} key={index} item={item} />
    ));
  }
  useEffect(() => {
    try {
      dispatch({ type: Actions.GET_DATA, payload: props.query });
    } catch (error) {}
  }, [props.currency]);
  return <div>{dataList ? <table>{listData}</table> : null}</div>;
};
export default Table;
