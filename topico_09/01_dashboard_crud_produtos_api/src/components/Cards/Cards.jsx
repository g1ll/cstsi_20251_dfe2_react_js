/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { CardContainer, CardImage, CardMain } from "./card.styled";
import defaultImage from '../../assets/cards-thumbnail.jpg';

export const Cards = ({ item }) => {

  const BASE_URL = import.meta.env.VITE_BASE_URL;

  // const imageUrl = item?.media?.length>0
  //   ? (item?.media[0].source?.includes('http')
  //       ? item.media[0].source
  //       :`${BASE_URL}/storage/produtos/${item.media[0].source}`
  //     )
  //   :(item?.imagem_links?.length>0
  //       ?item?.imagem_links[0]
  //       :defaultImage);

  let imageUrl = defaultImage;
  if(item?.media?.length>0){
    if(item?.media[0].source?.includes('http'))
      imageUrl = item?.media[0].source;
    else 
      imageUrl = `${BASE_URL}/storage/produtos/${item.media[0].source}`
  }else if(item?.imagem_links?.length>0){
     imageUrl = item?.imagem_links[0];
  }
    
  console.log(imageUrl);
  return (
    <CardContainer>
      <Link to={`/produto/${item.id}`}>
        <CardMain>
          <h3>{item.nome}</h3>
          <CardImage>
            <img src={`${imageUrl}`} alt='Imagem do produto' />
          </CardImage>
          <h4>
            R$ {item.preco}
          </h4>
          <p>
            {item.descricao}
          </p>
        </CardMain>
      </Link>
    </CardContainer>
  );
};
