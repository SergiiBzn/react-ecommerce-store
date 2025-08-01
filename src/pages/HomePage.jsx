import { useState, useEffect } from 'react';
import { fetchAllProducts } from '../api/products';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchAllProducts();
        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) return <p>Загрузка...</p>;

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {products.map((product) => (
        <div key={product.id} className='border p-4 rounded'>
          <img
            src={product.image}
            alt={product.title}
            className='h-40 object-contain mx-auto'
          />
          <h2 className='font-bold text-sm mt-2'>{product.title}</h2>
          <p className='text-sm'>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
