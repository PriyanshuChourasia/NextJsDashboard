import axios, { AxiosResponse } from "axios";
import { ILoginResponseInterface } from "../interfaces/LoginResponseInterface";
import { ILoginRequestInterface } from "../interfaces/LoginRequestInterface";







export async function loginUser(request:ILoginRequestInterface):Promise<AxiosResponse<ILoginResponseInterface>>{
    try{
        const response = await axios.post('http://localhost:9090/api/auth/signin',request);
        return response;
    }catch(error:unknown){
        if(axios.isAxiosError(error)){
            const errorMessage = error.response?.data.errors.message || "Axios Error";
            throw new Error(errorMessage);
        }else{
            throw new Error("Network Error");
        }
    }
}