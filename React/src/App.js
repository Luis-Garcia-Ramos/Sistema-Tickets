import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import axios from 'axios';
//import {Planets} from 'react-preloaders';
import Error from './components/Error';
import Boletos from './components/Boletos';
import BoletosDetalles from './components/BoletosDetalles';
import BoletosEvaluacion from './components/BoletosEvaluacion';

import Header from './components/Header';
import Footer from './components/Footer';


function App()
{
	//estados de los tickets
	const [boletos, setBoletos] = useState([]);
	const [codigo, setCodigo] = useState();
	const [mensaje, setMensaje] = useState('');
	//recargar de la bd
	const [recargarBoletos, actualizarBoletos] = useState(true);
	//control de conexión
	const [errorConexion, setErrorConexion] = useState(false);
	//estado del loader
	const [loading, setLoading] = useState(true);

	let componente;

	useEffect(() =>{
		if(recargarBoletos)
		{
			const asiganrBoletos = (resultado, codigo, mensaje) =>{
				setCodigo(codigo)
				setMensaje(mensaje)
				setBoletos(resultado)
			}
			const consultarApi = async () =>{
				try{
					const url= 'http://localhost:3001/api/tickets';
					const resultado1 = await axios.post(url,{
					curp: "KARLA019191MDFT09"
					});
					const temp = resultado1.data
					const {codigo, mensaje, resultado} = temp
					asiganrBoletos(resultado, codigo, mensaje);
					setLoading(false);
				}
				catch(error)
				{
					setLoading(false);
					setErrorConexion(true);
				}
			}
			
			consultarApi(boletos);
			actualizarBoletos(false);
		}

	}, [recargarBoletos, boletos]);

	if(errorConexion)
		componente = <Error mensaje = {"Error de conexión con el servidor"}/>
	else
	{
		
		/*if(loading===true)
			componente = <Planets customLoading={loading} time={0} background="#808080" color="#560319"/>
		else*/
			componente = <Boletos boletos = {boletos} codigo={codigo} mensaje ={mensaje}/>
	}
	
	return (
		<Router>
			<Header/>
			<div className="principal">
			<Switch>
				<Route exact path="/tickets"
				//datos a un componente
					render={() =>(
						componente
					)}/>
				<Route exact path="/tickets/detalles/:id"
					render={props =>{
						const idDetalles = parseInt(props.match.params.id);
						const boleto = boletos.filter(boleto => boleto.rid === idDetalles)
						return(
							<BoletosDetalles
								boleto = {boleto[0]}
							/>
						)
					}}
				/>
				<Route exact path="/tickets/evaluacion/:id"
					render={props =>{
						const idBoleto = parseInt(props.match.params.id);

						return(
							<BoletosEvaluacion
								id = {idBoleto} actualizarTickets = {actualizarBoletos}
							/>
						)
					}}
				/>
			</Switch>
			</div>
			<Footer/>
		</Router>
	);
}

export default App;