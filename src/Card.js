import React,{useState,useEffect} from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const DESCRIPTION_COLOR = 'gray';
const DISCOUNT_COLOR = 'green';

function Card( props ) {
  const [discountedPrice,setDiscountedPrice] = useState(0);

  useEffect(() => {
    if(props.discount){
      let _discountedPrice = Math.floor((props.price * (100 - props.discount)) / 100).toFixed(2);
      setDiscountedPrice(_discountedPrice);
    }
  },[props]);

  return (
    <Link to={"/detail"} state={{shoe: props}} style={{textDecoration: 'none'}}>
      <CardWrapper>
        <ImageWrapper><CardImage src={props.image} /></ImageWrapper>
        {props.option && <OptionalArea>{props.option}</OptionalArea>}
        <ShoeName>{props.name}</ShoeName>
        <Gender>{props.gender} ayakkabısı</Gender>
        <ColorOptionCount>{props.colorOptionCount} Renk</ColorOptionCount>

        <PriceContainer>
          {props.discount ? <Price>₺{discountedPrice}</Price> : <Price>₺{props.price}</Price>}
          {props.discount && <OldPrice>{props.price}</OldPrice>}
        </PriceContainer>
        
        {props.discount && <Discount>%{props.discount} indirim</Discount>}
      </CardWrapper>
    </Link>
  )
}

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const OptionalArea = styled.div`
    margin-top: 8px;
    color: red;
`;

const ShoeName = styled.div`
  font-weight: 500;
  color: #111111;
  margin-top: 8px;
  margin-bottom: 8px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 60%;
  border-radius: 16px 16px 4px 4px;
  overflow: hidden;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  transition: transform 600ms, filter 1000ms;
  display: block;
  will-change: transform;
  transform-origin: 50% 75%;
  filter: brightness(95%);

  ${ImageWrapper}: hover & {
    transform: scale(1.1);
    transition: transform 200ms, filter 400ms;
    filter: brightness(100%);
    
  }
`;

const Gender = styled.div`
    color: ${DESCRIPTION_COLOR};
`;
const ColorOptionCount = styled.div`
    color: ${DESCRIPTION_COLOR}
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 16px;
`

const Price = styled.div`
    font-weight: 500;
    color: #111111;
`;

const OldPrice = styled.div`
  text-decoration: line-through;
  color: ${DESCRIPTION_COLOR};
  margin-left: 8px;
`;

const Discount = styled.div`
    margin-top: 16px;
    color: ${DISCOUNT_COLOR}
`;

export default Card