import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    price: Yup.number()
        .typeError('Price must be a number')
        .required('Price is required')
        .positive('Price must be a positive number'),
    rating: Yup.number()
        .typeError('Rating must be a number')
        .min(1, 'Rating must be at least 1')
        .max(5, 'Rating cannot be more than 5')
        .required('Rating is required'),
});
