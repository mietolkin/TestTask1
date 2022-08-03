import React from 'react'
import { useState, useEffect, useContext } from "react";
import './gridContainer.css'

import useFetch from '../../hooks/UseFetch'
import Input from "../Input/Input";
import Grid from "../Grid/Grid";
import {Context} from '../../context'
import Modal from "../Modal/Modal";

export default function GridContainer() {
  
  const {data, loading, error} = useFetch('https://demo7919674.mockable.io/')
  const [mode, setMode] = useState('');
  const [fields, setFields] = useState('');
  const {start, setStart} = useContext(Context);
  const {setGridData} = useContext(Context);
  const [show, setShow] = useState(true);
  
  const onClickEvent = () => {
    setStart((prevState) => {
      if (fields) {
        return !prevState
      }
    });
  }

  useEffect(() => {
    if (!start) setGridData([]);
  }, [start]);

  return (
    <div className='GridContainer'>
        {loading ? <div>Loading...</div> : null}
        {error ? <div>Error</div> : null}
        {data ? (
        <div className="game-settings">
            <Input data={data} start={start} mode={mode} setFields={setFields} setMode={setMode} /> 
            <button disabled={fields ? '' : 'true'} onClick={onClickEvent}> {start ? "Stop" : "Start"} </button>
        </div>
        ) : null}
        {mode && start ? <Grid gridFields={fields}/> : null}

        <Modal show={{show, setShow}}>  </Modal> 
    </div>
  )
}
