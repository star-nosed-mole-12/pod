const Item = ({item}) => {
  
  return (
    <div className="item">
      <img src="" alt="Image of an item for sale" />
    <div className="sell-details">
      <h2>{item.name}</h2>
      <h2>{item.price}</h2>
      <h4>{item.sellerName}</h4>
      <h4>{item.sellerLocation}</h4>
    </div>
    <div className="sell-product-details">
      <p>{item.details}</p>
    </div>
    </div>
  );
}
 
export default Item;