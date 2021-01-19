import './styles.css';
import {useParams} from 'react-router-dom';

function Products() {
    
  const {site} = useParams();
//fetch usando el dinamico
    return (
        <>
            <h2 className="product">Aqui van los productos</h2>
            (ul con el array)
            
        </>
    );
}

export default Products;
