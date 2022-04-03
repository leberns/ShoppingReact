import { useEffect, useState } from 'react';

const Products = () => {

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let unmounted = false;

    (async () => {
      try {
        const response = await fetch('api/product/GetProducts');
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
  }, []);

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
    ? <p><em>Loading with Hooks...</em></p>
    : renderProducts(products);

  return (
    <div>
      <h1 id="tabelLabel" >Products</h1>
      {contents}
    </div>
  );
}

export { Products };