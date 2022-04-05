import { useState } from 'react';
import { FilterInput } from './FilterInput';
import { Products } from './Products';

const ProductsWrapper = () => {

  const [filter, setFilter] = useState('');

  function onFilterChanged(newFilter) {
    setFilter(newFilter);
  }

  return (
    <>
      <h1 id="tabelLabel" >Products</h1>
      <FilterInput onFilterChanged={onFilterChanged} filter={filter} />
      <Products filter={filter} />
    </>
  );
}

export { ProductsWrapper };