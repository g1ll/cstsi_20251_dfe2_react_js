/* eslint-disable react/prop-types */
import ProductTable from "../ProductTable/ProductTable";
import SearchBar from "../SearchBar/SearchBar";

function FilterableProductTable({ products }) {
    return (
      <div>
        <SearchBar />
        <ProductTable products={products} />
      </div>
    );
  }

export default FilterableProductTable;