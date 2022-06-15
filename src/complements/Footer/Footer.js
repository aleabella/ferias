import'./Footer.css'
import Somos from './SomosSP.png'
function Footer() {

return(
    <div class="footer">
        <div class="icons-footer">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-brands fa-instagram"></i>
        </div>
        <div class="texts-footer">
                <div class="info-one">
                    <h4>CONTACTO</h4>
                    <a href="#">Colegio San Patricio</a><br></br>
                    <a href="#">Carrera 80# 197-02</a><br></br>
                    <a href="#">PBX(601) 683-8640</a><br></br>
                    <a href="#">Whatsapp:318-355-2832</a><br></br>
                    <a href="#">Bogotá, Colombia</a><br></br>
                </div>
            <div class="info-two">
                <div class="text-footer">
                    <h4>SECCIONES</h4>
                            <a href="#">STEAM</a><br></br>
                            <a href="#">Ferias</a><br></br>
                            <a href="#">Proyectos</a><br></br>
                    </div>
                    <div class="text-footer">
                    <h4>INFORMACIÓN</h4>
                            <a href="#">Recursos</a><br></br>
                            <a href="#">Conceptos de STEAM</a><br></br>
                            <a href="#">Proyectos transversales</a><br></br>
                    </div>
            </div>
            
            
        </div>
        <div class="img-footer">
            <img src={Somos}  alt=""></img>
            <h6>©2020 San Patricio School. All rights reserved.
            </h6>
        </div>

    </div>
);
}
export default Footer;
