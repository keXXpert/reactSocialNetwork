import React, { useState, useEffect } from 'react';
import myCSS from './Paginator.module.css'
import classNames from 'classnames';

interface PaginatorProps {
    pagesCount: number
    pagesToDisplay: number
    currentPage: number
    onPageClick: (page: number) => void
}

const Paginator: React.FC<PaginatorProps> = ({ pagesCount, pagesToDisplay, currentPage, onPageClick }) => {
    const blocksCount = Math.ceil(pagesCount / pagesToDisplay);
    const currentBlock = Math.ceil(currentPage / pagesToDisplay);
    const [block, setBlock] = useState(currentBlock);

    useEffect(() => {
        setBlock(currentBlock)
    }, [currentBlock])

    let pages = [];
    for (let index = 1 + 10 * (block - 1); (index <= pagesToDisplay * (block)) && (index <= pagesCount); index++) {
        pages.push(index);
    }
    return (
        <div>
            {(block > 1) ? <><button onClick={() => { setBlock(1) }}>{'|<'}</button><button onClick={() => { setBlock(block - 1) }}>{'<<'}</button> </> : null}
            {pages.map(p =>
                <span
                    key={p}
                    className={classNames(myCSS.paginator, { [myCSS.selectedPage]: currentPage === p })}
                    onClick={() => { onPageClick(p) }}>
                    {p}
                </span>
            )}
            {(block < blocksCount) ? <><button onClick={() => { setBlock(block + 1) }}>{'>>'}</button><button onClick={() => { setBlock(blocksCount) }}>{'>|'}</button></> : null}
        </div>
    )
}

export default Paginator;