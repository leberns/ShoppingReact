import { useEffect, useState } from 'react';
import { Loader } from './Loader';
import { ProductsViewer } from './ProductsViewer';

const ProductsProvider = (props) => {

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let unmounted = false;

    (async () => {
      try {
        const filter = props.filter;
        const searchUrl = filter ? 'api/product/Search/' + filter : 'api/product/GetProducts';
        const response = await fetch(searchUrl);
        const data = await response.json();
        if (unmounted) {
          return;
        }
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError(err);
      }
    })();

    return function cleanup() {
      unmounted = true
    };
  }, [props.filter]);

  if (error) {
    return (
      <div>
        {error}
      </div>
    );
  }

  let contents = loading
    ? <Loader />
    : <ProductsViewer items={products} />;

  return (
    <div>
      {contents}
    </div>
  );
}

export { ProductsProvider };