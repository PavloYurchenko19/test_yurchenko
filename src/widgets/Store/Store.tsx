import {useGetAllProductsQuery} from "../../entities/store/api/storeApi.ts";
import {Loader} from "../../shared/ui";
import {ProductCart} from "../../features/store";
import {ProductListContainer, StoreContainer} from "./Store.styled.ts";

export const Store = () => {
    const {
        data: products,
        isLoading:isLoadingProducts,
        isFetching:isFetchingProducts
    } = useGetAllProductsQuery(undefined)

    if  (isFetchingProducts || isLoadingProducts) return <Loader/>
    return (
        <StoreContainer>
            <ProductListContainer>
                {products?.products?.map((product)=><ProductCart key={product.id} product={product}/>)}
            </ProductListContainer>
        </StoreContainer>
    );
};

