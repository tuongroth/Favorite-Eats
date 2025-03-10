import React, { useState } from 'react';
import './Home.css';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import Header from '../../Header/Header';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';

const Home = () => {

  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  );
};

export default Home;
