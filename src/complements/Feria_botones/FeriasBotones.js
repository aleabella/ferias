import './FeriasBotones.css'
import LogoTrebol from "./FeriaProvicional.png"
import { Link } from 'react-router-dom'
function FeriasBotones(){
    return (
        <>
        <div class="contenedor">
		<h1>Selecciona la Feria</h1>

		<div class="contenedor-botones">
			<Link to="/ferias/primera"><button class="boton"><span> <img src={LogoTrebol} alt="LogoTrebol" height="90" />Primera Feria </span></button></Link>
			
			<Link to="/ferias/segunda"><button class="boton"><span><img src={LogoTrebol} alt="LogoTrebol" height ="90"/>Segunda Feria</span></button></Link>

			<Link to="/ferias/tercera"><button class="boton"><span><img src={LogoTrebol} alt="LogoTrebol" height ="90"/>Tercera Feria</span></button></Link>
			
            <Link to="/ferias/cuarta"><button class="boton"><span><img src={LogoTrebol} alt="LogoTrebol"  height ="90"/>Cuarta Feria</span></button></Link>

			<Link to="/ferias/quinta"><button class="boton"><span><img src={LogoTrebol} alt="LogoTrebol" height ="90" />Quinta Feria</span></button></Link>

            <Link to="/ferias/sexta"><button class="boton"><span><img src={LogoTrebol} alt="LogoTrebol" height ="90"/>Sexta Feria</span></button></Link>
				</div>
			
			
		
		</div>
	
        </>
    )
}

export default FeriasBotones;