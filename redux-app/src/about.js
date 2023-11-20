import {UserManager}  from "oidc-client";
import {useNavigate} from 'react-router-dom'


const About = () => {

    var config = {
        authority: "https://localhost:4000/",
        client_id: "Client1",
        redirect_uri:  "http://localhost:3000/about/",
        response_type: "id_token token",
        scope: "openid profile api1.read apione.claims"
    };

    const history = useNavigate()
    var userManager =  new UserManager(config);

    const signinAsync = async () => {
        await userManager.signinRedirectCallback()
        history('/datapage');

    }

    // useEffect(() => {
    //     async function signinAsync() {
         
    //       // redirect user to home page
        
    //     }
    //     signinAsync()
    //   }, [history])

    return(
        <div className="App">
           About Component
           <input type="button" onClick={() => signinAsync()}></input>
        </div>

    )
}

export default About;