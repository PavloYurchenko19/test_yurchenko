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
import {ButtonBuy} from "../Buttons/ButtonBuy.tsx";
import {AddButton} from "../Buttons/AddButton.tsx";

export const ProductCart:React.FC<ProductCartPropsI> = ({product}) => {

    return (
        <ProductContainer>
            <ImageContainer>
                <ProductImage
                    src={product.thumbnail}
                    alt={product.title}
                />
            </ImageContainer>
            <ProductTitle>{product.title}</ProductTitle>
            <ProductDescription>{product.description}</ProductDescription>

            <ButtonsWithPrice>
                <ProductPriceAndRate>
                    <ProductInformation>Price: ${product.price}</ProductInformation>
                    <ProductInformation>Rating: {product.rating}</ProductInformation>
                </ProductPriceAndRate>
                <ButtonsWrapper>
                    <ButtonBuy/>
                    <AddButton product={product}/>
                </ButtonsWrapper>
            </ButtonsWithPrice>
        </ProductContainer>
    );
};

