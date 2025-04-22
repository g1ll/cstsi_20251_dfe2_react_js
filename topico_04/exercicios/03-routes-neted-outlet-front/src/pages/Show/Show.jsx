import { useEffect, useState } from "react"
import { Cards } from "../../components/Cards/Cards";
import { Link, useNavigate, useParams } from "react-router-dom";
import { mockedProducts } from "../../data/mockedProducts";
import "./show.css";

const Show = () => {

    const [data, setData] = useState({})
    const { id } = useParams()
    const navigate = useNavigate();


    console.log("id", Number(id))

    useEffect(() => {
        setTimeout(() => {
            let [produto] = mockedProducts.filter(produto => produto.id === +id);
            !produto && navigate('/notfound')
            setData(produto)
        }, 1000)
    }, []);

    return (
        <div className='show__main_content'>
            <div className="show__container">
                {!data?.nome
                    ? <p>Carregando...</p>
                    : (<>
                        <h1>{data.nome}</h1>
                        <Cards key={`card${id}`} item={data} />
                        <p>{data.descricao}</p>
                    </>)
                }
            </div>
            <Link to="/">Voltar</Link>
        </div>
    );
};

export default Show;
