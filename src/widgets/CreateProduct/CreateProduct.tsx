import { Formik, Field, ErrorMessage } from 'formik';
import {Button, TextField} from "@mui/material";
import {useCallback} from "react";
import {FormWrapper} from "./CreateProduct.styled.ts";
import {useAddProductMutation} from "../../entities/store/api/storeApi.ts";
import {Loader} from "../../shared/ui";
import {DataToCreateProductI} from "../../entities/store/api/model.ts";
import {validationSchema} from "../../entities/createProduct/const/const.ts";

export const CreateProduct = () => {
    const [addProduct, { isLoading }] = useAddProductMutation()
    const initialValues = {
        title: '',
        description: '',
        price: 0,
        rating: 0
    };

    const onSubmit = useCallback(async (values: DataToCreateProductI) => {
        try {
            await addProduct(values).unwrap()
        }catch (e) {
            console.log(e)
        }
    },[addProduct])

    if (isLoading) return <Loader/>

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <FormWrapper>
                <div>
                    <Field
                        as={TextField}
                        label="Title"
                        id="title"
                        name="title"
                        fullWidth
                        variant="outlined"
                    />
                    <ErrorMessage name="name" component="div" />
                </div>

                <div>
                    <Field
                        as={TextField}
                        label="Description"
                        id="description"
                        name="description"
                        fullWidth
                        variant="outlined"
                    />
                    <ErrorMessage name="author" component="div" />
                </div>

                <div>
                    <Field
                        as={TextField}
                        label="Price"
                        id="price"
                        name="price"
                        type="number"
                        fullWidth
                        variant="outlined"
                    />
                    <ErrorMessage name="publicationYear" component="div" />
                </div>

                <div>
                    <Field
                        as={TextField}
                        label="Rating"
                        id="rating"
                        name="rating"
                        type="number"
                        fullWidth
                        variant="outlined"
                    />
                    <ErrorMessage name="rating" component="div" />
                </div>

                <Button type="submit" variant="contained" color="primary">
                    Add Product
                </Button>
            </FormWrapper>
        </Formik>
    );
};

