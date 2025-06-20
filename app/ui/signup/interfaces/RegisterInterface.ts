export interface IRegisterRequestInterface{
    name:string;
    email:string;
    password:string;
}

export interface IRegisterResponseInterface{
    success:boolean;
    errors:{
        message:string;
    },
    data:{
        id:string;
        name:string;
        email:string;
    },
    message:string;
}