import React from "react";
import Header from "./components/header/header";
import Table from "./components/table/table";
import { useSelector } from "react-redux";
import { PER_1h, PER_24h, PER_7d } from "./constants/constant";
import './App.css'
function App() {
  const dataList = useSelector((state) => state.dataCurrency.data);
  const valCurrency = useSelector((state) => state.valCurrency.data);
  console.log(valCurrency);
  const query = {
    vs_currency: valCurrency,
    // order: state,
    // per_page: 100,
    // page: 1,
    // sparkline: false,
    price_change_percentage: [PER_1h, PER_24h, PER_7d]
  };

  return (
    <div className="App">
      <Header/>
      <Table dataList={dataList} currency={valCurrency} query={query} />
    </div>
  );
}
export default App;
