

export interface ILoginResponseInterface{
    data:{
        access_token:string;
        refresh_token:string;
    },
    errors:{
        message:string
    }
    success:boolean
}