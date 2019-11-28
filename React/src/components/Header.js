import React, {Fragment} from 'react';
import { NavLink, Link } from 'react-router-dom';


function Header()
{
    const estilo1 = {
        paddingLeft: '8px'
    };

    const estilo2 = {
        paddingTop: '4px'
    };

    return(
    <Fragment>

    <nav className="navbar navbar-inverse navbar-fixed-top header" role="navigation">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbarMainCollapse">
                    <span className="sr-only">Interruptor de Navegación</span><span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <Link to="https://www.gob.mx/" className="navbar-brand" style={estilo1}>
	                <img src="https://framework-gb.cdn.gob.mx/landing/img/logoheader.png" width="156" height="96" alt="Página de inicio, Gobierno de México"/>
                </Link>
            </div>
            <div className="collapse navbar-collapse" id="navbarMainCollapse">
                <ul className="nav navbar-nav navbar-right">
                    <li><Link to="https://www.gob.mx/tramites">Trámites</Link></li>
                    <li><Link to="https://www.gob.mx/gobierno">Gobierno</Link></li>
                    <li>
                        <Link to="https://www.gob.mx/busqueda">
                        <span className="sr-only">Búsqueda</span>
                        <i className="fa fa-search" style={estilo2}></i>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

        <nav>
   
            <NavLink to="/tickets" className="">Inicio</NavLink>
            <NavLink to="/tickets">Lista de Tickets</NavLink>
            <NavLink to="/tickets">Lista de Evaluaciones</NavLink>
        </nav>
        
        <br/><br/><br/>
    </Fragment>

    )
}
 
export default Header;