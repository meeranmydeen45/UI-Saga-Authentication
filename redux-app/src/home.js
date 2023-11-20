import {UserManager}  from "oidc-client";


const Home = () => {

    var config = {
        authority: "https://localhost:4000/",
        client_id: "Client1",
        redirect_uri:  "http://localhost:3000/about/",
        response_type: "id_token token",
        scope: "openid profile api1.read apione.claims"
    };

    var userManager =  new UserManager(config);

     const singIn = () => {
        console.log(userManager)
        userManager.signinRedirect();
     }
     
    return(
        <div className="App">
           Home Component
           <input type="button" value="ClickMe" onClick={() => singIn()}></input>
        </div>
    )
}

export default Home;