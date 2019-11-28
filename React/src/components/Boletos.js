import React, {Fragment} from 'react';

import Error from './Error';
import BoletosLista from './BoletosLista';

const Boletos = ({boletos, codigo, mensaje}) => {
    let componente
    
        if (codigo === 0)
            componente = <Error mensaje = {mensaje}/>
        else
        {
            componente =
            <div>
            <span className="texto text-center">Por favor selecciona un folio</span>
            <hr className="red"/>
                {/*<select className = "form-control">
                    <option value = ""  selected disabled> Seleccione el ticket a evaluar</option>
                    {
                        resultado.map(boleto =>(
                            <option key={boleto.rid} value={boleto.rid}>{boleto.rid}</option>
                        ))
                    }
                </select>*/}
            <div className="table-responsive">
               <table className="table table-bordered table-hover text-center">
                    <thead>
                        <tr>
                            <td>N° de Ticket</td>
                            <td>Asunto</td>
                            <td>Acciones</td>
                        </tr>
                        
                    </thead>
        
                    <tbody>
                    {
                        boletos.map( boleto =>(
                            
                            <BoletosLista key={boleto.rid} boleto={boleto}/>   
                        ))
                    }
                    </tbody>
                </table>
            <br/>
            </div>
            </div>
    }
    
    return(
    <Fragment>
        <div className="container">
            {componente}
		</div>
    </Fragment>
    )
}

export default Boletos;