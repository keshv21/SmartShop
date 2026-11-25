function Cart({ cart, setCart }) {

  function increase(id) {
    setCart(cart.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ));
  }

  function decrease(id) {
    setCart(cart.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ).filter(item => item.quantity > 0));
  }
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.map(item => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>Price: ${item.price}</p>
          <button onClick={() => decrease(item.id)}>
            -
          </button>
          {item.quantity}
          <button onClick={() => increase(item.id)}>
            +
          </button>
        </div>
      ))}

      <h2>Total: ${total.toFixed(2)}</h2>

    </div>
  );
}

export default Cart;