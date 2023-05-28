import React from "react";
import Header from "./../components/header/Header";
import Footer from "../components/footer/Footer";
import MainProducts from "./../components/mainProducts.js/MainProducts";

const AllProducts = () => {
  return (
    <div className="bg__dark">
      <Header />
      <MainProducts />
      <Footer />
    </div>
  );
};

export default AllProducts;
