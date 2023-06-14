import { useEffect, useState } from "react";
import AxiosRequest from "../axios/config";

export default function Home () {
    const [data, setData] = useState([{}])

    useEffect(() => {

        AxiosRequest.get("/apod")
        .then((retorno: any) => {
            console.log(retorno);
        })
        .catch(function(erro){
        })
        .finally();
    },[])
    return (
        <h1>Home</h1>
    )
}