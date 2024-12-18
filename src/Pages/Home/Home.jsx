import React from "react";
import Bannar from "./Bannar";
import AllCategory from "./AllCategory";
import DiscountAdd from "./DiscountAdd";
import Purchase from "./Purchase";
import Download from "./Download";
import SearchTag from "./SearchTag";
import HomeFetured from "./HomeFetured";
import BestSellingProducts from "./BestSellingProducts";
import FeaturedProducts from "./FeaturedProducts";
import RecentBlog from "./RecentBlog";
import MostPopular from "./MostPopular";
import JustArrived from "./JustArrived";

const Home = () => {
  return (
    <div>
      <Bannar></Bannar>
      <AllCategory></AllCategory>
      <BestSellingProducts></BestSellingProducts>
      <DiscountAdd></DiscountAdd>
      <FeaturedProducts></FeaturedProducts>
      <Purchase></Purchase>
      <MostPopular></MostPopular>
      <JustArrived></JustArrived>
      <RecentBlog></RecentBlog>
      <Download></Download>
      <SearchTag></SearchTag>
      <HomeFetured></HomeFetured>
      </div>
  );
};

export default Home;
