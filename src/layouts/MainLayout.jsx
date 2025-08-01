import { Outlet, Link } from 'react-router-dom';

function MainLayout() {
  return (
    <div className='p-4'>
      <nav className='flex gap-4 mb-4 border-b pb-2'>
        <Link to='/'>Home</Link>
        <Link to='/cart'>Cart</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default MainLayout;
