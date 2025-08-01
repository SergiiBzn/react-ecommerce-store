export const fetchAllProducts = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) throw new Error('Ошибка при загрузке товаров');
  return await res.json();
};
