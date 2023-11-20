import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Datapage from "./Datapage";
import  Navigatation from './navigation'

const Login = () => {
    return(
        <div className="App">
            <Navigatation></Navigatation>
            <Routes>
            <Route path="/" Component={Home}></Route>
            <Route path="/about" Component={About}></Route>
            <Route path="/datapage" Component={Datapage}></Route>
            </Routes>
        </div>
    )
}

export default Login;