import { useState } from 'react';
import { FilterInput } from './FilterInput';
import { ProductsProvider } from './ProductsProvider';

const ProductsWrapper = () => {

  const [filter, setFilter] = useState('');

  function onFilterChanged(newFilter) {
    setFilter(newFilter);
  }

  return (
    <>
      <h1 id="tabelLabel" >Products</h1>
      <FilterInput onFilterChanged={onFilterChanged} filter={filter} />
      <ProductsProvider filter={filter} />
    </>
  );
}

export { ProductsWrapper };