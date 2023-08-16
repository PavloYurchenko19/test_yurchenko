import {Button, Grid, Paper, Typography} from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete";
import {ProductMapedI} from "../../../entities/store/api/model.ts";
import {deleteProduct} from "../../../app/Redux/store/cartProductSlice/cartProductSlice.ts";
import {useAppDispatch} from "../../../app/Redux/store/appStore.ts";
import {useCallback} from "react";

export const ProductInCart = ({product}: {product: ProductMapedI}) => {
    const dispatch = useAppDispatch();

    const handleDelete = useCallback(()=> {
        dispatch(deleteProduct(product.id));
    },[product.id]);

    return (
        <Paper elevation={3} style={{ padding: '10px', marginBottom: '10px' }}>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={3}>
                    <img src={product.img} alt={product.name} style={{ width: '100%' }} />
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="subtitle1">{product.name}</Typography>
                    <Typography color="textSecondary">{product.description}</Typography>
                    <Typography variant="body1">${product.price}</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Button
                        variant="outlined"
                        color="secondary"
                        startIcon={<DeleteIcon />}
                        onClick={handleDelete}
                    >
                        Remove
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );
};

