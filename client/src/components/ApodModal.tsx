import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import AxiosRequest from "../axios/config";

interface ApodModalProps {
    closeModal: () => void;
  }

const ApodModal: React.FC<ApodModalProps> = ({ closeModal }) => {
    
    const [day, month, year] = new Date().toLocaleDateString().split('/');
    const date = `${year}-${month}-${day}`

    const [response, setResponse] = useState<any>([]);

    useEffect(() => {

        AxiosRequest.get("/apod", {
            params: { date: date },
        })
        .then((retorno: any) => {
            setResponse(retorno.data)
        })
        .catch(function(erro){
        })
        .finally();
    },[])

    useEffect(() => {
        console.log(response)
        if (response.title) {
            console.log(response.title)
            console.log(response.date)
            console.log(response.url)
        }
    },[response])

    return (
      <>
        <Modal show={true} onHide={closeModal} centered backdrop="static" keyboard={false}>
          <Modal.Header>
            <Modal.Title>{response.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img className="modal-img" src={response.url} alt="Picture of the day" />
          </Modal.Body>
          <Modal.Footer>
            <p>{response.explanation}</p>

          </Modal.Footer>
        </Modal>
      </>
    );
}

export default ApodModal;