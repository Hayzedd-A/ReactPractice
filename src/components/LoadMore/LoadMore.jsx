import React, { useState } from "react";
import { groupBy } from "underscore";
import { FaWindowClose } from "react-icons/fa";

function LoadMore() {
  let [skip, setSkip] = useState(0);
  let [productData, setProductData] = useState([]);
  let [selectedProduct, setSelectedProduct] = useState(null);
  let [categorizedData, setCategorizedData] = useState(null);
  let [selectedCategory, setSelectedCategory] = useState("all");
  let [sortingMode, setSortingMode] = useState("Ascending");
  async function getProducts() {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${skip}`
      );
      const productResult = await response.json();
      productData.push(...productResult.products);
      setProductData([...productData]);
      categorizeProduct();
      console.log(productData);
    } catch (error) {
      console.log(error);
    }
  }

  const categorizeProduct = () => {
    const categorizedResult = groupBy(productData, "category");
    setCategorizedData(categorizedResult);
    console.log(categorizedData);
  };

  const getCategory = (ele) => {
    setSelectedCategory(ele.target.value);
    console.log(ele.target.value);
  };

  const getMoreProducts = () => {
    getProducts();
    setSkip(skip + 20);
  };

  const sortProducts = () => {
    if (sortingMode === "Ascending") {
      console.log(sortingMode);
      productData.sort((a, b) => b.price - a.price);
      setSortingMode("Descending");
      console.log(productData);
    } else {
      console.log(sortingMode);
      setSortingMode("Ascending");
      productData.sort((a, b) => a.price - b.price);
      console.log(productData);
    }
    setProductData([...productData]);
  };

  const handleProductClick = (id) => {
    setSelectedProduct(productData.find((product) => product.id === id));
  };

  return (
    <div className="productLoading">
      <h1>Load More Products</h1>
      <nav>
        <label htmlFor="category">Select category of Products:</label>
        <select
          // onClick={categorizeProduct}
          onChange={getCategory}
          name=""
          id="category"
        >
          <option value="all">Show all</option>
          {categorizedData
            ? Object.keys(categorizedData).map((ele, ind) => {
                return (
                  <option key={ind} value={ele}>
                    {ele}
                  </option>
                );
              })
            : null}
        </select>
        <button id="sort" onClick={sortProducts}>
          Sort by price
        </button>
        <label htmlFor="sort">{sortingMode}</label>
      </nav>
      <div className="productsContainer">
        {selectedProduct ? (
          <div className="descriptionBackground">
            <div className="description">
              <FaWindowClose
                className="closeIcon"
                onClick={() => setSelectedProduct(null)}
                size={30}
              />
              <h1>{selectedProduct.title}</h1>
              <h4>{selectedProduct.category}</h4>
              <h4>{"Brand of " + selectedProduct.brand}</h4>
              <div className="descriptionImages">
                {selectedProduct.images.map((ele) => (
                  <img src={ele} alt="product description" width={300} />
                ))}
              </div>
              <div className="price">
                <span>{"$" + selectedProduct.price}</span>
                <span>{selectedProduct.stock + " Available"}</span>
              </div>
              <p>{selectedProduct.description}</p>
            </div>
          </div>
        ) : null}
        <div className="productList">
          {selectedCategory === "all"
            ? productData.map((product) => {
                return (
                  <div
                    className="product"
                    onClick={() => handleProductClick(product.id)}
                    key={product.id}
                  >
                    <img
                      src={product.thumbnail}
                      width={180}
                      height={180}
                      alt={product.title}
                    />
                    <h3>{product.title}</h3>
                    <h4>{"$" + product.price}</h4>
                  </div>
                );
              })
            : productData
                .filter((product) => {
                  return product.category === selectedCategory;
                })
                .map((product) => {
                  return (
                    <div
                      className="product"
                      onClick={() => handleProductClick(product.id)}
                      key={product.id}
                    >
                      <img
                        src={product.thumbnail}
                        width={180}
                        height={180}
                        alt={product.title}
                      />
                      <h3>{product.title}</h3>
                      <h4>{"$" + product.price}</h4>
                    </div>
                  );
                })}
        </div>
        <button
          className={skip <= 80 ? "getMore loadMore" : "getMore noMore"}
          onClick={getMoreProducts}
          disabled={skip <= 80 ? false : true}
        >
          {skip <= 80 ? "Load More Products" : "No more Products"}
        </button>
      </div>
    </div>
  );
}

export default LoadMore;
