import './styles.css';
import { Link } from "react-router-dom";




function Home() {

    return(
        <>
            <h2 className="home">Aqui va el Home Amarrillo</h2>
            <Link to="/carousel/MLA"> Argentina </Link>
            <Link to="/carousel/MUY"> Uruguay </Link>
            <Link to="/carousel/MCH"> Chile </Link>
        </>
    );
}

export default Home;
