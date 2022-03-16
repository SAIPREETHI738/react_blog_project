import React from "react";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tollywood from "./Tollywood"
import Home from "./Home.js";
import Technology from "./Technology";
import Jobs from "./Jobs";
import Nature from "./Nature";
import Food from "./Food.js";
import PageNotFound from "./PageNotFound";
import { CategoryProvider } from "./Context";
import ViewData from "./ViewData";
const AllComponents = () => {
  return (
    <div>
      <Router>
        <Header />
        <CategoryProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<PageNotFound />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Tollywood" element={<Tollywood />} />
          <Route path="/Technology" element={<Technology />} />
          <Route path="/Jobs" element={<Jobs />} />
          <Route path="/Nature" element={<Nature />} />
          <Route path="/About" element={<Food />} />
          <Route path="/Tollywood/:id" element={<ViewData/>}/>
          <Route path="/Technology/:id" element={<ViewData/>}/>
          <Route path="/Jobs/:id" element={<ViewData/>}/>
          <Route path="/Nature/:id" element={<ViewData/>}/>
        </Routes>
        </CategoryProvider>
      </Router>
    </div>
  );
};

export default AllComponents;