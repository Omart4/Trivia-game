import React, { useCallback, useContext, useEffect, useState } from "react"
import GlobalContext from "../Components/GlobalContext";
import { Loading } from "../Components/Loader";
import '../Styles/GamePage.css'
import Question from "../Components/Question";

const GamePage = () => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    const g_data = useContext(GlobalContext)

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
      {loading && <Loading/>}
      {!loading && data.results.map((question_data)=>(
        <Question quest = {question_data}/>
      ))}
    </div>
  )
};

export default GamePage;
