import './styles.css';
import {useParams} from 'react-router-dom';
import { useEffect, useState } from "react"; 

function Products() {
  const {site} = useParams();

 
  const  [ apiData, setApiData] = useState([]);
  useEffect(() => {
   fetchData();

  }, []);


  async function fetchData() {

    try {
      const data = await fetch(`https://api.mercadolibre.com/sites/${site}/search?q=`);
      console.log(data);
      const json = await data.json();

      setApiData(json);
    } catch(e) {
      console.log(e);
    }
    
    
  }
 


return (
        <>
            <h2 className="product">Aqui van los productos</h2>
            <ul>{apiData.map((num, key) => {
                    return <li key={key}>{num}</li>
                })
                }   
            </ul>
            
        </>
    );
              }

export default Products;
