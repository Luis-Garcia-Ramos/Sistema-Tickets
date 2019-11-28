import React from 'react';

const Error = ({mensaje}) => (
    
    <div className="container">
        <br/><br/>
    <p className="alert alert-warning text-center">{mensaje}</p>
    </div>
);
 
export default Error;