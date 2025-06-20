import * as yup from "yup";


export const UserRegisterationValidation = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required()
});