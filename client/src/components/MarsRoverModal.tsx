import { Key, useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import AxiosRequest from "../axios/config";

interface MarsRoverModalProps {
    closeModal: () => void;
  }

const MarsRoverModal: React.FC<MarsRoverModalProps> = ({ closeModal }) => {
    
    const [day, month, year] = new Date().toLocaleDateString().split('/');
    // const date = `${year}-${month}-${day}`
    const date = "2022-06-14"

    const [response, setResponse] = useState<any>([]);

    useEffect(() => {

        AxiosRequest.get("/mars_rover", {
            params: { date: date },
        })
        .then((retorno: any) => {
            setResponse(retorno.data.photos)
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
            <Modal.Title>{response.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img className="modal-img" src={response.url} alt="" />
            <ul>
                {response.length > 0 &&
                    response.map(
                        (foto: any, index: Key | null | undefined) => {
                            return (
                                <li key={index}>
                                    <img className="modal-img" src={foto.img_src} alt="Picture" />
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

export default MarsRoverModal;