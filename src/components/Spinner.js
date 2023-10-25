import React from 'react';
import spinner from './Spinner-1s-200px.gif'

const Spinner = () => {
    return (
        <div className="container text-center">
            <img src={spinner} alt="loader" />
        </div>

    )
}

export default Spinner;
