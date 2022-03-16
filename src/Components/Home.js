import React, { useContext, } from "react";
import { Link, } from "react-router-dom";
import { CategoryContext } from "./Context";
import Footer from "./Footer";

const Home = () => {

  const [category]=useContext(CategoryContext);
  
  return (
    <div className="h1">
      <div className="grid1">
        <Link to="/Nature/13" className="one"><img src="https://th.bing.com/th/id/R.3a9f0210ff7d1e83039ff237c81bacae?rik=asArcL6qvWfZfA&riu=http%3a%2f%2fs1.picswalls.com%2fwallpapers%2f2016%2f03%2f29%2fbeautiful-nature-high-definition_042323787_304.jpg&ehk=8tO7UxFL%2bC03x6vfc2O9EhdUCe4fl6tC7UGUdlnpdX4%3d&risl=&pid=ImgRaw&r=0" alt="" /><div className="onet"> Nature to be commanded must be obeyed </div></Link>
        {category.filter((disp)=>disp.id==="10").map((job)=>(<Link to={`/jobs/${job.id}`} className="two"><img src={job.img} alt="" height={"250px"} width={"480px"}/><div className="twot"> Hyderabad:<br />  Good news for job seekers </div></Link>))}
        {category.filter((disp)=>disp.id==="5").map((tec)=>(<Link to={`/technology/${tec.id}`} className="three"><img src={tec.img} alt="" /><div className="threet"> iphone <br/> Series </div></Link>))}
      </div>
      
      <div>
        <div>Recent News</div>
        <hr className="hlhr"/>
        <div className="flex2">
          <div className="hc1">
            {category.filter(data=>data.id==="1").map((latest)=>(
            <Link to={`/Tollywood/${latest.id}`}  key={category.id} className="hcc1">
              <div className="himg"><img src={latest.img} alt="" /></div>
              <div className="c1h3"><h3>{latest.det}</h3></div>
              <div className="c1h5"><h5>{latest.date}</h5></div>
              <div className="c1h4"><h4>Category: {latest.category}</h4></div>
            </Link>
           ))}
          </div>
          <div className="hc1">
           {category.filter(data=>data.id==="5").map((latest)=>(
             <Link to={`/Technology/${latest.id}`}  key={category.id} className="hcc1">
                <div className="himg"><img src={latest.img} alt="" /></div>
                <div className="c1h3"><h3>{latest.det}</h3></div>
                <div className="c1h5"><h5>{latest.date}</h5></div>
                <div className="c1h4"><h4>Category: {latest.category}</h4></div>
            </Link>
           ))}
          </div>
            <div className="hc1">
              {category.filter(data=>data.id==="9").map((latest)=>(
                <Link to={`/Jobs/${latest.id}`}  key={category.id} className="hcc1">
                  <div className="himg"><img src={latest.img} alt="" /></div>
                  <div className="c1h3"><h3>{latest.det}</h3></div>
                  <div className="c1h5"><h5>{latest.date}</h5></div>
                  <div className="c1h4"><h4>Category: {latest.category}</h4></div>
                </Link>
              ))}
           </div><br/>
          </div>
          <div style={{marginLeft:"-8.5%",marginTop:"2%"}}><Footer/></div>
        <div className="flex3">
        <div className="advs" ><img src="https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/226524/Radhe_Shyam-v1.jpg" className="advr" alt="" /></div><br/>
            
            <div>Latest Articles</div>
            <hr className="hlhr"/>
            <div className="hc2">
            {category.filter(data=>data.id==="2").map((latest)=>(
              <Link to={`/Tollywood/${latest.id}`}  key={category.id} className="hcc2">
              <div className="tollyi"><img src={latest.img} alt="" /></div>
              <div className="tollyt"><h3>{latest.det}</h3></div>
              <div className="c2h5"><h5>{latest.date}</h5></div>
            <div className="c1h7"><h4>Category: {latest.category}</h4></div>
            </Link>
          ))}
          </div><hr className="f50per"/>
          <div className="hc2">
          {category.filter(data=>data.id==="6").map((latest)=>(
          <Link to={`/Technology/${latest.id}`}  key={category.id} className="hcc2">
            <div className="tollyi"><img src={latest.img} alt="" /></div>
            <div className="tollyt"><h3>{latest.det}</h3></div>
            <div className="c2h5"><h5>{latest.date}</h5></div>
            <div className="c1h7"><h4>Category: {latest.category}</h4></div>
          </Link>
          ))}
            </div><hr className="f50per"/>
            <div className="hc2">
            {category.filter(data=>data.id==="12").map((latest)=>(
            <Link to={`/Nature/${latest.id}`} key={category.id} className="hcc2">
              <div className="tollyi"><img src={latest.img} alt="" /></div>
              <div className="tollyt"><h3>{latest.det}</h3></div>
              <div className="c2h5"><h5>{latest.date}</h5></div>
              <div className="c1h7"><h4>Category: {latest.category}</h4></div>
            </Link>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;