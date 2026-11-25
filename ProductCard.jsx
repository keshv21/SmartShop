function ProductCard({ product, addToCart }) {

  return (
    <div className="card">

      <img src={product.thumbnail} width="150" />

      <h3>{product.title}</h3>

      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>

      <button onClick={() => addToCart(product)}>
        Add To Cart
      </button>

    </div>
  );
}

export default ProductCard;