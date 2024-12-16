import React from 'react';
import './Loading.css';
import { Link } from "react-router-dom";

const Loading = () => {
  return (
    <div>
    
      <div className="long-div">
        
      <h1></h1>
          <p></p>
      </div>
      <div className='three-cards'>
      <div className='card'>
      <h2>CONSULTING</h2>
          <p>TSL Environmental Consulting offers comprehensive environmental solutions tailored to meet the diverse needs of businesses and communities.</p>
      <Link className="card-link" to="/consulting">
        <p> Apply</p>
          </Link>
      </div>
    
      <div className='card'>
      <h2>Research</h2>
          <p>TSI Environmental Research offers advanced environmental monitoring solutions.</p>
        <Link className="card-link" to="/research">
        <p> Apply</p>
       </Link>
      </div>
      <div className='card'>
      <h2>TECHNOLOGY</h2>
          <p>
TSL Environmental Technology specializes in providing innovative solutions for environmental monitoring and sustainability challenges.</p>
      <Link className="card-link" to="/technology">
      <p> Apply</p>
       </Link>
      </div>
      </div>
      <div className='footer'>
        <div className='items'>
        <ul className="nav-list">
        <li className="nav-item"><a href="#about">About</a></li>
        <li className="nav-item"><a href="#press">Press</a></li>
        <li className="nav-item"><a href="#developers">Developers</a></li>
        <li className="nav-item"><a href="#channels">Channels</a></li>
        <li className="nav-item"><a href="#privacy">Privacy</a></li>
      </ul>
        </div>
      </div>
    </div>
  );
}
export default Loading;