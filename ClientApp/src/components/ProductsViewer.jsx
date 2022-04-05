const ProductsViewer = (props) => {

  return (
    <table aria-labelledby="tabelLabel">
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {props.items.map(item =>
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.category}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export { ProductsViewer };