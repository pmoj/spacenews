import { useEffect, useState } from "react";
<<<<<<< HEAD
import AxiosRequest from "../axios/config";
=======
import PontoEntradaAxios from "../axios/config";
>>>>>>> a23e369fbbf222fbc8175735bf3366297f14b7ee

export default function Home () {
    const [data, setData] = useState([{}])

    useEffect(() => {

<<<<<<< HEAD
        AxiosRequest.get("/apod")
        .then((retorno: any) => {
=======
        PontoEntradaAxios.get("/apod")
        .then((retorno) => {
>>>>>>> a23e369fbbf222fbc8175735bf3366297f14b7ee
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