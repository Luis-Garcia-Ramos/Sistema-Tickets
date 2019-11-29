import React, {Fragment} from 'react';
const Footer = () => {

    const estilo1 = {
        maxWidth: '100%',
        marginLeft: '5%',
        marginTop: '.5%'
    }
    const estilo2 = {
        maxWidth: '100%', 
        //marginLeft: '20%', 
        marginTop: '.5%'
    }

    return (
        <Fragment>
            <div>
            <footer className="main-footer footer">
                <div className="list-info">
                    <div className="container-fluid" style={estilo1}>
                        <div className="row">
                            <div className="col-sm-3">
                                <img src="https://framework-gb.cdn.gob.mx/landing/img/logofooter.svg" href="/" alt="logo gobierno de méxico" style={estilo2}/>
                            </div>
                            <div className="col-sm-3">
                                <h6>Enlaces</h6>
                                <br/>
                                <ul>
                                    <li><a href="https://www.gob.mx/participa" target="_blank" rel="noopener noreferrer" title="Enlace abre en ventana nueva">Participa</a></li>
                                    <li><a href="https://www.gob.mx/publicaciones" target="_blank" rel="noopener noreferrer" title="Enlace abre en ventana nueva">Publicaciones Oficiales</a></li>
                                    <li><a href="http://www.ordenjuridico.gob.mx" target="_blank" rel="noopener noreferrer" title="Enlace abre en ventana nueva">Marco Jurídico</a></li>
                                    <li><a href="https://consultapublicamx.inai.org.mx/vut-web/" rel="noopener noreferrer" title="Enlace abre en ventana nueva">Plataforma Nacional de Transparencia</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-3">
                                <h5>¿Qué es gob.mx?</h5>
                                <p>Es el portal único de trámites, información y participación ciudadana. 
                                    <a href="https://www.gob.mx/que-es-gobmx">Leer más
                                    </a>
                                </p>
                            
                                <ul>
                                    <li><a href="https://datos.gob.mx">Portal de datos abiertos</a></li>
                                    <li><a href="https://www.gob.mx/accesibilidad">Declaración de Accesibilidad</a></li>
                                    <li><a href="https://www.gob.mx/privacidadintegral">Aviso  de privacidad integral</a></li>
                                    <li><a href="https://www.gob.mx/privacidadsimplificado">Aviso de privacidad simplificado</a></li>
                                    <li><a href="https://www.gob.mx/terminos">Términos y condiciones</a></li>
                                    <li><a href="https://www.gob.mx/terminos#medidas-seguridad-informacion">Política de seguridad</a></li>
                                    <li><a href="https://www.gob.mx/sitemap">Mapa del sitio</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-3">
                                <h5>Contacto</h5><p>
                                    <a href="https://www.gob.mx/tramites/ficha/presentacion-de-quejas-y-denuncias-en-la-sfp/SFP54">Denuncia contra servidores públicos</a></p>
                                <h5>Síguenos en</h5>
                                <ul className="list-inline">
                                    <li>
                                        <a target="_blank" rel="noopener noreferrer" title="Facebook de presidencia" href="https://www.facebook.com/gobmexico" aria-label="Facebook de presidencia">
                                            <i className="fab fa-facebook-square fa-2x"></i>
                                        </a>
                                    </li>
                                &nbsp;
                                <li>
                                        <a target="_blank" rel="noopener noreferrer" title="Twitter de presidencia" href="https://twitter.com/GobiernoMX" aria-label="Twitter de presidencia">
                                            <i className="fab fa-twitter fa-2x"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            </div>
        </Fragment>
    );
}
 
export default Footer;