import * as React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Bottom from "./Bottom";
import { CategoryContext } from "./Context";

const Tollywood = () => {
  const [category] = useContext(CategoryContext);


  return (
    <div>
      <h1 className="tollyh">TollyWood</h1><hr className="thhr"/>
      {category.filter((render)=>render.id<5).map((wood) => (
        <div key={category.id} className="tolly">
          <Link to={`/Tollywood/${wood.id}`}className="tolly">
            <div className="tollyi"><img src={wood.img} alt="" /></div>
            <h3 className="tollyt">{wood.det}</h3>
          </Link>
          <h5 className="tollyd">{wood.date}</h5>
          <hr/>
        </div>
      ))}
      <div className="adv"><img src="https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/226524/Radhe_Shyam-v1.jpg" className="adv" alt="" /></div><br/>
      <button className="loadmore">LoadMore</button>
      <Bottom/>
    </div>
  );
};

export default Tollywood;