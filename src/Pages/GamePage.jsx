import React, { useContext, useEffect, useState } from "react"
import { useLoaderData, useLocation } from "react-router-dom";
import GlobalContext from "../Components/GlobalContext";
import { Loading } from "../Components/Loader";

const GamePage = () => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    const g_data = useContext(GlobalContext)
    const [count,setCount] = useState(0)

    const fetchData = async (api) => {
        fetch(api)
        .then(res=>res.json())
        .then((info)=>{
            setData(info)
            setLoading(false)
            console.log(info)
        })
        .catch(err=>console.log(err))
    }

    useEffect(()=>{
        fetchData(g_data.api)
        console.log("kool")
    },[])

  return (
    <div className="game">
      {loading? <Loading/>:`<p>${JSON.stringify(data.results)}</p>`}
    </div>
  )
};

export default GamePage;
