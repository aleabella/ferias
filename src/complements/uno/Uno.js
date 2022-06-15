import Foto1_1 from "./1_1feria.jpg" 
import Foto1_2 from "./1_2feria.jpg" 
import Foto1_3 from "./1_3feria.jpg" 
import Foto1_4 from "./1_4.jpg" 
import Foto1_5 from "./1_5feria.jpg" 
import Foto1_6 from "./1_6 feria.jpg" 
import Foto1_7 from "./1_7 feria.jpg" 
import Foto1_8 from "./1_8 feria.jpg" 
import './Uno.css'
function Uno (){
    return (
        <>
            <div class="slideFeria">
     
     <h1>Primera Feria STEAM</h1>
 </div>
 <div class="tituloFeria">
     <a href="./ferias.html"><button class="back"><i class="fa-solid fa-arrow-left"></i></button></a>
     <h1>Nuestros Proyectos</h1>
     <br/>
     <h2><img src="..//assets/img/bx-calendar 2.png" alt="calendarioicon" />2017</h2>
     <hr/>
     <h3>Descripción de la Feria:</h3> 
     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A ipsum velit ut rerum reprehenderit culpa ullam! Ducimus, hic ut aliquid qui accusamus et porro repudiandae voluptates ipsa consequatur dolore ab.
     Lorem, ipsum dolor sit amet consectetur adipisicing elit. A ipsum velit ut rerum reprehenderit culpa ullam! Ducimus, hic ut aliquid qui accusamus et porro repudiandae voluptates ipsa consequatur dolore ab
     </p> 
     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A ipsum velit ut rerum reprehenderit culpa ullam! Ducimus, hic ut aliquid qui accusamus et porro repudiandae voluptates ipsa consequatur dolore ab. Lorem, ipsum dolor sit amet consectetur adipisicing elit. A ipsum velit ut rerum reprehenderit culpa ullam! Ducimus, hic ut aliquid qui accusamus et porro repudiandae voluptates ipsa consequatur dolore ab Lorem, ipsum dolor sit amet consectetur adipisicing elit. A ipsum velit ut rerum reprehenderit culpa ullam! Ducimus, hic ut aliquid qui accusamus et porro repudiandae voluptates ipsa consequatur dolore ab</p> 
     <br/>
     <hr/>
     <div class="row">
         <div class="column">
             <img class="zoom" alt="Foto1_1" src={Foto1_1}/>
             <img  class="zoom" alt="Foto1_2" src={Foto1_2}/>
         </div>
 
         <div class="column">
             <img class="zoom" alt="Foto1_3" src={Foto1_3}/>
             <img class="zoom" alt="Foto1_4" src={Foto1_4}/>
         </div>
         
         <div class="column">
             <img class="zoom" alt="{Foto1_5" src={Foto1_5}/>
             <img class="zoom" alt="Foto1_6" src={Foto1_6}/>
         </div>
         
         <div class="column">
             <img class="zoom" alt="Foto1_7" src={Foto1_7}/>
             <img class="zoom" alt="Foto1_8" src={Foto1_8}/>
         </div>
    
     </div>
   
     <div class="galeriaBoton">
         <a href="primergaleria.html"><button class="boton cinco"><div class="icono">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                 <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
             </svg>
         </div>
         <span>Ver más en la galeria de fotos</span></button></a>  
 </div>
 </div>
 </>
    )
}

export default Uno;