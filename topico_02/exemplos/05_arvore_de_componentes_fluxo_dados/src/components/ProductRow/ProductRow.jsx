/* eslint-disable react/prop-types */
const ProductRow = ({ product }) =>{
    const name = product.stocked ? (
      product.name
    ) : (
      <span style={{ color: 'red' }}>{product.name}</span>
    );
  
    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }

  export {ProductRow}