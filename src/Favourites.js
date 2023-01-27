import React from 'react'
import { useStateValue } from './StateProvider';
import Card from './Card'
import styled from 'styled-components';


function Favourites() {
    const [{ favourites }, dispatch] = useStateValue();
  return (
    <div>
        <h1>Favoriler</h1>
        <GridWrapper>
            {favourites && favourites.map(product => {
                return (
                    <Card
                        key={product.id}
                        name={product.name}
                        image={product.image}
                        option={product.option}
                        gender={product.gender}
                        colorOptionCount={product.colorOptionCount}
                        price={product.price}
                        discount={product.discount}
                    />
                )
            })
            }
        </GridWrapper>
    </div>
  )
}

export default Favourites

const GridWrapper = styled.div`
  display: grid;
  justify-content: flex-end;
  grid-template-columns: 33% 33% 33%;
  gap: 5px;

  @media (max-width: 768px) {
    grid-template-columns: 100%;
    justify-content: center;
    width: 100%;
  }
`;