import { signupUser } from "../../services/auth.service.js";


const form = document.getElementById('signup-form');

form.addEventListener('submit' , async (e)=>{
    e.preventDefault();

    const fullname = 
        document.getElementById('fullName').value;
    const username = 
        document.getElementById('username').value;

    const email = 
        document.getElementById('email').value;

    const password =
        document.getElementById('password').value;

    try{
        const response = await signupUser({
            fullname,
            username,
            email,
            password
        });
        if(response.success){
            alert("account created successfully");
            window.location.href=
                '../login/login.html'
        }else{
            alert(response.message)
        }
    }catch(error){
        console.error(error);
        alert('something went wrong')
    }
})