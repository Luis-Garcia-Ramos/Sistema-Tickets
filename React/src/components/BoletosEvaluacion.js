import React, {Fragment, useState} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Switch from 'react-input-switch';
import { withRouter } from 'react-router-dom';

import Error from './Error';


function BoletosEvaluacion({history, id, actualizarTickets})
{
    //estados de la evaluación del ticket
    const [rid_ticket, setIdTicket] = useState();
	const [pregunta, setPregunta] = useState(0);
	const [respuesta, setRespuesta] = useState(0);
	const [resuelta, setResuelta] = useState(0);
	const [evaluacion, setEvaluacion] = useState("");
	const [comentarios, setComentarios] = useState("");
    //const [fecha_evaluacion, setFechaEvaluacion] = useState("");
    const [error, setError] = useState(false)

    
    const guardarComentarios = e =>{
        e.preventDefault();
		setComentarios(e.target.value);
		//asignarFechaCreacion();
	}

	const seleccionarEvaluacion = (e) =>{
		if(e.target.value !== undefined)
		{
			setEvaluacion(parseInt(e.target.value));
			setIdTicket(parseInt(id));
            setError(false);
        }
        else{
            setError(true);
        }
	}

    /*
	const asignarFechaCreacion = () =>{
		var fecha= moment().format("YYYY-MM-DD HH:mm:ss");
		setFechaEvaluacion(fecha);
	}*/
	
	const evaluar = async () =>{
        if(evaluacion !== '' && evaluacion !==null && evaluacion !== undefined && rid_ticket !==null)
        {
            setError(false);
            try{
                const url= 'http://localhost:3001/api/tickets/evaluacion';
                const envio = {
                    "rid_ticket": rid_ticket,
                    "pregunta": pregunta,
                    "respuesta": respuesta,
                    "resuelta": resuelta,
                    "comentarios": comentarios,
                    "deleted": 0,
                    "evaluacion" : evaluacion
                }
                console.log(envio)
                const datosEvaluacion = await axios.post(url, envio);
                //console.log(datosEvaluacion.data);
                if(datosEvaluacion.data.codigo===1)
                {
                    Swal.fire(
                        'Evaluacion asignada', 
                        'Tus comentarios serán tomados en cuenta', 
                        'success')
                          //Redirigir
                }
                if(datosEvaluacion.data.codigo!==1)
                {
                    Swal.fire(
                        'Error', 
                        'Ya se ha evaluado al ticket elegido', 
                        'error'
                    )
                }
                actualizarTickets(true);
                    history.push('/tickets');
                
                
            } catch (error)
            {
                console.log(error);
                Swal.fire(
                    'Error', 
                    'Error de conexión, vuelva a intentarlo', 
                    'error'
                )
            }
        }

        else{
            window.scroll({
                top:0,
                left:0,
            })
            setError(true);
        }        
    }

    return(
        <Fragment>
            <form>
                <div className="container">
                <span className="texto text-center">Sección de evaluación</span>
                <hr className="red"/>
                {(error) ? <Error mensaje='Todos los campos son obligatorios' /> : null}
                <div className="interruptor">
                    <span className="texto">¿La pregunta que usted realizó al sistema de tickets es la registrada?</span>
                    <br/>
                    <span className="texto no">No&nbsp;</span>
                    <Switch
                        value={pregunta} onChange={setPregunta}
                    />
                    <span className="texto si">&nbsp;Sí</span>
                    <br/><br/>
                    <span className="texto">¿Las respuestas que le proporcionaron son las registradas?</span>
                    <br/>
                    <span className="texto no">No&nbsp;</span>
                    <Switch
                        value={respuesta} onChange={setRespuesta}/
                    >
                    <span className="texto si">&nbsp;Sí</span>
                    <br/><br/>
                    <span className="texto">¿Se resolvió su problema?</span>
                    <br/>
                    <span className="texto no">No&nbsp;</span>
                    <Switch
                        value={resuelta} onChange={setResuelta}/
                    >
                    <span className="texto si">&nbsp;Sí</span>

                    <br/><br/>
                </div>
                <span className="texto">Evaluación del servicio</span>&nbsp;&nbsp;
                <span className="texto text-warning">* campo obligatorio</span>
                <select className="form-control" onChange={seleccionarEvaluacion} required>
                    <option value=""></option>
                    <option value="1">Mala</option>
                    <option value="2">Regular</option>
                    <option value="3">Suficiente</option>
                    <option value="4">Buena</option>
                    <option value="5">Excelente</option>
                </select>
                <br/><br/>

                <span className="texto">Comentarios (Mínimo 50 caracteres, Máximo 500 caracteres):</span>
                <br/>
                <textarea rows="10" className="form-control" maxLength="500" onChange={guardarComentarios}></textarea>		
                <br/><br/>

                <button type="button" className = "btn btn-success pull-right" onClick={evaluar}>Guardar Evaluación</button>

            </div>
            </form>
        </Fragment>
    )
}

export default withRouter(BoletosEvaluacion);