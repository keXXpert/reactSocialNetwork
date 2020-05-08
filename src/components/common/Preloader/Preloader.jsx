import React from 'react';
import preloader from '../../../assets/images/preloader.svg';


const Preloader = (props) => {
    return (
        <div style={{ width: '100px', margin: '0 auto' }}>
            <img src={preloader} />
        </div>
    )
}

export default Preloader;