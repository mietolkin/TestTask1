import React, { useEffect, useMemo } from 'react'
import { createPortal } from 'react-dom';
import Meme from '../../images/beep-boop.jpeg';
import "./modal.css";


const modalRootElement = document.getElementById('modal');

export default function Modal(props) {

    const element = useMemo(() => document.createElement('div'), []);
    const { show } = props;

    const handleCloseClick = (e) => {
        show.setShow(false);
    }

    useEffect(() => {
        modalRootElement.appendChild(element);

        return () => {
            modalRootElement.removeChild(element);
        }

    }, []);

 


    return createPortal((
        <div id="myModal" className="modal" style={{ display: show.show ? 'block' : 'none' }}>
            <div className="modal-content">
            <span onClick={handleCloseClick} className="close">&times;</span>
            <p>I'm heppy you are here 😊</p>
            <p> Here is some meme for You!</p>
            <p> Have a good day!</p>
            <img className='img' src={Meme} alt='beep boop' />

            </div>
      </div>
      
    ), element);
}
