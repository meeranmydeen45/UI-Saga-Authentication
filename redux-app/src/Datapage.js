import {UserManager}  from "oidc-client";
import axios from 'axios';

const Datapage = () => {
    var config = {
        authority: "https://localhost:4000/",
        client_id: "Client1",
        redirect_uri:  "http://localhost:3000/about/",
        response_type: "id_token token",
        scope: "openid profile api1.read apione.claims"
    };

   var userManager =  new UserManager(config);

    const DataLoad = () => 
    {
        axios.defaults.withCredentials = true
        axios.get("https://localhost:5222/home/Get").then(res => {
                console.log(res)
               });
    }

    const LoadAdminPage = () => 
    {
        userManager.getUser().then(user => {
            console.log("user :", user);
            if (user) {
                console.log(user.access_token)
               axios.defaults.withCredentials = true
               axios.defaults.headers.common["Authorization"] = "Bearer " + user.access_token;
               axios.get("https://localhost:5001/home/adminPage").then(res => {
                console.log(res)
               })
            }});
        
    }
    return(
        <div className="App">
           DataPage Component
           <input type="button" value="AdminPage-JWT" onClick={() => LoadAdminPage()}></input>
           <input type="button" value="DataLoad-Cookie" onClick={() => DataLoad()}></input>
        </div>
    )



}

export default Datapage;

