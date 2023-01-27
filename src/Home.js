import Card from './Card'
import styled from 'styled-components';
import React from 'react'


function Home({products}) {
    return (
        <GridWrapper>
            {products && products.map(product => {
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
    )
}

export default Home;

const GridWrapper = styled.div`
  display: grid;
  justify-content: flex-end;
  grid-template-columns: 25% 25% 25%;
  gap: 25px 25px;

  @media (max-width: 768px) {
    grid-template-columns: 100%;
    justify-content: center;
    width: 100%;
  }
`;