import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
const Loading = () => {
    return (
        <div className='container mx-auto text-center text-light mt-3' style={{ height: "100vh" }}>
            <Spinner animation="border" />
        </div>
    );
};

export default Loading;