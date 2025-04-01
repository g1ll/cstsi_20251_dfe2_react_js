/* eslint-disable react/prop-types */
const ProductCategoryRow = ({ category })=> {
    return (
      <tr>
        <th colSpan="2">{category}</th>
      </tr>
    );
  }

  export {ProductCategoryRow}