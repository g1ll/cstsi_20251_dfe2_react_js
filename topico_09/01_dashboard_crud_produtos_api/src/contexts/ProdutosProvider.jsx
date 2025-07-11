/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import axiosClient from "../utils/axios-client";

export const ProdutosContext = createContext({
  data: null,
  loadProdutos: () => {},
  setData: () => {},
  editProduto: () => {},
  deleteProduto: () => {},
  addProduto:()=>{}
});

const ProdutosProvider = ({ children }) => {
  const [data, setData] = useState(null);

  const loadProdutos = async (id = null) => {
    const url = id ? `/produtos/${id}` : `/produtos`;
    try {
      const response = await axiosClient.get(url);
      console.log(response);
      const {data} = response;
      const _data = data?.data;
      console.log({_data});

      if (!_data) 
        throw new Error("Erro ao carregar produtos");

      Array.isArray(_data) && _data.reverse();
      setData(_data);
    } catch (error) {
      console.log(error);
    }
  };

  const addProduto = async (produto=null) => {
    try{
      if(!produto) throw Error("Produto não informado");
      console.log(`Cadastrar novo produto:`,{produto});
      const {data} = await axiosClient.post(`/produtos/`, produto)
      if(!data) throw new Error("Erro ao atualizar produto");
      const _data = data?.data; 
      const {message} = data;
     console.log({_data,message});
     loadProdutos()
     return message;
    }catch(error){
      console.error(error);
      return error?.response?.data?.message || "Erro ao atualizar produto";
    }
  };

  const editProduto = async (id, produto=null) => {
    try{
      console.log(`Atualizar Produto id: ${id}`,{produto});
      const {data} = await axiosClient.put(`/produtos/${id}`, produto)
      if(!data) throw new Error("Erro ao atualizar produto");
      const _data = data?.data; 
      const {message} = data;
     console.log({_data,message});
     loadProdutos()
     return message;
    }catch(error){
      console.error(error);
      return error?.response?.data?.message || "Erro ao atualizar produto";
    }
  };

  const deleteProduto = async (id) => {
    alert(`Remove Produto id: ${id}`);
    const {data} = await axiosClient.delete(`/produtos/${id}`);
    const {message} = data;
    console.log({message});
    loadProdutos()
    return message;
  };

  return (
    <ProdutosContext.Provider
      value={{
        data,
        loadProdutos,
        setData,
        addProduto,
        editProduto,
        deleteProduto,
      }}
    >
      {children}
    </ProdutosContext.Provider>
  );
};

export default ProdutosProvider;
