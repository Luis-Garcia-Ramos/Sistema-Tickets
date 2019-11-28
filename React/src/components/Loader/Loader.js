import React, {Fragment} from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';



function Loader()
{
    return(
        <Fragment>
            <div className="loader">
            <PropagateLoader
                 sizeUnit={"px"}
                 size={50}
                 color={'#fefefe'}
            />
            </div>
        </Fragment>
    )
}

export default Loader;