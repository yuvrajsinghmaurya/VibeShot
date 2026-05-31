import { appiRequest } from "./api";


export const loginUser= (data)=>{
    return appiRequest('/auth/login' , {
        method : "POST",
        body : JSON.stringify(data)
    });
};



export const signupUser = (data)=>{
    return appiRequest('/auth/register' ,{
        method : "POST",
        body:JSON.stringify(data),
    });
};