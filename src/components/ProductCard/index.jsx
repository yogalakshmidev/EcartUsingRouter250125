import React from "react";
import { Link } from "react-router-dom";
const ProductCard = ({ products = [] }) => {
  return (
    <div>
      <section className="text-gray-600 body-font p-10">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {
              products.map((product) => {
               const {id,title,price,image,category,description} = products;
               console.log("product", product);
               return (
                <Link to={`/products/${product.id}`} className="lg:w-1/4 md:w-1/2 p-4 w-full border border-opacity-50 mb-4 cursor-pointer">
                
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt={product.title}
                      className="object-contain object-center w-full h-full block"
                      src={product.image}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
                      {product.category}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {product.title}
                    </h2>
                    <p className="mt-1 text-md font-medium">${product.price}</p>
                  </div>
                
                </Link>
              );
            })
            }
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductCard;
