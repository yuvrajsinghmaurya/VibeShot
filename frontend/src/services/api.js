import { API_BASE_URL } from "../config/config";

export const appiRequest = async( endpoint , options={})=>{
    // get jwt from storege 
    const token = localStorage.getItem('token');


    const response = await fetch(
        `${API_BASE_URL}${endpoint}`,
        {
            ...options,
            headers:{
                "Content-Type" : 'application/json',
                Authorization : token ? `Bearer ${token}` : "",
                ...options.headers
            },
        }


    );

    return await response.json();

}