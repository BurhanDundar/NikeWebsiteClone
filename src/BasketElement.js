import React from 'react'
import './BasketElement.css'
import { useStateValue } from './StateProvider';

function BasketElement({item}) {

  const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
    dispatch({
        type: 'REMOVE_FROM_BASKET',
        id: item.id
    })
}

  return (
    <div className='basketItemContainer'>
        <img src={item.image} />
        <div className='itemDescription'>
            <div className='itemNamePrice'>
                <div className='itemName'>{item.name}</div>
                <div className='itemPrice'>₺{item.price}</div>
            </div>
            <div className='itemGender'>{item.gender}</div>
            <div className='itemColor'>Mavi/Yeşil/Sarı</div>

            <div className='itemSizeContainer'>
                <div className='itemSizeTitle'>Numara/Beden</div>
                <select id="sizes" name="shoes">
                  <option value="35.5">35.5</option>
                  <option value="36">36</option>
                  <option value="36.5">36.5</option>
                  <option value="37.5">37.5</option>
                  <option value="38">38.5</option>
                  <option value="39">39</option>
                  <option value="40">40.5</option>
                  <option value="41">41</option>
                  <option value="42">42</option>
                  <option value="42.5">42.5</option>
                  <option value="43">43</option>
                  <option value="44">44</option>
                  <option value="44.5">44.5</option>
                </select>
                <div className='itemCount'>Adet</div>
                <select className='itemCount' id="sizes" name="shoes">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
            </div>

            <div className='btn-container'>
              <button><img style={{width: '24px'}} src={require('./favourite.png')} alt="favourite"/></button>
              <button onClick={removeFromBasket}><img style={{width: '24px'}} src={require('./trash.png')} alt="trash"/></button>
            </div>  

        </div>
    </div>
  )
}

export default BasketElement