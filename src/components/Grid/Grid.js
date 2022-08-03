import './grid.css';
import React, { useEffect, useState, useContext } from 'react'
import {Context} from '../../context'

export default function Grid(props) {
    
    const {gridFields} = props;
    const {gridData, setGridData} = useContext(Context);

    useEffect(() => {
        if(gridFields) {
            createGridArray(gridFields);
        }
    }
    , [gridFields]);

    const createGridArray = (gridFields) => {
        let rows = [];
        for(let i = 0; i < gridFields; i++) {
            let column = [];
            for(let j = 0; j < gridFields; j++) {
                column.push({
                    id: `${i}${j}`,
                    row: i + 1,
                    className: 'column',
                });
            }
            rows.push(column);
        }
       
        setGridData((prevState) => [...rows]);
       
    }

    const mouseHover = (e) => {
        const row = e.target.attributes.row.value;
        const column = e.target.attributes.column.value;
        const className = e.target.attributes.class.value;
        const newGridData = [...gridData];
        newGridData[row][column].className = className === 'column' ? 'column column-hover' : 'column';    
        setGridData(newGridData);
    }



    return (
        <div className='grid-container'>{
            gridData.length ? (
                gridData.map((row, index) => (
                    <div key={row[0].id} className='row'>
                        {row.map((column, i) => (
                            <div key={column.id} className={column.className} row={index} column={i} onMouseEnter={mouseHover}>
                                {column.id}
                            </div>
                        ))}
                    </div>
                ))
            ) : null
            }</div>
    )
}
