import React,{useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import './CardDetail.css'
import { nanoid } from 'nanoid';
import { useStateValue } from './StateProvider';

function CardDetail() {

  const [shoeSize, setShoeSize] = useState(0)
  const [{ basket }, dispatch] = useStateValue();

  const location = useLocation()
  const { shoe } = location.state


    const chooseShoeSize = (e) => { // Daha iyi bir yöntem olabilir bak buna
      setShoeSize(Number(e.target.innerHTML.split(" ")[1])) // number iş görür mü bakarsın
    }

    const addToBasket  = () => {
      if(shoeSize){
        dispatch({
          type: 'ADD_TO_BASKET',
          item: {
            id: nanoid(),
            name: shoe.name,
            image: shoe.image,
            option: shoe.option,
            gender: shoe.gender,
            colorOptionCount: shoe.colorOptionCount,
            price: shoe.price,
            discount: shoe.discount,
            shoeSize: shoeSize
          }
      })
      }else{
        alert("Lütfen Ayakkabı Numaranızı Seçin!")
      }
  }

  const addToFavourites  = () => {
      dispatch({
        type: 'ADD_TO_FAVOURITES',
        item: {
          id: nanoid(),
          name: shoe.name,
          image: shoe.image,
          option: shoe.option,
          gender: shoe.gender,
          colorOptionCount: shoe.colorOptionCount,
          price: shoe.price,
          discount: shoe.discount,
          shoeSize: 0
        }
    })
}

  

  return (
    <div className='container'>

      <div className='imageContainer'>
        <img src={shoe.image} />
        <img src={shoe.image} />
        <img src={shoe.image} />
        <img src={shoe.image} />
        <img src={shoe.image} />
      </div>

      <aside>
        <div className='asideContainer'>
          <div className='shoeName'>{shoe.name}</div>
          <div className='shoeGender'>{shoe.gender} Ayakkabısı</div>
          <div className='shoePrice'>₺{shoe.price}</div>

          <div className='shoeSize'>
            <div className='shoeNumberHeaders'>
              <div className='chooseSize'>Numara/Beden Seç</div>
              <div className='sizeGuide'>Beden/Numara Rehberi</div>
            </div>

            <div className='allShoeSizesContainer'>
              <div className='allShoeSizes'>
                <button onClick={chooseShoeSize}>EU 38.5</button>
                <button onClick={chooseShoeSize}>EU 39</button>
                <button onClick={chooseShoeSize}>EU 40</button>
                <button onClick={chooseShoeSize}>EU 40.5</button>
                <button onClick={chooseShoeSize}>EU 41</button>
                <button onClick={chooseShoeSize}>EU 42</button>
                <button onClick={chooseShoeSize}>EU 42.5</button>
                <button onClick={chooseShoeSize}>EU 43</button>
                <button onClick={chooseShoeSize}>EU 44</button>
                <button onClick={chooseShoeSize}>EU 44.5</button>
                <button onClick={chooseShoeSize}>EU 45</button>
                <button onClick={chooseShoeSize}>EU 45.5</button>
                <button onClick={chooseShoeSize}>EU 46</button>
                <button onClick={chooseShoeSize}>EU 47</button>
                <button onClick={chooseShoeSize}>EU 47.5</button>
                <button onClick={chooseShoeSize}>EU 48.5</button>
                <button onClick={chooseShoeSize}>EU 49.5</button>
              </div>

              <div className='buttons'>
                <input onClick={addToBasket} className='addToBasket' type={"button"} name="addToBasket" value="Sepete Ekle" />
                <input onClick={addToFavourites} className='addToFavourite' type={"button"} name="addToFavourite" value="Favori" />
              </div>
            </div>

          </div>
        </div>



      </aside>

    </div>
  )
}

export default CardDetail