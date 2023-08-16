import {
    ButtonsWithPrice,
    ButtonsWrapper,
    ImageContainer,
    ProductContainer,
    ProductDescription,
    ProductImage, ProductInformation,
    ProductPriceAndRate,
    ProductTitle
} from "./ProductCart.styled.ts";
import * as React from "react";
import {ProductCartPropsI} from "../../../entities/store/model/model.ts";
import {AddButton} from "../Buttons/AddButton.tsx";

export const ProductCart:React.FC<ProductCartPropsI> = ({product}) => {

    return (
        <ProductContainer>
            <ImageContainer>
                <ProductImage
                    src={product.img}
                    alt={product.name}
                />
            </ImageContainer>
            <ProductTitle>{product.name}</ProductTitle>
            <ProductDescription>{product.description}</ProductDescription>

            <ButtonsWithPrice>
                <ProductPriceAndRate>
                    <ProductInformation>Price: ${product.price}</ProductInformation>
                    <ProductInformation>Rating: {product.rating}</ProductInformation>
                </ProductPriceAndRate>
                <ButtonsWrapper>
                    <AddButton product={product}/>
                </ButtonsWrapper>
            </ButtonsWithPrice>
        </ProductContainer>
    );
};

