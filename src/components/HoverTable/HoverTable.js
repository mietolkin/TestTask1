import React from 'react'
import './hoverTable.css'
import { useState, useEffect, useContext } from 'react'
import {Context} from '../../context'

export default function HoverTable() {
    const {gridData} = useContext(Context);
    const {start} = useContext(Context);
    const [gridInfo, setGridInfo] = useState([]);

    useEffect(() => {
        if (!start) setGridInfo([]);
        if(gridData.length && start) {
            const gridInfo = gridData.map((row, index) => {
                const hovered = row.filter((column, i) => column.className === 'column column-hover');
                return hovered
            });

           setGridInfo(gridInfo);
        }

    }
    , [gridData, start]);

    
    

  return (
    <div className='hover-table'>
        
        {start ? <h2> Hivered squeres </h2> : null}
        {
            gridInfo.length ? (
                gridInfo.map((row, index) => (
                    <div key={index} className='hover-table-row'>
                      
                        {row.map((column, i) => (
                            <div key={column.id} row={index} column={i}>
                                <p>
                                   Row: {index+1} Column: {column.id} 
                                </p>
                            </div>
                        ))}
                    </div>
                ))
            ) : null

        }

    </div>
    
  )
}
