import React, { useState, useEffect } from 'react';
import myCSS from './Paginator.module.css'

const Paginator = ({pagesCount, pagesToDisplay, currentPage, onPageClick}) => {
    let blocksCount = Math.ceil(pagesCount / pagesToDisplay);
    let currentBlock = Math.ceil(currentPage / pagesToDisplay);
    let [block, setBlock] = useState(currentBlock);
    
    useEffect(() => {
        setBlock(currentBlock)
    },[currentBlock])

    let pages = [];
    for (let index = 1 + 10*(block-1); (index <= pagesToDisplay*(block)) && (index <= pagesCount); index++) {
        pages.push(index);
    }
    console.log(block)
    return (
            <div>
                {(block > 1) ? <><button onClick={() => {setBlock(1)}}>{'|<'}</button><button onClick={() => {setBlock(block - 1)}}>{'<<'}</button> </> : null }
                {pages.map(p => {
                    return <span className={currentPage === p && myCSS.selectedPage} onClick={() => { onPageClick(p) }}>{p} </span>
                })}
                {(block < blocksCount) ? <><button onClick={() => {setBlock(block +1)}}>{'>>'}</button><button onClick={() => {setBlock(blocksCount)}}>{'>|'}</button></>: null }
            </div>
    )
}

export default Paginator;