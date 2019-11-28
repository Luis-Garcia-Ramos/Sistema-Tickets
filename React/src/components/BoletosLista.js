import React from 'react';
import { Link } from 'react-router-dom';

const BoletosLista = ({boleto}) => {
    return ( 
            <tr>
                <td>{boleto.rid}</td>
                <td>{boleto.titulo}</td>
                <td>
                    <Link className="btn btn-info"
                        to={`/tickets/detalles/${boleto.rid}`}>Detalles
                    </Link>

                    <Link className="btn btn-primary col-xs-offset-1"
                        to={`/tickets/evaluacion/${boleto.rid}`}>Evaluar
                    </Link>
                </td>
            </tr>
     );
}
 
export default BoletosLista;