/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { mockedProducts } from "../mocks/mockedProducts";

const MAX_TIMEOUT = 500;
const MOCKED_PRODUCTS = mockedProducts.reverse();

export const ProdutosContext = createContext({
  produto: {},
  listProdutos: [],
  setProduto: () => { },
  loadProdutos: () => { },
  filterProdutos: () => { },
  findProdutoById: () => { },
});

const ProdutosProvider = ({ children }) => {
  const [produto, setProduto] = useState({});
  const [listProdutos,setListProdutos] = useState([])

  const loadProdutos = () => {
    setTimeout(() =>setListProdutos(MOCKED_PRODUCTS), MAX_TIMEOUT);
  }

  const findProdutoById = (id) => {
    let produto = MOCKED_PRODUCTS.find(produto => produto.id === +id)
    setProduto(produto)
    return produto;
  }  

  const filterProdutos = (searchTerm) => {
    const filteredProducts = MOCKED_PRODUCTS.filter((product) => {
      return product.nome.toLowerCase().includes(searchTerm.toLowerCase())
    })
    setListProdutos(filteredProducts)
  }



  return (
    <ProdutosContext.Provider
      value={{
        produto,
        listProdutos,
        setProduto,
        loadProdutos,
        filterProdutos,
        findProdutoById,
      }}
    >
      {children}
    </ProdutosContext.Provider>
  );
};

export default ProdutosProvider;
