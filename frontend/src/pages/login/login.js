import { loginUser } from "../../services/auth.service.js";

const form = document.getElementById('login-form');

form.addEventListener('submit' , async(e)=>{
    e.preventDefault();

    const email=
        document.getElementById('email').value;
    const password = 
        document.getElementById('password').value;


    try {
        const response = await loginUser({
            email,
            password
        });
        if(response.success){
            // save jwt token in browser local 
            localStorage.setItem(
                'token',
                response.data.token
            );
             // Save User Data (optional)
            localStorage.setItem(
                'user',
                JSON.stringify(response.data.user)
            );

            alert('Login Successful');

            // Redirect to Feed
            window.location.href =
                '../feed/feed.html';

        } else {

            alert(response.message);
        }
        
    } catch (error) {
        console.error(error);

        alert('Login Failed');

    }

})



