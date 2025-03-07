import React, { useState } from 'react';
import './Home.css';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import Header from '../../Header/Header';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';

const Home = () => {

  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
    </div>
  );
};

export default Home;
