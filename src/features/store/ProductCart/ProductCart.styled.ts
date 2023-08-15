import styled from 'styled-components';

export const ProductContainer = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  max-width: 250px;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
  
`;

export const ProductTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const ProductDescription = styled.p`
  font-size: 16px;
  word-break: break-all; 
  max-width: 100%;
`;

export const ProductInformation = styled.p`
  font-size: 16px;
  margin: 0;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ProductImage = styled.img`
  max-width: 100%;
  height: 100px;
  margin-top: 10px;
  transition: transform 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);

    img {
      filter: brightness(0.8); /* Dim the image on hover */
    }
  }
`;

export const ProductPriceAndRate = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  
`
export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`

export const ButtonsWithPrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

