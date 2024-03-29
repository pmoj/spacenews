import { useState } from 'react';
import './App.css';
import ApodModal from './components/ApodModal';
import Centralbox from './components/Centralbox';
import space from "public/space.jpg";
import { Button, Modal } from 'react-bootstrap';
import MarsRoverModal from './components/MarsRoverModal';
import NearModal from './components/NearModal';

function App() {
  
  const [isModal1Open, setIsModal1Open] = useState(false);

  const openModal1 = () => {
    setIsModal3Open(false);
    setIsModal2Open(false);
    setIsModal1Open(true);
  };

  const closeModal1 = () => {
    setIsModal1Open(false);
  };

  const [isModal2Open, setIsModal2Open] = useState(false);

  const openModal2 = () => {
    setIsModal3Open(false);
    setIsModal1Open(false);
    setIsModal2Open(true);
  };

  const closeModal2 = () => {
    setIsModal2Open(false);
  };

  const [isModal3Open, setIsModal3Open] = useState(false);

  const openModal3 = () => {
    setIsModal1Open(false);
    setIsModal2Open(false);
    setIsModal3Open(true);
  };

  const closeModal3 = () => {
    setIsModal3Open(false);
  };
  
  return (
    <>
      <div>
        <div className='centralbox'>
          <div className="menu">
            <button onClick={isModal1Open?closeModal1:openModal1}>PICTURE OF THE DAY</button>
            <button onClick={isModal2Open?closeModal2:openModal2}>MARS ROVER</button>
            <button onClick={isModal3Open?closeModal3:openModal3}>NEAR OBJECTS</button>
          </div>
          <div className='content'>
            {isModal1Open && (
              <ApodModal closeModal={closeModal1} />
            )}
            {isModal2Open && (
              <MarsRoverModal closeModal={closeModal2} />
            )}
            {isModal3Open && (
              <NearModal closeModal={closeModal3} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
