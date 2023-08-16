import {Container, Grid, Typography} from "@mui/material";
import {useAppSelector} from "../../app/Redux/store/appStore.ts";
import {ProductInCart} from "../../features/cart";

export const Cart = () => {
    const products = useAppSelector((state)=> state.cartProductReducer.productsInCart)

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Products in Cart
            </Typography>
            <Grid container spacing={2}>
                {products?.map(product => (
                    <Grid item key={product.id} xs={12}>
                        <ProductInCart product={product} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

