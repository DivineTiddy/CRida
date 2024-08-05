// SearchBar.js


function SearchBar({ prices, onSetPrice }) {
  function handleSortPrice(e) {
    const sortedPrice = +e.target.value;
    if (!sortedPrice) {
      onSetPrice('');
      return false;
    } else {
      onSetPrice(sortedPrice);
    }
  }

  return (
    <section className="section section--2">
      <div className="search--bar">
        <h3>Sort by</h3>
        <div className="search">
          <input type="text" placeholder='price' value={prices} onChange={handleSortPrice} />
          <button className='car--rentail--button' style={window.innerWidth <= 447 ? { width: "75px" } : { width: "91px" }} onClick={() => {}}>Search</button>
        </div>
      </div>
    </section>
  );
}

export default SearchBar;
