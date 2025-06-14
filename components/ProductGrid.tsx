"use client"
import { productType } from '@/constants/data';
import React, { useState } from 'react'
import HomeTabbar from './HomeTabBar';
import Container from './Container';
// import { Product } from "@/sanity.types";

const ProductGrid = () => {
    // const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState(productType[0]?.title || "");
  const query = `*[_type == "product" && variant == $variant] | order(name asc){
  ...,"categories": categories[]->title
}`;

  return (
    <Container className="flex flex-col lg:px-0 my-10">
      <HomeTabbar selectedTab={selectedTab} onTabSelect={setSelectedTab} />
    </Container>
  )
}

export default ProductGrid
