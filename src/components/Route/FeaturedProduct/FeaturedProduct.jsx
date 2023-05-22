import React from "react";
import styles from "../../../styles/styles";
import { productData } from "../../../static/data";
import ProductCards from "../ProductCards/ProductCards";

const FeaturedProduct = () => {
  return (
    <div className={`${styles.section}`}>
      <div className={`${styles.heading}`}>
        <h2>Featured Products</h2>
      </div>
      <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
        {productData &&
          productData.map((i, index) => <ProductCards data={i} key={index} />)}
      </div>
    </div>
  );
};

export default FeaturedProduct;
