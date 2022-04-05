const FilterInput = (props) => {

  function onFilterChanged(event) {
    var newFilter = event.target.value;
    props.onFilterChanged(newFilter);
  }

  return (
    <input name="filterInput" onChange={onFilterChanged} value={props.filter} />
  );
}

export { FilterInput };