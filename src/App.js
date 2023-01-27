import './App.css';
import styled from 'styled-components';
import Card from './Card'
import Navbar from './Navbar'
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { useStateValue } from './StateProvider';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CardDetail from './CardDetail';
import Basket from './Basket';
import Home from './Home';
import Favourites from './Favourites';

function App() {
  const [{}, dispatch] = useStateValue();

  let products = [
    {
      id: nanoid(),
      name: "Nike Air Force 1 '07 SN",
      image: require('./shoe1.webp'),
      option: 'Yakında Satışa Sunuluyor',
      gender: 'Erkek',
      colorOptionCount: 1,
      price: 2149.99
    },
    {
      id: nanoid(),
      name: "Jordan Delta 3 Low",
      image: require('./shoe2.webp'),
      option: 'Yeni Satışa Sunuldu',
      gender: 'Erkek',
      colorOptionCount: 2,
      price: 2799.90
    },
    {
      id: nanoid(),
      name: "Nike Air Huarache",
      image: require('./shoe3.webp'),
      gender: 'Erkek',
      colorOptionCount: 6,
      price: 2399.90
    },
    {
      id: nanoid(),
      name: "Nike Infinity Run 3 A.I.R. x Hola Lou",
      image: require('./shoe4.webp'),
      gender: 'Erkek Yol Koşu',
      colorOptionCount: 1,
      price: 2999.90
    }
  ]

  return (
    <Router>
        <Routes>
          <Route 
          path="/detail"
          element={
            <Wrapper>
              <Navbar />
              <CardDetail />
            </Wrapper>
          }
          >
          </Route>
          <Route 
          path="/basket"
          element={
            <Wrapper>
              <Navbar />
              <Basket />
            </Wrapper>
          }
          >
          </Route>
          <Route 
          path="/favourites"
          element={
            <Wrapper>
            <Navbar />
            <Favourites />
            </Wrapper>
          }
          >
          </Route>
          <Route 
          path="/"
          element={
            <Wrapper>
              <Navbar />
              <Home products={products} />
            </Wrapper>
          }
          > {/*  İçi düzenlenecek */}
            
          </Route>
        </Routes>
    </Router>
  );
}

export default App;

const Wrapper = styled.div`
  width:95%;
  margin-left: 2.5%;
`;

