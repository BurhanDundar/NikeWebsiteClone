import './Navbar.css';
import React, {useState} from 'react'
import useSound from 'use-sound';
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';



import bite from './sounds/bite.mp3';

function Navbar() {

  const [playTooltipSound] = useSound(bite, { id: 'active', volume: 0.25 });
  const [{ basket }, dispatch] = useStateValue();

  console.log(basket)

  return (
    <nav className='Wrapper'>
        <div className='imageContainer'>
          <Link to={"/"}><img className='logo' src={require('./swoosh.png')} alt="swoosh" /></Link>
        </div>
        <ul>
            <li>Yeni Çıkanlar</li>
            <li>Erkek</li>
            <li>Kadın</li>
            <li>Çocuk</li>
            <li>İndirim</li>
            <li>Koleksiyonlar</li>
        </ul>
        
        <div className='basket-section'>
            <Link to={"/favourites"}><img style={{width: '24px'}} src={require('./favourite.png')} alt="favourite"/></Link>
            <Link to={"/basket"}>
              <img style={{width: '24px'}} src={require('./basket.png')} alt="basket"/>
              <span>{basket?.length}</span>
            </Link>
        </div>
    </nav>
  )
}

export default Navbar