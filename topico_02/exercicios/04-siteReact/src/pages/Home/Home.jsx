import "./home.css"
import { Cards } from "../../components/Cards/Cards";
import { mockedProducts } from "../../data/mockedProducts";


const Home = () => {

  const listProdutos = mockedProducts.reverse()

  return (
    <div>
      <div className="home">
        <div className="products_grid_container">
          {!listProdutos.length
            ? <p>Carregando...</p>
            :listProdutos.map((product, key) => (
              <Cards key={`card${key}`} item={product} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Home;
