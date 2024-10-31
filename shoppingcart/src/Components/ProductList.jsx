import React, { useEffect, useState } from "react";
import "./ProductList.css";

function ProductList({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term

  useEffect(() => {
    const fetchData = async () => {
      const data = [
        { id: 1, name: "Laptop", price: 1000 },
        { id: 2, name: "Headphones", price: 200 },
        { id: 3, name: "Keyboard", price: 300 },
        { id: 4, name: "Speaker", price: 300 },
        { id: 5, name: "Mouse", price: 300 },
      ];
      setProducts(data);
    };
    fetchData();
  }, []);

  // Filter products based on search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <hr />
      <div className="top-buttons">
        <h2 className="head">Products</h2>
        {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
          className="search-input"
        />
      </div>
        <h2 className="cartpage">Cart</h2>
      </div>

      

      <div className="product-list">
        <div className="products">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="product-item">
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div><br /><br /><br /><hr />
    </div>
  );
}

export default ProductList;
