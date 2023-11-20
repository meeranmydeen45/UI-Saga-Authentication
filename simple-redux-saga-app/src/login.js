import {GoogleLogin} from 'react-google-login'



const Login = () => {
    const responseGoogle = (response) => {
        console.log(response);
        // Send the response (e.g., access token) to your backend for verification.
      }


    return(
        <GoogleLogin
        clientId="133038861266-1r8cghsgl515jbmvslsspgmguojj8tp3.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        redirectUri="http://localhost:3000/home"
      />
    )

}
export default Login;