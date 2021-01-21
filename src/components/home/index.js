import './styles.css';
import { Link } from "react-router-dom";




function Home() {

    return(

        <div className="home">
            <div>
                <img className="logo" src="https://static.mlstatic.com/org-img/homesnw/img/ml-logo@2x.png?v=4.0" alt="logo de mercado libre"/>
            </div>
            <div className="countries">
                <div className="link-outer">
                    <Link className="link-box" to="/carousel/MLA"> 
                         <img className="flag" src="https://img.freepik.com/vector-gratis/ilustracion-bandera-argentina_53876-27120.jpg?size=626&ext=jpg" alt="bandera argentina"/> <h2>Argentina </h2>
                    </Link>
                </div>
                <div className="link-outer">
                    <Link className="link-box" to="/carousel/MBO"> 
                         <img className="flag" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Bolivia.svg/1200px-Flag_of_Bolivia.svg.png" alt="bandera boliviana"/> <h2>Bolivia</h2>
                    </Link>
                </div>
                <div className="link-outer">
                    <Link className="link-box" to="/carousel/MLB"> 
                         <img className="flag" src="https://img.freepik.com/vector-gratis/ilustracion-bandera-brasil_53876-27017.jpg?size=626&ext=jpg" alt="bandera brasilera"/> <h2>Brasil</h2> 
                    </Link>
                </div>
                <div className="link-outer">
                    <Link className="link-box" to="/carousel/MCO"> 
                         <img className="flag" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/1280px-Flag_of_Colombia.svg.png" alt="bandera colombiana"/> <h2>Colombia</h2> 
                    </Link>
                </div>
        </div>
        </div>

    );
}

export default Home;
