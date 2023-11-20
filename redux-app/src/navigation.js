import { Link } from "react-router-dom";

const Navigation = () => {
    return(
        <div>
            <ul>
                <li>
                <Link to="/about">About</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navigation;