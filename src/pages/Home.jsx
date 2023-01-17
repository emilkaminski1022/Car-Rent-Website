import React from "react";
import Ads from "../components/Ads";
import DatePicker from "../components/DatePicker";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <>
      <Navbar />
      <Ads />
      <DatePicker />
      <ProductList />
    </>
  );
};

export default Home;
