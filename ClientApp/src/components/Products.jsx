import { useEffect, useState } from 'react';
import { Loader } from './Loader';

const Products = (props) => {

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

  function renderProducts(products) {
    return (
      <table aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product =>
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.category}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  if (error) {
    return (
      <div>
        {error}
      </div>
    );
  }

  let contents = loading
    ? <Loader />
    : renderProducts(products);

  return (
    <div>
      {contents}
    </div>
  );
}

export { Products };