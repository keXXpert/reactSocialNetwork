import React from 'react';
import preloader from '../../../assets/images/preloader.svg';


const Preloader = () => {
    return (
        <div style={{ width: '100px', margin: '0 auto' }}>
            <img src={preloader} alt='Data being processed'/>
        </div>
    )
}

export default Preloader;