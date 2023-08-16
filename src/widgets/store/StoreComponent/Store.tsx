import {Loader} from "../../../shared/ui";
import {ProductCart} from "../../../features/store";
import {ProductListContainer, StoreContainer} from "./Store.styled.ts";
import {useSortProducts} from "../../../entities/store/lib";
import {useAppSelector} from "../../../app/Redux/store/appStore.ts";

export const Store = () => {
    useSortProducts()
    const {products, isLoading} = useAppSelector(state => state.tableProductsReducer)
    if  (isLoading) return <Loader/>
    return (
        <StoreContainer>
            <ProductListContainer>
                {products?.map((product)=><ProductCart key={product.id} product={product}/>)}
            </ProductListContainer>
        </StoreContainer>
    );
};

