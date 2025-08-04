import { useCart } from '../context/useCart';

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return <p>Ihr Warenkorb ist leer.</p>;
  }

  return (
    <div>
      <h1 className='text-xl font-bold mb-4'>Warenkorb</h1>
      <div className='space-y-4'>
        {cartItems.map((item) => (
          <div
            key={item.id}
            className='border p-4 rounded flex items-center gap-4'
          >
            <img
              src={item.image}
              alt={item.title}
              className='w-16 h-16 object-contain'
            />
            <div className='flex-1'>
              <h2 className='font-semibold text-sm'>{item.title}</h2>
              <p className='text-sm'>Menge: {item.quantity}</p>
              <p className='text-sm'>
                Preis: ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className='text-red-500 text-sm hover:underline'
            >
              Entfernen
            </button>
          </div>
        ))}
      </div>
      <div className='mt-6 font-bold text-lg'>
        Gesamtbetrag: ${totalPrice.toFixed(2)}
      </div>
    </div>
  );
};

export default CartPage;
