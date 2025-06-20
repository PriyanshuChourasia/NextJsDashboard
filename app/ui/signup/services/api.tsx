import { IRegisterRequestInterface, IRegisterResponseInterface } from "../interfaces/RegisterInterface";
import axios, { AxiosResponse } from "axios";







export async function signUpUser(request:IRegisterRequestInterface):Promise<AxiosResponse<IRegisterResponseInterface>>{
    try{
        const response = await axios.post('http://localhost:9090/api/employee/create',request);
        return response;
    }catch(error:unknown){
        if(axios.isAxiosError(error)){
            const errorMessage = error.response?.data.errors.message || "Employee not created";
            throw new Error(errorMessage);
        }
        else{
            throw new Error("Network error");
        }
    }

}