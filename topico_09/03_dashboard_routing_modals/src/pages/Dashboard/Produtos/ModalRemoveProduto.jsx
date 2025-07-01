/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import Modal from "../../../components/Modal/Modal";
import { Buttons, ImagemProduto } from "./ModalRemoveProdutoForm.styles";
import { ProdutosContext } from "../../../contexts/ProdutosProvider";
import { ButtonDelete } from "../../../components/Button/button.styled";
import imageUrl from '../../../assets/cards-thumbnail.jpg';

const BASE_URL = import.meta.env.VITE_BASE_URL;


const ModalRemoveProduto = ({ close, removedProduto }) => {
  const { deleteProduto } = useContext(ProdutosContext);
  const [message, setMessage] = useState(null);

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log("REMOVER PRODUTO", removedProduto);
      const message = await deleteProduto(removedProduto?.id);
      setMessage(message);
      setTimeout(close, 3000);
    } catch (error) {
      console.error(error);
      setMessage("Erro ao remover produto");
    }
  };

  return (
    <Modal title={`Remover Produto${removedProduto?.nome}`} close={close}>
      <form action="" method="get" onSubmit={onSubmit}>
        <ImagemProduto
          id="image-tag"
          src={
            removedProduto?.media.length > 0 ?
              removedProduto?.media[0]?.source.includes('http')
                ? removedProduto?.media[0].source
                : BASE_URL + '/storage/produtos/' + removedProduto?.media[0].source : imageUrl
          }
        />
        <p>
          Tem certeza que deseja remover o produto{" "}
          <strong>{removedProduto?.nome}</strong>?
        </p>
        <Buttons>
          <button className={"btn-cancel btn"} onClick={close}>
            Cancelar
          </button>
          <ButtonDelete className={"btn-delete "}>Remover Produto</ButtonDelete>
        </Buttons>
        {message && <p className="message ">{message}</p>}
      </form>
    </Modal>
  );
};

export default ModalRemoveProduto;
