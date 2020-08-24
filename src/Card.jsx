import React from 'react';
import web from './images/s1.jpg';
import {NavLink} from 'react-router-dom';
const Card=(props)=>{
  return(
      <>
      
       <div className='row col-sm-4 ml-2 mt-2'>
     
       <div className="card" >
  <img src={props.imgsrc} class="card-img-top" alt={props.imgsrc} />
  <div className="card-body">
    <h5 className="card-title font-weight-bold">{props.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a  className="btn btn-primary">Check Now</a>
  </div>
</div>

       </div>

  
    
      </>
  );
}
export default Card;