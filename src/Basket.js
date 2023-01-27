import React,{useState,useEffect} from 'react'
import './Basket.css'
import BasketElement from './BasketElement';
import { useStateValue } from './StateProvider';

function Basket() {
  const [{ basket }, dispatch] = useStateValue();
  const [total, seTtotal] = useState(0)

  console.log(basket)

  useEffect(() => {
    let _total = 0;
    basket.map(key => {
      _total += key.price;
    })

    seTtotal(_total.toFixed(2));

  })

  return (
    <div style={{paddingLeft: '10%',paddingRight: '10%'}}>
        <h1>Sepet</h1>
        <div className='innerBasketContainer'>
            <div className='itemContainer'>
                {basket && basket.map(item => {
                    return (
                        <BasketElement item={item}/>      
                )})
                }
            </div>

            <div className='summary'>
              <h2>Özet</h2>
              
              <div className='subtotal-container'>
                <div className='subtotal'>
                  <div className='subtotal-txt'>Ara Toplam</div>
                  <div className='subtotal-price'>₺{total}</div>
                </div>

                <div className='shipment'>
                  <div className='shipment-txt'>Tahmini Kargo ve Teslim Ücreti</div>
                  <div className='shipment-price'>₺0.00</div>
                </div>
              </div>

              <div className='total-container'>
                <div className='total-txt'>Toplam</div>
                <div className='total-price'>₺{total}</div>
              </div>
              </div>
        </div>
    </div>
  )
}

export default Basket