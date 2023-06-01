import { useEffect, useState } from "react";
import PontoEntradaAxios from "../axios/config";

export default function Home () {
    const [data, setData] = useState([{}])

    useEffect(() => {

        PontoEntradaAxios.get("/apod")
        .then((retorno) => {
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