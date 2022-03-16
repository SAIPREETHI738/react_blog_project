import * as React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Bottom from "./Bottom";
import { CategoryContext } from "./Context";

const Nature = () => {
    const [category] = useContext(CategoryContext);
  
    return (
      <div>
        <h1 className="tollyh">Nature</h1><hr className="thhr"/>
        {category.filter((render)=>render.id>12&&render.id<17).map((wood) => (
          <div key={category.imgt} className="tolly">
            <Link to={`/Nature/${wood.id}`} className="tolly">
              <div className="tollyi"><img src={wood.img} alt="" /></div>
              <h3 className="tollyt">{wood.det}</h3>
            </Link>
            <div className="tollyn"><h5>{wood.date}</h5></div>
            <hr/>
          </div>
        ))}
        <div className="adv"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS751G22mmvF_MFp9tWwxOlU__8ztNm0iryw&usqp=CAU" className="adv" alt="" /></div><br/>
        <button className="loadmore">LoadMore</button>
        <Bottom/>
      </div>
    );
  };
  
  export default Nature;