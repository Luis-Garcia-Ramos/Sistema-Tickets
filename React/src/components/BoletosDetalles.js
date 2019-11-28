import React, {Fragment, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

function BoletosDetalles({boleto, history})
{
    const [seleccionado, setSeleccionado] = useState({});
    useEffect(() =>{
        const asignarDetalles = () =>{
			setSeleccionado({
                id : boleto.rid
            })
        }
        
        if(boleto === undefined || boleto === null)
            history.push('/tickets');            
        else
            asignarDetalles()
    }, [history, boleto]);
    
    if(boleto === undefined || boleto === null)
    {
        history.push('/tickets');
        return(<p></p>)
    }
    else
    return(
        <Fragment>
            <div className ="container">
                <span className="texto text-center">Detalles del ticket</span>
                <hr className="red"/>
                <h4>Número: </h4>
                <input type="text" className="form-control" disabled
                    value={boleto.rid}/>

                <h4>Nombre: </h4>
                <input type="text" className="form-control" disabled
                    value={boleto.nombre}/>

                <h4>CURP: </h4>
                <input type="text" className="form-control" disabled
                    value={boleto.curp}/>

                <h4>Correo Electrónico: </h4>
                <input type="text" className="form-control" disabled
                    value={boleto.correo}/>
                
                <h4>Asunto:</h4>
                <input type="text" className="form-control" disabled
                    value={boleto.titulo}/>
                
                <h4>Atendio:</h4>
                <input type="text" className="form-control" disabled
                value={boleto.atendio}/>
                
                <h4>Respuesta:</h4>
                <textarea rows="10" className="form-control" disabled
                    value="respuesta">
                </textarea>
                <br/>
                <Link className="btn btn-primary pull-right"
                    to={`/tickets/evaluacion/${seleccionado.id}`}>Evaluar
                </Link>
            </div>
        </Fragment>
    )
}

export default withRouter(BoletosDetalles);