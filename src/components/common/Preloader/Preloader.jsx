import React from 'react';
import preloader from '../../../assets/images/preloader.svg';


const Preloader = () => {
    return (
        <div style={{ width: '150px', margin: '0 auto', position: 'fixed', top: '50%', left: '50%'  }}>
            <img src={preloader} alt='Data being processed'/>
        </div>
    )
}

export default Preloader;