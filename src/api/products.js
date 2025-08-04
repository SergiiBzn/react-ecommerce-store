export const fetchAllProducts = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) throw new Error('Error downloading...');
  return await res.json();
};
