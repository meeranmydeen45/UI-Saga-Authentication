import { useDispatch, useSelector } from "react-redux";
import { Increment, Decrement, GetValue, GetMinusValue } from "./Redux/action";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";


const Home = () => {
    const dispatch = useDispatch();
    const counter = useSelector((s) => s.counter)
    const [data, setData] = useState();
    const myFunction = () =>
    {
        axios.get("https://localhost:44310/weatherforecast").then(res =>{
            setData(res.data)
        })
    }

    const dis = data?.map(x => {
        return(<div>
            {x.summary}
        </div>
        )
    })


    return(
        <div className="App">

            <button
            onClick={() => {dispatch(GetMinusValue())}}
            >-</button>
            My Home Page {counter.value}
            <button
            onClick={() => {dispatch(GetValue())}}
            >+</button>
            <div>
                Second Section
                <button onClick={() => {myFunction()}}>
                    GetAPIData
                </button>
                {dis}
            </div>
        </div>
    )
}

export default Home;