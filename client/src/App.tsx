import { useState } from 'react';
import './App.css';
import ApodModal from './components/ApodModal';
import Centralbox from './components/Centralbox';
import space from "public/space.jpg";
import { Button, Modal } from 'react-bootstrap';

function App() {
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div>
        <div className='centralbox'>
          <div className="menu">
            <button onClick={() => console.log('xd')}>APOD</button>
            <button>MARS ROVER</button>
            <button>NEAR OBJECTS</button>
          </div>
          <div className='content'>
            <ApodModal/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
