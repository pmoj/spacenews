import { Key, useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import AxiosRequest from "../axios/config";

interface NearModalProps {
    closeModal: () => void;
  }

const NearModal: React.FC<NearModalProps> = ({ closeModal }) => {
    
    const [day, month, year] = new Date().toLocaleDateString().split('/');
    // const date = `${year}-${month}-${day}`
    const date = "2015-09-07"

    const [response, setResponse] = useState<any>([]);

    useEffect(() => {

        AxiosRequest.get("/near", {
            params: { date: date },
        })
        .then((retorno: any) => {
            setResponse(retorno.data.near_earth_objects["2015-09-07"])
        })
        .catch(function(erro){
        })
        .finally();
    },[])

    useEffect(() => {
        console.log(response)
    },[response])

    return (
        <>
            <Modal show={true} onHide={closeModal} centered backdrop="static" keyboard={false}>
                <Modal.Header>
                    <Modal.Title>Objetos próximos a terra</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <ul>
                    {response.length > 0 &&
                        response.map(
                            (obj: any, index: Key | null | undefined) => {
                                return (
                                    <li key={index}>
                                        {/* <li>Nome do corpo: {obj.name}</li> */}
                                        {/* <img className="modal-img" src={foto.img_src} alt="Picture" /> */}
                                    </li>
                                );
                            }
                        )
                    }
                </ul>
                </Modal.Body>
                <Modal.Footer>
                <p>{response.explanation}</p>
                </Modal.Footer>
            </Modal>
        </>
      );
}

export default NearModal;